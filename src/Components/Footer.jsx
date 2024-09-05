import '../Assets/Styles/Footer.css'
import PromoBanner1 from '../Assets/Images/Footer/promo-banner1.jpg'
import PromoBanner2 from '../Assets/Images/Footer/promo-banner2.jpg'
import FooterMenu from './FooterMenu'

function Footer() {

    const bannerDetails = [
        {
            imagePath: PromoBanner1,
            link: 'https://www.manageengine.com/financial-services.html?pos=MEhome&loc=mefooter',
            title: 'Transform your financial services and banking operations'
        },
        {
            imagePath: PromoBanner2,
            link: 'https://www.manageengine.com/iso20000/?pos=MEhome&loc=mefooter',
            title: 'Comply with the ISO/IEC 20000 standard'
        }
    ]

    const footerMenuLinks = [
        {
            heading: 'Resources',
            link: [
                    "Blog",
                    "Insights",
                    "Academy",
                    "Customer stories",
                    "Community",
                    "White papers",
                    "Product documentation",
            ],
            socialLink: [],
        },
        {
            heading: 'Company',
            link: [
                "About us",
                "Customers",
                "Analyst reports",
                "Events",
                "Newsroom",
                "Partner with us",
                "Careers",
                "Sitemap",
            ],
            socialLink: [],
        },
        {
            heading: 'Training and support',
            link: [
                "Contact support",
                "Store",
                "Marketplace",
                "Training and certification",
            ],
            socialLink: [
                {
                    mediaLink: "https://www.linkedin.com/company/manageengine",
                    mediaLink: "https://x.com/manageengine",
                    mediaLink: "https://www.facebook.com/ManageEngine/",
                    mediaLink: "https://www.instagram.com/manageengine/",
                    mediaLink: "https://www.youtube.com/user/manageengine",
                },
            ]
        },
    ]

    const footerBottomDetails = [
        {
            linkText: "About us",
            targetLink: "", 
        },
        {
            linkText: "EULA",
            targetLink: "", 
        },
        {
            linkText: "Terms of Service",
            targetLink: "", 
        },
        {
            linkText: "Security",
            targetLink: "", 
        },
        {
            linkText: "Compliance",
            targetLink: "", 
        },
        {
            linkText: "Privacy policy",
            targetLink: "", 
        },
        {
            linkText: "Cookie policy",
            targetLink: "", 
        },
        {
            linkText: "Affiliate program",
            targetLink: "", 
        },
        {
            linkText: "Newsletter",
            targetLink: "", 
        },
        {
            linkText: "Contact sales",
            targetLink: "", 
        },
        {
            linkText: "Our offices",
            targetLink: "", 
        },
        {
            linkText: "Global",
            targetLink: "", 
        },
    ]

    return(
        <footer>
            <div className="default_container">
                
                <div className="main_footer flex_row">

                    <div className="footer_column promo_banner_section">
                        
                        {bannerDetails.map( bannerDetail => <a href={bannerDetail.link} title={bannerDetail.title} target='_blank'><img src={bannerDetail.imagePath} alt={bannerDetail.title} /></a>)}

                    </div>
                    
                    {footerMenuLinks.map( footerMenuLinks => <FooterMenu menuLink={footerMenuLinks} />)}

                </div>
            </div>


            <div className='footer_bottom'>
                <div className='default_container'>
                    <div className='footer_bottom_inner'>
                        <ul className='flex_row'>
                            {/* <li>
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
                            </li> */}

                            {footerBottomDetails.map( footerBottomDetail => <li><a href='javascript:;' title={footerBottomDetail.linkText}>{footerBottomDetail.linkText}</a></li>)}
                            
                        </ul>

                        <p>© 2024 <a href="https://www.zohocorp.com/?pos=MEhome&loc=mefooter" target='_blank' title='Zoho Corp'>Zoho Corporation Pvt. Ltd.</a> All rights reserved.</p>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer