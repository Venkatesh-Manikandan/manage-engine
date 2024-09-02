import DropdownNav from "./DropdownNav"

function DropdownMenu(props) {
    const {menuLink} = props

    // Dropdown menu array delaring
    const accessManagement = [
        {
            menuLink1: <>{'Active Directory'} <br /> {'management'}</>,
            linkText1: 'Manage, track, and secure Active Directory.',
            menuLink2: 'Identity governance and administration',
            linkText2: 'Orchestrate user identity management and access controls for Zero Trust.',
            menuLink3: <>{'Privileged access'} <br /> {'management'}</>,
            linkText3: 'Control and secure privileged access to critical enterprise systems.',
        },
        {
            menuLink1: 'ADManager Plus',
            linkText1: 'Active Directory, Microsoft 365, and Exchange management and reporting',
            menuLink2: 'AD360',
            linkText2: 'Workforce identity and access management for hybrid ecosystems',
            menuLink3: 'PAM360',
            linkText3: 'Complete privileged access security for enterprises',
        },
        {
            menuLink1: 'ADAudit Plus',
            linkText1: 'Real-time Active Directory, file, and Windows server change auditing',
            menuLink2: 'Identity360',
            linkText2: 'A cloud-native identity platform for workforce IAM',
            menuLink3: 'Password Manager Pro',
            linkText3: 'Privileged password management',
        },
        {
            menuLink1: 'ADSelfService Plus',
            linkText1: 'Identity security with adaptive MFA, SSPR, and SSO',
            menuLink2: 'M365 Manager Plus',
            linkText2: 'Microsoft 365 management, reporting, and auditing',
            menuLink3: 'Access Manager Plus',
            linkText3: 'Secure remote access and privileged session management',
        },
        {
            menuLink1: 'Exchange Reporter Plus',
            linkText1: 'Reporting, auditing, and monitoring for hybrid Exchange and Skype',
            menuLink3: 'Key Manager Plus',
            linkText3: 'SSH key and SSL/TLS certificate management',
        },
        {
            menuLink1: 'RecoveryManager Plus',
            linkText1: 'Active Directory, Microsoft 365, and Exchange backup and recovery',
        }
    ]
    
    return(

        <div className="submenu_wrapper">
            <div className="sub_menu">

                <div className="submenu_left">
                    <ul className="dropdown_menu flex_col">
                        {menuLink.map(props => <li key={props}> <a href="javascript:;" title={props}>{props}</a><span></span></li>)}
                    </ul>
                </div>

                
                <DropdownNav identityAccess={accessManagement} />
                
            
            </div>
        </div>
    )
}

export default DropdownMenu