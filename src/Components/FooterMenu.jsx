function FooterMenu(props) {

    const {menuLink} =props
    
    const footerMenuLink = [];
    for(const link of menuLink.link) {
        footerMenuLink.push(<li><a href="javascript:;">{link}</a></li>)
    }

    // const footerSocialLink = [];
    // for(const socialLink of menuLink.socialLink){
    //     footerSocialLink.push(<li><a href={socialLink} title="Follow us on LinkedIn"></a></li>)
    // }
    
    const socialLinks = [
        {
            mediaLink: "https://www.linkedin.com/company/manageengine",
            title: "Follow us on LinkedIn",
        },
        {
            mediaLink: "https://x.com/manageengine",
            title: "Follow us on Twitter",
        },
        {
            mediaLink: "https://www.facebook.com/ManageEngine/",
            title: "Follow us on Facebook",
        },
        {
            mediaLink: "https://www.instagram.com/manageengine/",
            title: "Follow us on Instagram",
        },
        {
            mediaLink: "https://www.youtube.com/user/manageengine",
            title: "Follow us on YouTube",
        },
    ]

    return(
        <div className="footer_column">
            <h2>{menuLink.heading}</h2>
            <ul>
                {footerMenuLink}
            </ul>
            {menuLink.socialLink != '' ? 
                <div className='social_section'>
                    <h2>Connect with us:</h2>
                    <ul className='flex_row'>
                        {/* {footerSocialLink} */}
                        {socialLinks.map( socialLink => <li><a href={socialLink.mediaLink} title={socialLink.title} target="_blank"></a></li>)}
                    </ul>
                    <p><b>ManageEngine</b>  is a division of <b>Zoho Corp.</b></p>
                </div>
            : ''}

        </div>
    )
}

export default FooterMenu