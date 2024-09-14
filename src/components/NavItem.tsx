import { ReactNode } from "react";

interface IProps {
	hashSection: string;
	onClick: () => void;
	children: ReactNode;
}

export default function NavItem({ hashSection, onClick, children }: IProps) {
	return (
		<li className='font-support hover:text-fontColor-secondary delay-150'>
			<a href={`#${hashSection}`} onClick={onClick}>
				{children}
			</a>
		</li>
	);
}
