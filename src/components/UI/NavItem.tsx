import { ReactNode } from "react";

interface IProps {
	children: ReactNode;
}

export default function NavItem({ children }: IProps) {
	return (
		<li className='font-support hover:text-fontColor-secondary delay-150'>
			<a href='#galery'>{children}</a>
		</li>
	);
}
