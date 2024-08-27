import DropdownNav from "./DropdownNav"

function DropdownMenu(props) {
    const {menuLink} = props

    // Dropdown menu array delaring
    const accessManagement = [
        {
            menuLink1: 'Active Directory management',
            linkText1: 'Manage, track, and secure Active Directory.',
        },
        {
            menuLink1: 'ADManager Plus',
            linkText1: 'Active Directory, Microsoft 365, and Exchange management and reporting',
        },
        {
            menuLink1: 'ADAudit Plus',
            linkText1: 'Real-time Active Directory, file, and Windows server change auditing',
        },
        {
            menuLink1: 'ADSelfService Plus',
            linkText1: 'Identity security with adaptive MFA, SSPR, and SSO',
        },
        {
            menuLink1: 'Exchange Reporter Plus',
            linkText1: 'Reporting, auditing, and monitoring for hybrid Exchange and Skype',
        },
        {
            menuLink1: 'RecoveryManager Plus',
            linkText1: 'Active Directory, Microsoft 365, and Exchange backup and recovery',
        }
    ]
    
    return(
        <div className="sub_menu">

            <div className="submenu_left">
                <ul className="dropdown_menu flex_col">
                    {menuLink.map(props => <li> <a href="javascript:;" title={props}>{props}</a><span></span></li>)}
                </ul>
            </div>

            <div className="submenu_right">
                {/* <DropdownNav identityAccess={accessManagement} /> */}
                {/* <DropdownNav identityAccess={accessManagement} /> */}
            </div>
        
        </div>
    )
}

export default DropdownMenu