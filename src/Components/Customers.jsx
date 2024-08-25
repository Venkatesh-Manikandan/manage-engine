import '../Assets/Styles/Customers.css'
import FirstVideo from '../Assets/Images/Customers/customers1.jpg'
import SecondVideo from '../Assets/Images/Customers/customers2.jpg'
import Certis from '../Assets/Images/Customers/customers_logo1.png'
import Ezibuy from '../Assets/Images/Customers/customers_logo2.png'
import Hcl from '../Assets/Images/Customers/customers_logo3.png'
import Strathallan from '../Assets/Images/Customers/customers_logo4.png'
import PlayButton from '../Assets/Images/Customers/play-icon.svg'

function Customers() {
    return(
        <div className="customer_sec_wrapper">
            <div className="default_container">
                <div className='section_inner'>
                    <h2>280,000 organizations across 190 countries trust ManageEngine <br></br>to manage their IT.</h2>

                    <div className='customer_story_section'>
                        <div className='about_customer flex_row'>
                            <a href='javascript:;' className='customer_card' title='West Yorkshire Combined Authority adopts ManageEngine solutions to scrutinize its critical IT'>
                                <div className='video_section'>
                                    <img src={FirstVideo} alt='Thumbnail'></img>
                                </div>
                                <div className='desc flex_row'>
                                    <p>West Yorkshire Combined Authority adopts ManageEngine solutions to scrutinize its critical IT</p>
                                    <img src={PlayButton} alt='Play' className='play_button'></img>
                                </div>
                            </a>

                            <a href='javascript:;' className='customer_card' title='Certis'>
                                <img src={Certis} alt='Certis Logo'></img>
                                <p>Europe ensures uptime with Applications Manager</p>
                            </a>

                            <a href='javascript:;' className='customer_card' title='Ezibuy'>
                                <img src={Ezibuy} alt='Ezibuy Logo'></img>
                                <p>increases SLA compliance by <br></br>70 percent using Analytics Plus</p>
                                <span ></span>
                            </a>

                            <a href='javascript:;' className='customer_card' title='HCL'>
                                <img src={Hcl} alt='HCL Logo'></img>
                                <p>uses Log360 to solve log management challenges</p>
                            </a>

                            <a href='javascript:;' className='customer_card' title=''>
                                <img src={Strathallan} alt='Strathallan Logo'></img>
                                <p>manages endpoints seamlessly with Endpoint Central</p>
                            </a>

                            <a href='javascript:;' className='customer_card' title='Secure and Simplify your IT infrastructure with ManageEngine'>
                                <div className='video_section'>
                                    <img src={SecondVideo} alt='Thumbnail'></img>
                                </div>
                                <div className='desc flex_row'>
                                    <p>Secure and Simplify your IT infrastructure with ManageEngine</p>
                                    <img src={PlayButton} alt='Play' className='play_button'></img>
                                </div>
                            </a>

                        </div>

                        <div className='btn_div'>
                            <a href='javascript:;' className='view_button' title='View more customer success stories »'>View more customer success stories »</a>
                        </div>
                    </div>

                    <div className='customer_logo_section'>
                        <h2>Nine of every ten Fortune 100 companies trust us to manage their IT.</h2>

                        <div className='logo_wrapper'>
                            <a href='javascript:;' title='ManageEngine Customers'>
                                <ul className='flex_row'>
                                    <li>
                                        <div className='customer_logo'></div>
                                    </li>
                                    <li>
                                        <div className='customer_logo'></div>
                                    </li>
                                    <li>
                                        <div className='customer_logo'></div>
                                    </li>
                                    <li>
                                        <div className='customer_logo'></div>
                                    </li>
                                    <li>
                                        <div className='customer_logo'></div>
                                    </li>
                                    <li>
                                        <div className='customer_logo'></div>
                                    </li>
                                    <li>
                                        <div className='customer_logo'></div>
                                    </li>
                                    <li>
                                        <div className='customer_logo'></div>
                                    </li>
                                </ul>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Customers