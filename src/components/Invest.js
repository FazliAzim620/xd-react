import "bootstrap/dist/css/bootstrap.min.css";
import { FaHandshake } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { TfiSettings } from "react-icons/tfi";
const Invest = () => {
  return (
    <>
      <div className="container-fluid investsection">
        <div className="container workInnnerSection">
          <div className="row workInner">
            <div className="col-12">
              <h1
                style={{
                  color: "#1092B2",
                  opacity: "1!important",
                  fontWeight: "700",
                  //   margin: "0 auto",
                  textAlign: "center",
                }}
              >
                Invest with us
              </h1>
              <p style={{ color: "black", fontWeight: "400" }}>
                These are some of the brands that trust us.
              </p>
            </div>
          </div>
          {/* /////// */}
          <div className="row cards mt-5">
            <div className="col-12 col-md-4">
              <div className="card investCard">
                <div className="card-body">
                  <div className="card-title text-center">
                    <img src="./assets/bo.png" alt="" />
                  </div>
                  <div className="card-title ">
                    <h5 style={{ color: "#1092B2", textAlign: "center" }}>
                      Bounty Ox
                    </h5>
                  </div>
                  <div className="card-textInvest">
                    <p>
                      Qube partners with promising blockchain projects,
                      assisting them towards successful ICOs, through funding,
                      advisory services and community awareness generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card investCard">
                <div className="card-body">
                  <div className="card-title text-center">
                    <img src="./assets/fr.png" alt="" />
                  </div>
                  <div className="card-title ">
                    <h5 style={{ color: "#1092B2", textAlign: "center" }}>
                      Wabi
                    </h5>
                  </div>
                  <div className="card-textInvest">
                    <p>
                      Qube partners with promising blockchain projects,
                      assisting them towards successful ICOs, through funding,
                      advisory services and community awareness generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card investCard">
                <div className="card-body">
                  <div className="card-title text-center">
                    <img src="./assets/el.png" alt="" />
                  </div>
                  <div className="card-title ">
                    <h5 style={{ color: "#1092B2", textAlign: "center" }}>
                      Electrify Asia
                    </h5>
                  </div>
                  <div className="card-textInvest">
                    <p>
                      Qube partners with promising blockchain projects,
                      assisting them towards successful ICOs, through funding,
                      advisory services and community awareness generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn viewBtn">view more</button>
        </div>
      </div>
    </>
  );
};

export default Invest;
