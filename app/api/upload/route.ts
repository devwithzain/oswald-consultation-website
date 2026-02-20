import path from "path";
import fs from "fs/promises";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	try {
		const formData = await req.formData();
		const file = formData.get("image") as File;

		if (!file) {
			return NextResponse.json({ error: "No file provided" }, { status: 400 });
		}

		if (file.size > 1024 * 1024) {
			return NextResponse.json(
				{ error: "File size must be less than 1MB" },
				{ status: 400 },
			);
		}

		if (!file.type.startsWith("image/")) {
			return NextResponse.json(
				{ error: "File must be an image" },
				{ status: 400 },
			);
		}

		if (session.user.image && session.user.image.startsWith("/uploads/")) {
			const oldImagePath = path.join(
				process.cwd(),
				"public",
				session.user.image,
			);
			try {
				await fs.access(oldImagePath);
				await fs.unlink(oldImagePath);
			} catch (err) {
				console.error("Failed to delete old image:", err);
			}
		}

		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);

		const extension = file.name.split(".").pop();
		const filename = `${randomUUID()}.${extension}`;
		const uploadDir = path.join(process.cwd(), "public", "uploads");
		const filePath = path.join(uploadDir, filename);

		await fs.mkdir(uploadDir, { recursive: true });

		await fs.writeFile(filePath, buffer);

		return NextResponse.json({ url: `/uploads/${filename}` });
	} catch (error) {
		console.error("Upload error:", error);
		return NextResponse.json(
			{ error: "Failed to upload image" },
			{ status: 500 },
		);
	}
}
