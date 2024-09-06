import Button from "./UI/Button";
import Logo from "./UI/Logo";
import NavItem from "./UI/NavItem";

export default function Header() {
	return (
		<header className='flex justify-between items-center gap-4 py-4'>
			<Logo />
			<nav>
				<ul className='flex gap-6'>
					<NavItem>Galeria Zdjęć</NavItem>
					<NavItem>FaQ</NavItem>
				</ul>
			</nav>
			<Button variant={"solid"}>Zadzwoń do nas</Button>
		</header>
	);
}
