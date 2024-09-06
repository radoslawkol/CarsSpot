import Footer from "@components/Footer";
import Header from "./components/Header";
import Faq from "@components/FAQ";

function App() {
	return (
		<>
			<div className='md:mx-32'>
				<Header />
				<main></main>
			</div>
			<Faq />
			<Footer />
		</>
	);
}

export default App;
