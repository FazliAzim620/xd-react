import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { TfiGame } from "react-icons/tfi";
import { FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container" style={{ position: "sticky", top: "0" }}>
        <div className="row">
          <div className="col-11">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img
                    src="./assets/logo.png"
                    style={{ width: "70px", height: "30px" }}
                    alt=""
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                      >
                        Feature
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Staking
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        FAQs
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/change"
                        style={{
                          borderRadius: "5px",
                          color: "white",
                          padding: "5px 10px",
                          textDecoration: "none",
                          backgroundColor: "#1092B2",
                        }}
                      >
                        ChangeRandomImg
                      </Link>
                    </li>
                  </ul>
                  <ul className="navbar-nav navRight  mb-2 mb-lg-0">
                    <li
                      className="nav-item"
                      style={{
                        marginLeft: "19px !important",
                        padding: "5px 10px",
                      }}
                    >
                      <a href="#" style={{ color: "gray", fontSize: "25px" }}>
                        {<TfiGame />}
                      </a>
                    </li>
                    <li
                      className="nav-item "
                      style={{
                        marginLeft: "2px !important",
                        padding: "5px 10px",
                      }}
                    >
                      <a href="#" style={{ color: "gray", fontSize: "25px" }}>
                        <FiTwitter />
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      style={{
                        marginLeft: "2px !important",
                        padding: "5px 10px",
                      }}
                    >
                      <a href="#" style={{ color: "gray", fontSize: "25px" }}>
                        <SlSocialLinkedin />
                      </a>
                    </li>
                    <li
                      className="btn "
                      style={{
                        margin: "2% 5% !important",
                      }}
                    >
                      <button
                        className="btn "
                        style={{
                          backgroundColor: "#1092B2",
                          color: "white",
                          width: "200px",
                          marginLeft: "5px",
                        }}
                      >
                        Dashboard
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
