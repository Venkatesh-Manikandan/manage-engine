import Header from "./Header";
import '../Assets/Styles/CommonStyle.css';
import Banner from "./Banner";
import Products from "./Products";
import Slider from "./Slider";
import Customers from "./Customers";
import Connect from "./Connect";
import Events from "./Events";
import Footer from "./Footer";
import PrimaryBtn from "./PrimaryBtn";

function LandingPage() {

    const btnText = ['FREE TRAILS']

    return(
        <div className="wrapper">
            <Header />
            <Banner />
            <Products />
            <Slider />
            <Customers />
            <Connect />
            <Events />

            <div className="trials_wrapper">
                <div className="default_container">
                    <div className="trials_inner">
                        <h2>Free 30-day trial with access to all premium features.</h2>
                        {/* <a href="javascript:;" title="FREE TRIALS" className="cmn_btn">FREE TRIALS</a> */}
                        <PrimaryBtn btnText = {btnText} />
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
export default LandingPage