import {
	blog01,
	blog02,
	client,
	client01,
	client02,
	clinical,
	cultural,
	service01,
	service02,
	service03,
	service04,
	service05,
} from "@/public";

export const navbarlinks = [
	{
		id: 1,
		title: "Home",
		href: "/",
	},
	{
		id: 2,
		title: "About Us",
		href: "/about-us",
	},
	{
		id: 3,
		title: "Services",
		href: "/services",
	},
	{
		id: 4,
		title: "DUI/DWI Programs",
		href: "/dui-dwi-programs",
	},
	{
		id: 5,
		title: "Counseling & Education",
		href: "/counseling-education",
	},
	{
		id: 6,
		title: "Referral",
		href: "/referral",
	},
	{
		id: 7,
		title: "Resources",
		href: "/resources",
	},
	{
		id: 8,
		title: "Blog",
		href: "/blog",
	},
	{
		id: 9,
		title: "FAQ's",
		href: "/faqs",
	},
	{
		id: 10,
		title: "Contact Us",
		href: "/contact-us",
	},
];

export const servicesData = [
	{
		id: 1,
		title: "Virtual or In-Person Bilingual Evaluations",
		image: service01,
	},
	{
		id: 2,
		title: "Individual and Group Counseling",
		image: service02,
	},
	{
		id: 3,
		title: "Court-Mandated Substance Use Education & Treatment Groups",
		image: service03,
	},
	{
		id: 4,
		title: "Court-Ordered Compliance Monitoring & Aftercare Planning",
		image: service04,
	},
	{
		id: 5,
		title: "MVA Driver Improvement",
		image: service05,
	},
];

export const specialistsData = [
	{
		id: 1,
		name: "Dr. Adam Grant",
		role: "Clinical Psychologist",
		image:
			"https://images.pexels.com/photos/4100518/pexels-photo-4100518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder
	},
	{
		id: 2,
		name: "Dr. Sarah Johnson",
		role: "Substance Abuse Counselor",
		image:
			"https://images.pexels.com/photos/4098228/pexels-photo-4098228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder
	},
	{
		id: 3,
		name: "Dr. Michael Chen",
		role: "Family Therapist",
		image:
			"https://images.pexels.com/photos/5212359/pexels-photo-5212359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder
	},
];

export const reasonsData = [
	{
		id: 1,
		title: "Clinical Excellence",
		desc: "Credentialed staff, evidence-based practices, and strict compliance.",
		icon: clinical,
	},
	{
		id: 2,
		title: "Client-Centered Care",
		desc: "Tailored treatment plans and dignity-centered policies.",
		icon: client,
	},
	{
		id: 3,
		title: "Cultural Competence",
		desc: "Bilingual services and inclusive program design.",
		icon: cultural,
	},
];

export const testimonialsData = [
	{
		id: 1,
		name: "Peter Jack",
		role: "Working Professional",
		text: "O.R.E.A transformed my life. The support I received was unparalleled. I would recommend them to anyone.",
		image: client01,
	},
	{
		id: 2,
		name: "Laura Fanty",
		role: "School Teacher",
		text: "The bilingual evaluations made the process so much easier for my family. I would recommend them to anyone.",
		image: client02,
	},
];

export const blogsData = [
	{
		id: 1,
		title: "Mental Health Awareness: Tips for Daily Wellbeing",
		date: "Oct 12, 2025",
		image:
			"https://images.pexels.com/photos/4098242/pexels-photo-4098242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		id: 2,
		title: "Understanding Substance Use Disorder and Recovery",
		date: "Oct 15, 2025",
		image:
			"https://images.pexels.com/photos/4100511/pexels-photo-4100511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
];

export const featuredBlogs = [
	{
		id: 1,
		title: "DUI & Personal Counseling Services",
		category: "Exercise",
		date: "02 Nov, 2025",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcor mattis, pulvinar dapibus leo.",
		image: blog01,
	},
	{
		id: 2,
		title: "Counseling & DUI Wellness Programs",
		category: "Exercise",
		date: "02 Nov, 2025",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcor mattis, pulvinar dapibus leo.",
		image: blog02,
	},
];

export const sideBlogs = [
	{
		title: "Compassionate Counseling & DUI Treatment Programs",
		date: "18 July, 2025",
	},
	{
		title: "Professional Counseling for Court-Ordered & Personal Needs",
		date: "06 Sep, 2025",
	},
	{
		title: "Healing Through Counseling, Education & Treatment",
		date: "02 Nov, 2025",
	},
];
