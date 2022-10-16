import "bootstrap/dist/css/bootstrap.min.css";
import { FaHandshake } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { TfiSettings } from "react-icons/tfi";
const Stake = () => {
  return (
    <>
      <div className="container-fluid stakesection">
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
                Stake with us
              </h1>
              <p
                style={{
                  color: "black",
                  fontWeight: "400",
                  width: "60%",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                Earn passive income in crypto by delegating your idle tokens. We
                contribute to secure the following blockchains.
              </p>
            </div>
          </div>
          {/* /////// */}
          <div className="row stake mt-5">
            <div className="col-12 col-md-3">
              <div className="stakeCards">
                <div className="innerStake">
                  <div className="image">
                    <img src="./assets/p1.png" alt="" />
                  </div>
                  <div className="stateTitle">
                    <p>Fantom (FTM) </p>
                    <h2>15.00% </h2>
                  </div>
                </div>
                <div className="buttonS">
                  <button className="btn">Stake</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="stakeCards">
                <div className="innerStake">
                  <div className="image">
                    <img src="./assets/p.png" alt="" />
                  </div>
                  <div className="stateTitle">
                    <p>Polkadot (DOT) </p>
                    <h2>15.00% </h2>
                  </div>
                </div>
                <div className="buttonS">
                  <button className="btn">Stake</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="stakeCards">
                <div className="innerStake">
                  <div className="image">
                    <img src="./assets/p2.png" alt="" />
                  </div>
                  <div className="stateTitle">
                    <p>Terra (LUNA) </p>
                    <h2>15.00% </h2>
                  </div>
                </div>
                <div className="buttonS">
                  <button className="btn">Stake</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="stakeCards">
                <div className="innerStake">
                  <div className="image">
                    <img src="./assets/p3.png" alt="" />
                  </div>
                  <div className="stateTitle">
                    <p>Cosmos (ATOM) </p>
                    <h2>15.00% </h2>
                  </div>
                </div>
                <div className="buttonS">
                  <button className="btn">Stake</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="stakeCards">
                <div className="innerStake">
                  <div className="image">
                    <img src="./assets/p4.png" alt="" />
                  </div>
                  <div className="stateTitle">
                    <p>Kusama (KSM) </p>
                    <h2>15.00% </h2>
                  </div>
                </div>
                <div className="buttonS">
                  <button className="btn">Stake</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="stakeCards">
                <div className="innerStake">
                  <div className="image">
                    <img src="./assets/p5.png" alt="" />
                  </div>
                  <div className="stateTitle">
                    <p>Crypto (CRO) </p>
                    <h2>15.00% </h2>
                  </div>
                </div>
                <div className="buttonS">
                  <button className="btn">Stake</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="stakeCards">
                <div className="innerStake">
                  <div className="image">
                    <img src="./assets/p7.png" alt="" />
                  </div>
                  <div className="stateTitle">
                    <p>xDai (STAKE) </p>
                    <h2>15.00% </h2>
                  </div>
                </div>
                <div className="buttonS">
                  <button className="btn">Stake</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="stakeCards">
                <div className="innerStake">
                  <div className="image">
                    <img src="./assets/p8.png" alt="" />
                  </div>
                  <div className="stateTitle">
                    <p>Avalanche (AVAX) </p>
                    <h2>15.00% </h2>
                  </div>
                </div>
                <div className="buttonS">
                  <button className="btn">Stake</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stake;
