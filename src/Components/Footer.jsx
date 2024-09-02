import '../Assets/Styles/Footer.css'
import PromoBanner1 from '../Assets/Images/Footer/promo-banner1.jpg'
import PromoBanner2 from '../Assets/Images/Footer/promo-banner2.jpg'
import LinkedIn from '../Assets/Images/Footer/Linkedin.svg'
import Twitter from '../Assets/Images/Footer/Twitter.svg'
import Facebook from '../Assets/Images/Footer/Facebook.svg'
import Instagram from '../Assets/Images/Footer/Instagram.png'
import Youtube from '../Assets/Images/Footer/Youtube.svg'
import FooterMenu from './FooterMenu'

function Footer() {

    const footerMenuLinks = [
        {
            heading: 'Resources',
            footerLink: 'Blog',
            footerLink: 'Insights',
            footerLink: 'Academy',
            footerLink: 'Customer stories',
            footerLink: 'Community',
            footerLink: 'White papers',
            footerLink: 'Product documentation',
        },
        {
            heading: 'Company',
            footerLink: 'About us',
            footerLink: 'Customers',
            footerLink: 'Analyst reports',
            footerLink: 'Events',
            footerLink: 'Newsroom',
            footerLink: 'Partner with us',
            footerLink: 'Careers',
            footerLink: 'Sitemap',
        },
        {
            heading: 'Training and support',
            footerLink: 'Contact support',
            footerLink: 'Store',
            footerLink: 'Marketplace',
            footerLink: 'Training and certification',
        },
        // {
        //     heading: 'Connect with us:',
        //     socialLink: '',
        //     socialLink: '',
        //     socialLink: '',
        //     socialLink: '',
        //     socialLink: '',
        // }
    ]

    return(
        <footer>
            <div className="default_container">
                <div className="main_footer flex_row">

                    <div className="footer_column promo_banner_section">
                        <a href="javascript:;" title="Transform your financial services and banking operations">
                            <img src={PromoBanner1} alt="Transform your financial services and banking operations" />
                        </a>
                        <a href="javascript:;" title="Comply with the ISO/IEC 20000 standard">
                            <img src={PromoBanner2} alt="Comply with the ISO/IEC 20000 standard" />
                        </a>
                    </div>
                    
                    <div className="footer_column">
                        <h2>Resources</h2>
                        <ul>
                            <li>
                                <a href="javascript:;" title="Blog">Blog</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Insights">Insights</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Academy">Academy</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Customer stories">Customer stories</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Community">Community</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="White papers">White papers</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Product documentation">Product documentation</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_column">
                        <h2>Company</h2>
                        <ul>
                            <li>
                                <a href="javascript:;" title="About us">About us</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Customers">Customers</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Analyst reports">Analyst reports</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Events">Events</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Newsroom">Newsroom</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Partner with us">Partner with us</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Careers">Careers</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Sitemap">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_column">
                        <h2>Training and support</h2>
                        <ul>
                            <li>
                                <a href="javascript:;" title="Contact support">Contact support</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Store">Store</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Marketplace">Marketplace</a>
                            </li>
                            <li>
                                <a href="javascript:;" title="Training and certification">Training and certification</a>
                            </li>
                        </ul>

                        <div className='social_section'>
                            <h2>Connect with us:</h2>
                            <ul className='flex_row'>
                                <li>
                                    <a href="javascript:;" title="Follow us on LinkedIn"></a>
                                </li>
                                <li>
                                    <a href="javascript:;" title="Follow us on Twitter"></a>
                                </li>
                                <li>
                                    <a href="javascript:;" title="Follow us on Facebook"></a>
                                </li>
                                <li>
                                    <a href="javascript:;" title="Follow us on Instagram"></a>
                                </li>
                                <li>
                                    <a href="javascript:;" title="Follow us on YouTube"></a>
                                </li>
                            </ul>
                            <p><b>ManageEngine</b>  is a division of <b>Zoho Corp.</b></p>
                        </div>
                    </div>

                </div>
                {/* <div className="main_footer flex_row">

                    <div className="footer_column promo_banner_section">
                        <a href="javascript:;" title="Transform your financial services and banking operations">
                            <img src={PromoBanner1} alt="Transform your financial services and banking operations" />
                        </a>
                        <a href="javascript:;" title="Comply with the ISO/IEC 20000 standard">
                            <img src={PromoBanner2} alt="Comply with the ISO/IEC 20000 standard" />
                        </a>
                    </div>
                    
                    {footerMenuLinks.map( footerMenuLinks => <FooterMenu menuLink={footerMenuLinks} />)}

                </div> */}
            </div>


            <div className='footer_bottom'>
                <div className='default_container'>
                    <div className='footer_bottom_inner'>
                        <ul className='flex_row'>
                            <li>
                                <a href="javascript:;" title='About us'>About us</a>
                            </li>
                            <li>
                                <a href="javascript:;" title='EULA'>EULA</a>
                            </li>
                            <li>
                                <a href="javascript:;" title='Terms of Service'>Terms of Service</a>
                            </li>
                            <li>
                                <a href="javascript:;" title='Security'>Security</a>
                            </li>
                            <li>
                                <a href="javascript:;" title='Compliance'>Compliance</a>
                            </li>
                            <li>
                                <a href="javascript:;" title='Privacy policy'>Privacy policy</a>
                            </li>
                            <li>
                                <a href="javascript:;" title='Cookie policy'>Cookie policy</a>
                            </li>
                            <li>
                                <a href="javascript:;" title='Affiliate program'>Affiliate program</a>
                            </li>
                            <li>
                                <a href="javascript:;" title='Newsletter'>Newsletter</a>
                            </li>
                            <li>
                                <a href="javascript:;" title='Contact sales'>Contact sales</a>
                            </li>
                            <li>
                                <a href="javascript:;" title='Our offices'>Our offices</a>
                            </li>
                            {/* <li>
                                <a href="javascript:;" title=''></a>
                            </li> */}
                        </ul>

                        <p>© 2024 <a href="https://www.zohocorp.com/?pos=MEhome&loc=mefooter" target='_blank' title='Zoho Corp'>Zoho Corporation Pvt. Ltd.</a> All rights reserved.</p>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer