import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Audio } from "react-loader-spinner";


const Home = () => {
    const navigation=useNavigation();
    return (
    <> 
        <Header></Header>
        {
            navigation.state==='loading'? <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
          :
          <Outlet></Outlet>
        }
   
        <Footer></Footer>
    </> 
    );
};

export default Home;