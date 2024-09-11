import '../Assets/Styles/Connect.css'

function Connect() {

    const connectDetails = [
        {
            link: "javascript:;",
            linkTitle: "Forums - Manage Engine",
            title: "Forums"
        },
        {
            link: "javascript:;",
            linkTitle: "Blogs - Manage Engine",
            title: "Blogs"
        },
        {
            link: "javascript:;",
            linkTitle: "Marketplace - Manage Engine",
            title: "Marketplace"
        },
        {
            link: "javascript:;",
            linkTitle: "Free tools - Manage Engine",
            title: "Free tools"
        },
    ]

    return(
        <div className="connect_wrapper">
            <div className="default_container">
                <div className="connect_inner">
                    <h2>
                        <a href="javascript:;" title="Connect. Ask. Share.">Connect. Ask. Share.</a>
                    </h2>
                    <p>Because IT is better together, always.</p>

                    <ul className="flex_row">
                        {/* <li>
                            <a href="javascript:;" title="Forums - Manage Engine">
                                <span className="bg_img"></span>
                                <span className="img_title">Forums</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" title="Blogs - Manage Engine">
                                <span className="bg_img"></span>
                                <span className="img_title">Blogs</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" title="Marketplace - Manage Engine">
                                <span className="bg_img"></span>
                                <span className="img_title">Marketplace</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" title="Free tools - Manage Engine">
                                <span className="bg_img"></span>
                                <span className="img_title">Free tools</span>
                            </a>
                        </li> */}

                        {connectDetails.map( connectDetail => 
                            <li>
                                <a href={connectDetail.link} title={connectDetail.linkTitle} target='_blank'>
                                    <span className="bg_img"></span>
                                    <span className="img_title">{connectDetail.title}</span>
                                </a>
                            </li>
                        )}
                        
                    </ul>

                    <p><a href="javascript:;" title='ManageEngine PitStop'>Join</a> the 70K users on ManageEngine PitStop.</p>

                </div>
            </div>
        </div>
    )
}

export default Connect