import '../Assets/Styles/Banner.css'
import BgImage1 from '../Assets/Images/BannerAssets/banner-bg1.png'
import BgImage2 from '../Assets/Images/BannerAssets/banner-bg2.png'
import BgImage3 from '../Assets/Images/BannerAssets/banner-bg3.png'
import BannerImage from '../Assets/Images/BannerAssets/banner-img.svg'
import PrimaryBtn from '../Components/PrimaryBtn'
import SecondaryBtn from './SecondaryBtn'

function Banner() {

    const btnText1 = ['GET STARTED']
    const btnText2 = ['KNOW MORE']
    
    return(
        <div className='banner_wrapper'>
            <div className='default_container'>
                <div className='banner_section flex_row'>
                    <div className='banner_content flex_col'>
                        <h1>Take control of your IT.</h1>
                        <p>Monitor, manage, and secure your IT infrastructure with <br /> enterprise-grade solutions built from the ground up.</p>
                        <div className='flex_row flex_btn'>
                            {/* <a href='javascript:;' className='cmn_btn banner_btn1' title={btnText1}>{btnText1}</a>
                            <a href='javascript:;' className='cmn_btn banner_btn2' title={btnText2}>{btnText2}</a> */}
                            {/* {buttonText.map(text => <a href='javascript:;' className='cmn_btn' title={text} key={text}>{text}</a>)} */}
                            <PrimaryBtn btnText = {btnText1} />
                            <SecondaryBtn btnText = {btnText2} />
                        </div>
                    </div>
                    <div className='banner_image'>
                        <img src={BannerImage} alt='Banner Image'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner