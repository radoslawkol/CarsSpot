import Button from "@components/UI/Button";
import HeroImage from "@assets/Hero.png";
import Lines from "@assets/Lines.svg";
import { useEffect, useState } from "react";

export default function Hero() {
	const [headerHeight, setHeaderHeight] = useState<number>();

	useEffect(() => {
		const header = document.getElementById("header");
		console.log(header);
		const headerHeight = header?.getBoundingClientRect().height ?? 70;

		setHeaderHeight(headerHeight);
	}, []);
	// TODO  bind two images together to not spread out
	return (
		<section
			style={{ height: `calc(100vh - ${headerHeight}px)` }}
			className='md:relative md:px-0 py-16 md:py-24  text-fontColor-primary'
		>
			<div className='sm:p-8  md:px-32 2xl:px-72 flex flex-col items-center text-center sm:items-start sm:text-left gap-8 md:gap-12'>
				<h1 className='text-6xl md:text-[76.29px] md:leading-[83.92px] font-heading tracking-[-0.04em]'>
					Sprzedajemy samochody <br /> z europy
				</h1>
				<p className='font-body'>
					Kup komfortowy pojazd, aby każda podróż <br /> była wyjątkowym
					przeżyciem.
				</p>
				<div className='flex flex-col sm:flex-row gap-3 md:gap-6'>
					<Button variant='solid'>Zobacz zdjęcia</Button>
					<Button variant='outline'>Zadzwoń do nas</Button>
				</div>
			</div>
			<img
				src={HeroImage}
				alt='Hero image showing Audi, Mercedes and BMW cars.'
				className='md:w-[70%] lg:w-[75%] xl:w-[70%] md:absolute md:right-0 bottom-4 lg:bottom-44 2xl:bottom-12  mt-52 md:mt-4 pl-6 sm:pl-16'
			/>
			<img
				src={Lines}
				className='hidden lg:block lg:absolute lg:right-2 2xl:right-20 lg:-top-20 -z-10'
			/>
		</section>
	);
}
