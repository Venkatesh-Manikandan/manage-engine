import PrimaryBtn from "./PrimaryBtn"

function SlickSlide(props) {

    const {content} = props

    return(
        <div className="slide_sec slide_bg1">
            <div className="slide_inner">
                <h2>{content.slideTitle}</h2>
                <p>{content.slideText}</p>
                {/* <a href="javascript:;" title={content.slideButton} className="cmn_btn">{content.slideButton}</a> */}
                <PrimaryBtn btnText = {content.slideButton} />
                {/* <p className="para_text">{content.slideAddlText}</p> */}
                {content.slideAddlText != '' ? <p className="para_text">{content.slideAddlText}</p> : ''}
            </div>
        </div>
    )
}

export default SlickSlide