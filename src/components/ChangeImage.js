import { useEffect, useState } from "react";
import Header from "./Header";
const ChangeImage = () => {
  const [Image, setImage] = useState("https://source.unsplash.com/random");
  const [buttonName, setButtonName] = useState("Click to Change");
  const ImageChange = () => {
    let x = Math.floor(Math.random() * 10);

    x = x * 50;
    let w = 250;
    switch (x) {
      case 1:
        x = x * 150;
      case 2:
        x = x * 120;
      case 3:
        x = x * 60;
      case 4:
        x = x * 20;
    }
    if (x < 200) {
      x = 200;
    }
    setImage(`https://source.unsplash.com/random/${x}x${w}`);
    console.log("changed", x, w);

    setButtonName(x + "x" + w);
  };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row imageChangeSection">
          <col-12 className="col-lg-12 imageDiv">
            <img src={Image} alt="Random Change Images" className="Cimage" />
          </col-12>
          <col-12 className="col-lg-12 ">
            <button className="buttonDiv" onClick={ImageChange}>
              {buttonName}
            </button>
          </col-12>
        </div>
      </div>
    </div>
  );
};

export default ChangeImage;
