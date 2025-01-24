import { ReactComponent as TrophyIcon } from "../../assets/svgs/footer/trophy.svg";
import { ReactComponent as CheckIcon } from "../../assets/svgs/footer/check.svg";
import { ReactComponent as ShippingIcon } from "../../assets/svgs/footer/free-shipping.svg";
import { ReactComponent as SupportIcon } from "../../assets/svgs/footer/support.svg";

export default function FeatureFooter() {
  return (
    <div
      className="container-fluid mt-5 footer-class d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#FAF3EA", padding: "20px 0",minHeight:"250px" }}
    >
      <div className="row w-100 text-center">
        <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
          <TrophyIcon />
          <span className="mt-2">
            <b style={{ fontSize: "20px", fontWeight: "600" }}>High Quality</b>
            <br />
            <span style={{ fontSize: "16px", color: "gray" }}>
              Crafted from top materials
            </span>
          </span>
        </div>
        <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
          <CheckIcon />
          <span className="mt-2">
            <b style={{ fontSize: "20px", fontWeight: "600" }}>Warranty Protection</b>
            <br />
            <span style={{ fontSize: "16px", color: "gray" }}>
              Over 2 years
            </span>
          </span>
        </div>
        <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
          <ShippingIcon />
          <span className="mt-2">
            <b style={{ fontSize: "20px", fontWeight: "600" }}>Free Shipping</b>
            <br />
            <span style={{ fontSize: "16px", color: "gray" }}>
              Order over $150
            </span>
          </span>
        </div>
        <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center">
          <SupportIcon />
          <span className="mt-2">
            <b style={{ fontSize: "20px", fontWeight: "600" }}>24 / 7 Support</b>
            <br />
            <span style={{ fontSize: "16px", color: "gray" }}>
              Dedicated support
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
