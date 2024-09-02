function ProductCard(props) {
    const {content} = props
    // console.log(props)
    return(
        <>
            <a href="javascript:;" className="product_card flex_col" title={content.title}>
                <div className="product_icon"></div>
                <h2>{content.title}</h2>
                <h3>{content.products}</h3>
                <div className="hover_div">
                    <p>{content.description}</p>
                    <span>{content.btntext}</span>
                </div>
            </a>
        </>
    )
}

export default ProductCard