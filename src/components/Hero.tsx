import Button from "@components/UI/Button";
import HeroImage from "@assets/Hero.png";
import Lines from "@assets/Lines.svg";
import { useEffect, useState } from "react";

export default function Hero() {
	const [headerHeight, setHeaderHeight] = useState<number>();

	useEffect(() => {
		const header = document.getElementById("header");
		const headerHeight = header?.getBoundingClientRect().height ?? 70;

		setHeaderHeight(headerHeight);
	}, []);

	return (
		<section
			style={{ height: `calc(100vh - ${headerHeight}px)` }}
			className='relative md:px-0 py-16 md:py-24  text-fontColor-primary'
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
			<div
				className='lg:absolute lg:right-0 lg:top-0 -z-10 w-3/4 lg:flex lg:justify-end'
				style={{ top: `-${headerHeight}px` }}
			>
				<img
					src={HeroImage}
					alt='Hero image showing Audi, Mercedes and BMW cars.'
					className='absolute right-0 bottom-8 w-4/5 lg:w-auto lg:-bottom-32 xl:-bottom-44 '
				/>
				<img
					src={Lines}
					className='hidden lg:block lg:relative lg:right-8 xl:right-12 -z-20'
				/>
			</div>
		</section>
	);
}
