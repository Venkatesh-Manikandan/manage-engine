import '../Assets/Styles/Events.css'
// import PressRelease from '../Assets/Images/Events/press-release.svg'
// import PressNews from '../Assets/Images/Events/press-news-icon.svg'

function Events() {
    return(
        <div className='events_wrapper'>
            <div className='default_container'>
                <div className='events_section'>

                    <div className='events_inner flex_row'>
                        <div className='event_card'>
                            <div className='card_left'>
                                <img src='https://cdn.manageengine.com/images/press-release-icon.svg' alt='Press Releases'></img>
                            </div>
                            <div className='card_right'>
                                <h2>Press releases</h2>
                                <p>ManageEngine Strengthens Its Identity-First Security Offerings With Passwordless, Phishing-Resistant Authentication</p>
                                <p>June 4, 2024</p>
                                <a href="javascript:;" title='Read more'>Read more</a>
                            </div>
                        </div>

                        <div className='event_card'>
                            <div className='card_left'>
                                <img src='https://cdn.manageengine.com/images/press-news-icon.svg' alt='News'></img>
                            </div>
                            <div className='card_right'>
                                <h2>News</h2>
                                <p>Data Analytics in ITSM: Driving Insights and Efficiency</p>
                                <p>August 2, 2024</p>
                                <a href="javascript:;" title='Read more'>Read more</a>
                            </div>
                        </div>
                    </div>

                    <a href="javascript:;" title='See all news »' className='event_btn'>See all news »</a>

                </div>
            </div>
        </div>
    )
}

export default Events