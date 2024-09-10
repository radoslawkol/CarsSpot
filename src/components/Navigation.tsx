import Button from "./UI/Button";
import NavItem from "./UI/NavItem";

interface IProps {
	isMenuOpen: boolean;
	onMenuClose: () => void;
}

export default function Navigation({ isMenuOpen, onMenuClose }: IProps) {
	return (
		<nav
			className={`${
				isMenuOpen
					? "w-full py-8 flex flex-col gap-8 justify-center items-center text-center absolute top-[76px] left-0 bg-white z-10 border-b-1"
					: "hidden"
			} md:block md:static md:w-auto md:bg-transparent md:border-none md:py-0`}
		>
			<ul className='flex flex-col md:flex-row gap-2 md:gap-6'>
				<NavItem hashSection='gallery' onClick={onMenuClose}>
					Galeria Zdjęć
				</NavItem>
				<NavItem hashSection='faq' onClick={onMenuClose}>
					FaQ
				</NavItem>
			</ul>
			<Button styles='md:hidden' variant={"solid"}>
				Zadzwoń do nas
			</Button>
		</nav>
	);
}
