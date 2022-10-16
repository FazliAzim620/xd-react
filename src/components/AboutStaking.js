import "bootstrap/dist/css/bootstrap.min.css";
import { FaHandshake } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { TfiSettings } from "react-icons/tfi";
const AboutStaking = () => {
  return (
    <>
      <div className="container-fluid aboutStack">
        <div className="container aboutStakinner">
          <div className="row aboutsection">
            <div className="col-12 col-md-12 col-lg-12">
              <h1
                style={{
                  color: "#1092B2",
                  opacity: "1!important",
                  fontWeight: "700",
                  //   margin: "0 auto",
                  textAlign: "center",
                }}
              >
                What is Staking?
              </h1>
              <p
                style={{
                  color: "black",
                  fontWeight: "400",
                  width: "50%",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                Proof of Stake blockchains use staking as the security mechanism
                to keep nodes honest. You can help protect networks, while
                holding your crypto in your wallet, delegating them to a trusted
                validator. In return, you get rewards.
              </p>
            </div>
            <div className="col-12 col-md-12 col-lg-12">
              <div class="accordion" id="aboutAcc">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#aboutToggle"
                      aria-expanded="true"
                      aria-controls="aboutToggle"
                    >
                      What is proof of stake in blockchain?
                    </button>
                  </h2>
                  <div
                    id="aboutToggle"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div class="accordion-body">
                      <p>What is proof of stake in blockchain?</p>
                    </div>
                  </div>
                </div>
                {/* /////////////////// */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="abouttwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      <p>What does qube.vc staking investment platform do?</p>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="abouttwo"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                    </div>
                  </div>
                </div>
                {/* /////////////////// */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="aboutthree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      <p>What are minimum and maximum deposit?</p>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="aboutthree"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                    </div>
                  </div>
                </div>
                {/* ///////////// */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="aboutfive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapsefive"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapsefive"
                    >
                      <p>How much does it cost to stake with qube.vc?</p>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapsefive"
                    class="accordion-collapse collapse"
                    aria-labelledby="aboutfive"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                    </div>
                  </div>
                </div>
                {/* ////////////////// */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="about6">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapse6"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapse6"
                    >
                      <p>How much does it cost to stake with qube.vc?</p>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapse6"
                    class="accordion-collapse collapse"
                    aria-labelledby="about6"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                    </div>
                  </div>
                </div>

                {/* /// */}
                <button className="btn btnviewmore">view more</button>
              </div>
            </div>
          </div>
          {/* /////// */}
        </div>
      </div>
    </>
  );
};

export default AboutStaking;
