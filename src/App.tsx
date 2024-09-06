import Footer from "@components/Footer";
import Header from "./components/Header";
import Faq from "@components/FAQ";
import Hero from "@components/Hero";

function App() {
	return (
		<>
			<div className='md:mx-32'>
				<Header />
				<main></main>
			</div>
			<Hero />
			<Faq />
			<Footer />
		</>
	);
}

export default App;
