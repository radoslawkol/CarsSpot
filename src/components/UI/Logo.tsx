import LogoIcon from "@assets/LogoIcon.svg";
import LogoTitle from "@assets/LogoTitle.svg";

export default function Logo() {
	return (
		<div className='flex gap-2'>
			<img src={LogoIcon} alt='CarsSpot Logo Icon' />
			<img src={LogoTitle} alt='CarsSpot' />
		</div>
	);
}
