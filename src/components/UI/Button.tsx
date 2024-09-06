import { ReactNode } from "react";

interface IProps {
	variant: "solid" | "outline";
	children: ReactNode;
}

export default function Button({ variant = "solid", children }: IProps) {
	const baseStyles =
		"py-2 px-4 font-support font-semibold text-[15px] rounded tracking-[-0.02em] hover:scale-95 hover:shadow-md transition delay-150";

	const variantStyles = {
		solid: `bg-background-secondary text-white`,
		outline: `border-1 border-secondary text-secondary`,
	};

	return (
		<button className={`${baseStyles} ${variantStyles[variant]} `}>
			{children}
		</button>
	);
}
