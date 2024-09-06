export default function Footer() {
	return (
		<footer className='flex flex-col md:flex-row md:justify-between gap-4 px-10 py-6  md:px-30 w-full font-body text-fontColor-white bg-background-dark'>
			<p className='font-bold'>Cars Spot</p>
			<a href='/' className='underline'>
				Polityka prywatności
			</a>
		</footer>
	);
}
