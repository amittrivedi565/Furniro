const ItemCard = ({product}) => {
    const {name, category, price, discounted_price, image} = product;
    return (
        <div className="item-card d-flex flex-column mt-5" style={{width:"285px",height:"420px", backgroundColor:"whitesmoke",overflow: "hidden",position: "relative"}}>
            <div className="item-image"><img style={{width:"100%",height:"300px", objectFit: 'cover'}} src={`/${image.replace('./', '')}`} alt={name} />
                {
                    discounted_price == null && (
                        <div style={{width :"50px", height : "50px",backgroundColor :"#2EC1AC",borderRadius :"50%",textAlign : "center",justifyContent:"center",display : "flex",alignItems:"center", position: "absolute",top:"24px",left:"213px"}}>New</div>
                    )
                }

                {
                    discounted_price != null && (
                        <div style={{width :"50px", height : "50px",backgroundColor :"#E97171",borderRadius :"50%",textAlign : "center",justifyContent:"center",display : "flex",alignItems:"center", position: "absolute",top:"24px",left:"213px"}}>50%</div>
                    )
                }
            </div>
            <div className="container mt-2">
                <div className="item-title"><b style={{fontSize:"24px"}}>{name}</b></div>
                <div className="item-category" style={{color:"gray"}}>{category}</div>
                <div className="item-price">
                    <span style={{fontSize:"20px"}}>Rp{price}</span>
                    &nbsp;
                    {discounted_price !== null && (
                        <s style={{color:"gray",fontSize:"16px"}}>Rp{discounted_price}</s>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemCard;