import { useState } from "react";
import Carousel from "./Carousel";
import Tab from "./Tab";

export default function Galery() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section id='gallery' className='my-24 px-4 md:px-32 2xl:px-72'>
			<div className='flex flex-col gap-2'>
				<span className='text-lg md:text-[21.5px] text-fontColor-secondary'>
					Prezentacja firmy
				</span>
				<h2 className='text-3xl md:text-[40px] md:leading-10 font-heading text-fontColor-primary'>
					Zobacz naszą galerię zdjęć
				</h2>
			</div>
			<div className='my-8 flex gap-8 font-support text-[15px] -tracking-[0.02em]'>
				<Tab onActiveTab={() => setActiveTab(0)} isActive={activeTab === 0}>
					Samochody osobowe
				</Tab>
				<Tab onActiveTab={() => setActiveTab(1)} isActive={activeTab === 1}>
					Samochody dostawcze
				</Tab>
			</div>
			<Carousel activeTab={activeTab} />
		</section>
	);
}
