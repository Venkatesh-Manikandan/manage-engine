function DropdownNav(props) {
    const {identityAccess} = props

    console.log(identityAccess);
    
    
    return(
        <div className="submenu_right flex_row">
            <ul className="flex_col">
                {identityAccess.map(props => <li><a href="javascript:;" title={props.menuLink1}><span>{props.menuLink1}</span><p>{props.linkText1}</p></a></li>)}
            </ul>
            <ul className="flex_col">
                {identityAccess.map(props => <li><a href="javascript:;" title={props.menuLink2}><span>{props.menuLink2}</span><p>{props.linkText2}</p></a></li>)}
            </ul>
            <ul className="flex_col">
                {identityAccess.map(props => <li><a href="javascript:;" title={props.menuLink3}><span>{props.menuLink3}</span><p>{props.linkText3}</p></a></li>)}
            </ul>
        </div>
    )
}

export default DropdownNav