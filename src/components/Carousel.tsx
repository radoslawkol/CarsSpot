import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carsImages } from "@data/carsImages";
import { deliveryCarImages } from "@data/deliveryCarsImages";

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
					carsImages?.map((car, i) => (
						<div key={i}>
							<img src={car.src} alt={car.alt} />
						</div>
					))}
				{activeTab === 1 &&
					deliveryCarImages.map((car, i) => (
						<div key={i}>
							<img src={car.src} alt={car.alt} />
						</div>
					))}
			</Slider>
		</div>
	);
}
