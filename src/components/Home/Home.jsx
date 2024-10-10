import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Home = () => {
    return (
    <> 
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </> 
    );
};

export default Home;