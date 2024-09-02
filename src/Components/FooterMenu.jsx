function FooterMenu(props) {

    const {menuLink} =props

    console.log(menuLink);
    
    
    return(
        <div className="footer_column">
            <h2>{menuLink.heading}</h2>
            <ul>
                {/* {menuLink.link.map( (menuLinks) => (<li><a href="javascript:;" title={menuLinks.footerLink}>{menuLinks.footerLink}</a></li>))} */}
            </ul>
        </div>
    )
}

export default FooterMenu