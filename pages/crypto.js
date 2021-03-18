import NavBar from '../src/components/Navbar/Navbar';
import CryptoCard from '../src/components/CryptoCard/CryptoCard';
import Footer from '../src/components/Footer/Footer';

//This file should only include components
function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar></NavBar>
            <CryptoCard></CryptoCard>
            <Footer></Footer>
        </div>
     );
};

export default Page;