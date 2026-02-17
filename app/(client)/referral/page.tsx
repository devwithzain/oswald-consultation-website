import {
	ReferralFaqs,
	ReferralHero,
	ReferralHowItWork,
	ReferralContactForm,
} from "@/container";

export default function ReferralPage() {
	return (
		<>
			<ReferralHero />
			<ReferralHowItWork />
			<ReferralContactForm />
			<ReferralFaqs />
		</>
	);
}
