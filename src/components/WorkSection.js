import "bootstrap/dist/css/bootstrap.min.css";
import { FaHandshake } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { TfiSettings } from "react-icons/tfi";
const WorkSection = () => {
  return (
    <>
      <div className="container-fluid worksection">
        <div className="container workInnnerSection">
          <div className="row workInner" id="work">
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
                Work With us
              </h1>
              <p style={{ color: "black", fontWeight: "400" }}>
                Here are some reasons why you will make the best decision by
                choosing us.
              </p>
            </div>
          </div>
          {/* /////// */}
          <div className="row cards mt-5">
            <div className="col-12 col-md-4">
              <div className="card cardW">
                <div className="card-body">
                  <div className="card-title cardIcon">
                    <div className="innerIcon">
                      <FaHandshake className="cIcon" />
                    </div>
                  </div>
                  <div className="card-title ">
                    <h5 style={{ color: "#1092B2", textAlign: "center" }}>
                      Strategic partnership
                    </h5>
                  </div>
                  <div className="card-text">
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
              <div className="card cardW">
                <div className="card-body">
                  <div className="card-title cardIconM">
                    <div className="innerIconM">
                      <TbMessages className="cIcon" />
                    </div>
                  </div>
                  <div className="card-title ">
                    <h5 style={{ color: "#FE7D1E", textAlign: "center" }}>
                      Strategic partnership
                    </h5>
                  </div>
                  <div className="card-text">
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
              <div className="card cardW">
                <div className="card-body">
                  <div className="card-title cardIcon">
                    <div className="innerIcon">
                      <TfiSettings className="cIcon" />
                    </div>
                  </div>
                  <div className="card-title ">
                    <h5 style={{ color: "#1092B2", textAlign: "center" }}>
                      Strategic partnership
                    </h5>
                  </div>
                  <div className="card-text">
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
        </div>
      </div>
    </>
  );
};

export default WorkSection;
