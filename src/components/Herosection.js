import "bootstrap/dist/css/bootstrap.min.css";
const Herosection = () => {
  return (
    <>
      <div className="container">
        <div className="row herosection mt-sm-3">
          <div className="col-12 col-md-6 col-lg-6 heroHeading">
            <h1>
              <span style={{ color: "#1092B2" }}>Qube </span> partners with
              high-potential blockchain projects.
            </h1>
            <p>
              Professional investors, blockchain strategists and social-media
              influencers, investing in a decentralized future.
            </p>
            <button
              className="btn "
              style={{
                backgroundColor: "#1092B2",
                color: "white",
                width: "150px",
                marginLeft: "5px",
              }}
            >
              Learn More
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-6 hearoImage">
            <figure>
              <img src="./assets/ll.png" alt="hero imge" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
