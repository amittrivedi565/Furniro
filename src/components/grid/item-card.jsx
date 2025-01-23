import React, { useState } from "react";

const ItemCard = ({ product }) => {
    const { name, category, price, discounted_price, image, discount } = product;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="item-card d-flex flex-column mt-5" 
            style={{
                width: "285px",
                height: "420px",
                backgroundColor: isHovered ? "gray" : "whitesmoke",
                overflow: "hidden",
                position: "relative",
                borderRadius: "8px",
                transition: "background-color 0.3s ease"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div 
                className="item-image" 
                style={{ 
                    position: "relative", 
                    width: "100%", 
                    height: "300px", 
                    overflow: "hidden" 
                }}
            >
                <img 
                    style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                        transition: "filter 0.3s ease",
                        filter: isHovered ? "grayscale(100%)" : "none"
                    }} 
                    src={`/${image.replace('./', '')}`} 
                    alt={name} 
                />
                {/* Tags */}
                {!isHovered && discount === null && (
                    <div 
                        style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#2EC1AC",
                            borderRadius: "50%",
                            color: "white",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            fontWeight: "bold",
                            fontSize: "14px",
                            zIndex: 2
                        }}
                    >
                        New
                    </div>
                )}
                {!isHovered && discount && (
                    <div 
                        style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#E97171",
                            borderRadius: "50%",
                            color: "white",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: discount === null ? "70px" : "10px",
                            right: "10px",
                            fontWeight: "bold",
                            fontSize: "14px",
                            zIndex: 2
                        }}
                    >
                        -{discount}
                    </div>
                )}
                {/* Optional Gray Overlay */}
                {isHovered && (
                    <div 
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            zIndex: 1,
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                        }}
                    />
                )}
            </div>
            <div className="container mt-2">
                <div className="item-title">
                    <span style={{ fontSize: "24px", fontWeight: "600" }}>{name}</span>
                </div>
                <div className="item-category" style={{ color: "gray" }}>{category}</div>
                <div className="item-price">
                    <b>
                        <span style={{ fontSize: "20px" }}>
                            {discounted_price != null ? discounted_price : price}
                        </span>
                    </b>
                    &nbsp;
                    {discounted_price != null && (
                        <s style={{ color: "gray", fontSize: "16px" }}>{price}</s>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
