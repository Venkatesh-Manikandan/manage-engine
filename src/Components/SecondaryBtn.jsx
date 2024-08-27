function SecondaryBtn(props) {
    const {btnText} = props
    return(
        <a href="javascript:;" title={btnText} className="cmn_btn">{btnText}</a>
    )
}

export default SecondaryBtn