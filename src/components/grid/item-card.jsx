const ItemCard = ({product}) => {
    const {name, category, price, discounted_price, image} = product;
    return (
        <div className="item-card d-flex flex-column mt-5" style={{width:"285px",height:"420px", backgroundColor:"whitesmoke"}}>
            <div className="item-image"><img style={{width:"100%",height:"300px", objectFit: 'cover'}} src={`/${image.replace('./', '')}`} alt={name} /></div>
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