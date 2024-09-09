import Footer from "@components/Footer";
import Header from "./components/Header";
import Faq from "@components/Faq";
import Hero from "@components/Hero";
import Galery from "@components/Galery";

function App() {
	return (
		<>
			<div className='md:mx-32'>
				<Header />
				<main></main>
			</div>
			<Hero />
			<Galery />
			<Faq />
			<Footer />
		</>
	);
}

export default App;
