import NavBar from '../src/components/Navbar/Navbar';
import CryptoCard_V2 from '../src/components/CryptoCard_V2/CryptoCard_V2';
import Footer from '../src/components/Footer/Footer';

//This file should only include components
function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar></NavBar>
            <CryptoCard_V2></CryptoCard_V2>
            <Footer></Footer>
        </div>
     );
};

export default Page;