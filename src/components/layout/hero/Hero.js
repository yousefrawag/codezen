/* import React, { Component } from "react";
import Slider from "react-slick";
import "./Fade.scss";

export default class Fade extends Component {
  render() {
    const settings = {
        fade: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable automatic slideshow
        autoplaySpeed: 5000, // Delay between slides in milliseconds
    };
    return (
      <div className="header-fade-img">
        <Slider {...settings}>
          <div>
            <img src={"./logo/img-1.jpeg"} />
          </div>
          <div>
            <img src={"./logo/img-2.jpeg"} />
          </div>
          <div>
            <img src={"./logo/img-3.jpeg"} />
          </div>
          <div>
            <img src={"./logo/img-4.jpeg"} />
          </div>
          <div>
            <img src={"./logo/img-5.jpg"} />
          </div>
          <div>
            <img src={"./logo/img-6.jpeg"} />
          </div>
        </Slider>
      </div>
    );
  }
} */

import { useTranslation } from "react-i18next";
import "./Hero.scss";

const Fade = () => {
  const {t} = useTranslation();
  return (
    <div className="waveWrapper waveAnimation">
      <div id='title'>
  <div className="text-title">
    <p>{t('hero_title')}</p>
    <div>
    <a href="#">{t('contact_us')}</a>
    <a href="#">{t('who_we_are')}</a>
    </div>
  </div>
  
  <div className="ava-img">
    <img src="../images/icon-1.png" alt="vector" />
  </div>
</div>
  <div className="waveWrapperInner bgTop">
    <div className="wave waveTop" style={{backgroundImage: 'url(http://front-end-noobs.com/jecko/img/wave-top.png)'}}></div>
  </div>
  <div className="waveWrapperInner bgMiddle">
    <div className="wave waveMiddle" style={{backgroundImage: '(http://front-end-noobs.com/jecko/img/wave-mid.png)'}}></div>
  </div>
  <div className="waveWrapperInner bgBottom">
    <div className="wave waveBottom" style={{backgroundImage: "url(http://front-end-noobs.com/jecko/img/wave-bot.png)"}}></div>
  </div>
</div>
  )
}

export default Fade