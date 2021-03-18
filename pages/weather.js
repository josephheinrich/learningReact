import AddCrypto from '../src/components/AddCrypto/AddCrypto';
import Footer from '../src/components/Footer/Footer';
import NavBar from '../src/components/Navbar/Navbar';
import WeatherCard from '../src/components/WeatherCard/WeatherCard';

//This file should only include components
export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar></NavBar>
            <WeatherCard></WeatherCard>
            <Footer></Footer>
        </div>
    );
};