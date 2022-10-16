import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container footerContainer">
      <div className="row upperfooter">
        <div className="col-12 col-md-6 col-lg-6">
          <h3>Got something for us? Get in touch . . .</h3>
          <p>
            Our products will transform your business. Feel free to use the
            form, or contact us directly via hello@qubevc.com
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-6 ">
          <form action="" className="footerForm">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea name="" placeholder="Message" id=""></textarea>
            <input type="submit" name="Send" id="" />
          </form>
        </div>
      </div>
      <div className="row footerbottom">
        <div className="col-6 col-lg-3 col-md-3 footerLogo ">
          <img src="./assets/logo.png" alt="" />
          <p>
            Professional investors, blockchain strategists and social-media
            influencers, investing in a decentralized future.
          </p>
          <span>Website designed by © 2020—2021, QuellxCode</span>
        </div>
        <div className="col-6 col-lg-2 col-md-2 footernavigate">
          <h5>Navigation</h5>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Staking</li>
            <li>Portfolio</li>
            <li>FAQs</li>
            <li>
              <Link
                to="/change"
                style={{
                  color: "white",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  textDecoration: "none",
                  backgroundColor: "#1092B2",
                }}
              >
                ChangeRandomImg
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-3 col-md-3 footerContact">
          <h5>Contacts</h5>
          <h6>One Ferry Building, Suite 255</h6>
          <h6>San Francisco, CA 94111</h6>
          <h6>+1 (415) 077-5000</h6>
        </div>
        <div className="col-6 col-lg-4 col-md-4 footerSubs ">
          <h5>Subscribe to our newsletter</h5>
          <input type="text" name="" id="" placeholder="hi@gmail.com" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
