import React from "react";
import { Carousel } from "react-responsive-carousel";
import Img1 from "../../assets/images/BA_Nonprofit_cover.png";
import Img2 from "../../assets/images/BA_Nonprofit_cover.png";
import Img3 from "../../assets/images/image1-480x270.png";
import Img4 from "../../assets/images/Kleon-1-980x513.png";
import Img5 from "../../assets/images/Logo_Cost-1.png";
import Img6 from "../../assets/images/image2-980x653.jpg";
import Img7 from "../../assets/images/Marketing_Recession-1-980x513.png";
import Img8 from "../../assets/images/Video_Ads_Hows_and_Whys-980x513.png";
import Img9 from "../../assets/images/What_Great_Brands_Do.png";

export default function Gallery() {
  return (
  <Carousel autoPlay>
    <div>
      <img alt="" src={Img1}/>
      <p className="legend">Legend 1</p>
    </div>
    {/* <div>
      <img alt="" src={Img3}/>
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src={Img4}/>
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src={Img5}/>
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src={Img6}/>
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src={Img7}/>
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src={Img8}/>
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src={Img9}/>
      <p className="legend">Legend 1</p>
    </div> */}
  </Carousel>
  )
}