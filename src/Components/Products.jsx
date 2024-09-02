import ProductCard from "./ProductCard"
import '../Assets/Styles/Products.css'

function Products() {

    const ProductData = [
        {
            title: 'Identity and access management',
            products: 'Active Directory & M365 management | MFA & SSO | Zero Trust | PAM',
            description:'Manage, govern, and secure digital identities and privileged access.',
            btntext: 'Learn more'
        },
        {
            title: 'Unified service management',
            products: 'Enterprise and IT service delivery | IT asset management | Customers support',
            description:'Design, automate, deliver, and manage IT and business services.',
            btntext: 'Learn more'
        },
        {
            title: 'Unified endpoint management and security',
            products: 'Desktops | Laptops | Servers | Mobile devices | Browsers ',
            description:'Manage and secure desktops, servers, laptops, mobile devices, and web browsers.',
            btntext: 'Learn more'
        },
        {
            title: 'IT operations management',
            products: 'Observability | AIOps | DEM | Applications | Infrastructure | Network',
            description:'Monitor and manage your network, servers, and applications.',
            btntext: 'Learn more'
        },
        {
            title: 'Security information and event management',
            products: 'Log management | Security auditing | Threat detection and response | UEBA',
            description: 'Secure your network from cyberattacks and ensure compliance.',
            btntext: 'Learn more'
        },
        {
            title: 'Advanced IT analytics',
            products: 'Unified IT analytics | AI-powered insights | IT data correlation | Capacity planning',
            description: 'Visualize IT data and gain actionable insights into IT operations.',
            btntext: 'Learn more'
        },
        {
            title: 'Low-code app development',
            products: 'Business process management | Workflow automation | Custom apps',
            description: 'Build powerful custom applications rapidly and launch them on-premises.',
            btntext: 'Learn more'
        },
        {
            title: 'IT management for MSPs',
            products: 'RMM | UEM | ITSM | ITOM | IAM | SIEM',
            description: 'Grow your MSP business with scalable and secure IT management solutions.',
            btntext: 'Learn more'
        },
        {
            title: 'Cloud solutions for enterprise IT',
            products: 'Cloud-ready | Cloud-native',
            description: 'Scale your IT to support multi-cloud and hybrid infrastructures.',
            btntext: 'Learn more'
        },
    ]

    return(
        <div className="products_wrapper">
            <div className="default_container">
                <div className="products_section">
                    <p>Whether it's securing your business, ensuring high availability, or keeping your customers and employees happy,
                    our AI-enhanced IT management solutions can help you solve these challenges and more.</p>
                
                    <div className="product_cards flex_row">
                        {ProductData.map( cardcontent => <ProductCard  key={cardcontent.title} content={cardcontent} />)}
                        {/* <ProductCard /> */}
                    </div>

                    <div className="products_btn">
                        <a href="javascript:;" title="EXPLORE OUR PRODUCTS" className="cmn_btn">EXPLORE OUR PRODUCTS</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products