import { ReactComponent as TrophyIcon } from "../../assets/svgs/footer/trophy.svg";
import { ReactComponent as CheckIcon } from "../../assets/svgs/footer/check.svg";
import { ReactComponent as ShippingIcon } from "../../assets/svgs/footer/free-shipping.svg";
import { ReactComponent as SupportIcon } from "../../assets/svgs/footer/support.svg";

export default function FeatureFooter() {
  return (
    <div
      className="container-fluid mt-5 footer-class d-flex justify-content-center align-items-center flex-md-column"
      style={{ height: "250px", backgroundColor: "#FAF3EA" }}
    >
      <div className="row d-flex justify-content-center align-items-center w-100">
        <div className="col-3 d-flex flex-column justify-content-center align-items-center text-center">
          <TrophyIcon />
          <span className="mt-2">
            <b style={{ fontSize: "25px", fontWeight: "600" }}>High Quality</b>
            <br />
            <span style={{ fontSize: "20px", fontWeight: "500", color: "gray" }}>
              crafted from top materials
            </span>
          </span>
        </div>
        <div className="col-3 d-flex flex-column justify-content-center align-items-center text-center">
          <CheckIcon />
          <span className="mt-2">
            <b style={{ fontSize: "25px", fontWeight: "600" }}>Warranty Protection</b>
            <br />
            <span style={{ fontSize: "20px", fontWeight: "500", color: "gray" }}>
              Over 2 years
            </span>
          </span>
        </div>
        <div className="col-3 d-flex flex-column justify-content-center align-items-center text-center">
          <ShippingIcon />
          <span className="mt-2">
            <b style={{ fontSize: "25px", fontWeight: "600" }}>Free Shipping</b>
            <br />
            <span style={{ fontSize: "20px", fontWeight: "500", color: "gray" }}>
              Order over $150
            </span>
          </span>
        </div>
        <div className="col-3 d-flex flex-column justify-content-center align-items-center text-center">
          <SupportIcon />
          <span className="mt-2">
            <b style={{ fontSize: "25px", fontWeight: "600" }}>24 / 7 Support</b>
            <br />
            <span style={{ fontSize: "20px", fontWeight: "500", color: "gray" }}>
              Dedicated support
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
