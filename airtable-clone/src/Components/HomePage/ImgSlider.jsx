import React from "react";
import { useState, useEffect } from "react";
const img1 =
  "https://images.ctfassets.net/wl95ljfippl8/4wv9PrDMZbl9QJ0BgpHkdU/e4a31a15c3d26d4a58195a11b477fe04/homepage-getsupport.jpg";
const img2 =
  "https://images.ctfassets.net/wl95ljfippl8/4NYojzmqu7Q3H0LGqieoTB/c8bc559b32f714cf2bdc07796c695f50/2560x1920-ExtendCapabilites-Update.jpg";
const img3 =
  "https://images.ctfassets.net/wl95ljfippl8/6geXL2hVt7gpRlvOFtQG6r/47b4716a3d659a4854a9bf5d19421887/homepage-run-code.jpg";

function ImgSlider() {
  const [selectImg, setSlelectImg] = useState(0);
  const [allImg, setallImg] = useState([img1, img2, img3]);

  useEffect(() => {
    setInterval(() => {
      setSlelectImg((selectImg) => (selectImg < 2 ? selectImg + 1 : 0));
    }, 4000);
  }, []);

  return (
    <div>
      <img
        style={{ width: "600px", height: "450px", alignItems: "right" }}
        src={allImg[selectImg]}
        alt="nahai"
      />
    </div>
  );
}
export default ImgSlider;
