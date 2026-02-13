import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
		},
	},
};

export const itemVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

export const imageVariants: Variants = {
	hidden: { opacity: 0, scale: 0.9, x: 20 },
	visible: {
		opacity: 1,
		scale: 1,
		x: 0,
		transition: { duration: 1, ease: "easeOut", delay: 0.5 },
	},
};
