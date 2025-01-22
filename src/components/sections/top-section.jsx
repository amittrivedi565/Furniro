import React from "react";
import topSectionBg from "../../assets/images/section_background.png";

const TopSection = () => {
  return (
    <div
      className="container-fluid"
      style={{
        height: "300px",
        padding: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blurred Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${topSectionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
          zIndex: 1,
        }}
      ></div>

      {/* Semi-transparent Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 2,
        }}
      ></div>

      {/* Text Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3, // Ensures the text is on top
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: 0 }}>
          Shop
        </h1>
        <p style={{ fontSize: "1rem", margin: 0}}>
          <b>Home</b> &gt; Shop
        </p>
      </div>
    </div>
  );
};

export default TopSection;
