import React from "react";
import SimpleSlider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Assets/Styles/Slider.css"

function Slider() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <div className="slider_wrapper">
           <div className="full_width_container">

                <SimpleSlider {...settings}>
                    <div className="slide_sec slide_bg1">
                        <div className="slide_inner">
                            <h2>94% of CEOs say improvements to employee experience directly impact their net profit.*</h2>
                            <p>Build the right employee experience strategy for your organization.</p>
                            <a href="javascript:;" title="START HERE" className="cmn_btn">START HERE</a>
                            <p className="para_text">*Global Employee Experience Trends Report by NTT Data</p>
                        </div>
                    </div>
                    <div className="slide_sec slide_bg2">
                        <div className="slide_inner">
                            <h2>For the 7th time!</h2>
                            <p>ManageEngine recognized in <br></br> <b>2024 Gartner® Magic Quadrant™</b> for Security <br></br> Information and Event Management</p>
                            <a href="javascript:;" title="READ THE REPORT" className="cmn_btn">READ THE REPORT</a>
                        </div>
                    </div>
                </SimpleSlider>

            </div>
        </div>
    )
}

export default Slider