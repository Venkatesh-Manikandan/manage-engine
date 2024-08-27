function DropdownNav(props) {
    const {identityAccess} = props
    
    return(
        <div className="flex_row">
            <ul className="flex_col">
                {identityAccess.map(props => <li><a href="javascript:;" title={props.menuLink1}><span>{props.menuLink1}</span><p>{props.linkText1}</p></a></li>)}
            </ul>
        </div>
    )
}

export default DropdownNav