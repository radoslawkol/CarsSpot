import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import Navigation from "./Navigation";
import Button from "./UI/Button";
import Logo from "./UI/Logo";
import { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const headerRef = useRef(null);
	useClickOutside(headerRef, () => setIsMenuOpen(false));

	return (
		<header
			ref={headerRef}
			id='header'
			className={`relative px-4 sm:px-8 md:px-32 2xl:px-72 py-4 flex justify-between items-center gap-4`}
		>
			<Logo />
			<Navigation
				isMenuOpen={isMenuOpen}
				onMenuClose={() => setIsMenuOpen(false)}
			/>
			<Button styles='hidden md:block' variant={"solid"}>
				Zadzwoń do nas
			</Button>
			<button
				onClick={() => setIsMenuOpen((prev) => !prev)}
				className='md:hidden'
			>
				{isMenuOpen ? (
					<FontAwesomeIcon
						icon={faX}
						className='p-2 text-fontColor-primary h-6 w-6'
					/>
				) : (
					<FontAwesomeIcon
						icon={faBars}
						className='p-2 text-fontColor-primary h-6 w-6'
					/>
				)}
			</button>
		</header>
	);
}
