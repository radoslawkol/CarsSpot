import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alphaRomeo from "@assets/AlphaRomeo.png";
import maserati from "@assets/Maserati.png";
import audi from "@assets/Audi.png";

const carImages = [
	{ src: alphaRomeo, alt: "Red Alpha Romeo" },
	{ src: maserati, alt: "Black Maserati Granturismo" },
	{ src: audi, alt: "Black Audi" },
];

const deliveryCarImages = [
	{
		src: "https://placehold.co/600x446?text=Delivery+Van",
		alt: "White Delivery Van",
	},
	{
		src: "https://placehold.co/600x446?text=Blue+Truck",
		alt: "Blue Truck",
	},
	{
		src: "https://placehold.co/600x446?text=Small+Cargo+Van",
		alt: "Small Cargo Van",
	},
];

export default function Carousel({ activeTab }: { activeTab: number }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className='slider-container overflow-hidden'>
			<Slider {...settings}>
				{activeTab === 0 &&
					carImages?.map((car, i) => (
						<div>
							<img src={car.src} alt={car.alt} key={i} />
						</div>
					))}
				{activeTab === 1 &&
					deliveryCarImages.map((car, i) => (
						<div>
							<img src={car.src} alt={car.alt} key={i} />
						</div>
					))}
			</Slider>
		</div>
	);
}
