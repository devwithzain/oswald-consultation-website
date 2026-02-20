export interface SplitTextProps {
	text: string;
	className?: string;
	delay?: number;
	duration?: number;
	ease?: string | ((t: number) => number);
	splitType?: "chars" | "words" | "lines" | "words, chars";
	from?: gsap.TweenVars;
	to?: gsap.TweenVars;
	threshold?: number;
	rootMargin?: string;
	tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
	textAlign?: React.CSSProperties["textAlign"];
	onLetterAnimationComplete?: () => void;
}

export type TmailData = {
	user: {
		name: string;
		email: string;
	};
	url: string;
};

export type TmailTokenData = {
	user: {
		name: string;
		email: string;
	};
	token: string;
};

export type TwoFactorData = {
	totpURI: string;
	backupCodes: string[];
};

export type ProfileUpdateFormType = {
	name?: string;
	email?: string;
	image?: string | undefined;
};
