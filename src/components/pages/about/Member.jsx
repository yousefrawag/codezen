import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './About.scss'
import 'swiper/css'
const Member = () => {
  return (
    <div className='meber'>
    <div className="content-center">
        <h2 >Codezen Staff</h2>
        <p>
                A team of experts in everything you need
        </p>
    </div>
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
    <div class="card">
    <p class="c-txt">Hover Me</p>
  </div>
    </SwiperSlide>
    <SwiperSlide>
    <article class="card">
    <div class="temporary_text">
        Place image here
    </div>
<div class="card_content">
    <span class="card_title">This is a Title</span>
        <span class="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
        <p class="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
</div>
</article>
    </SwiperSlide>
      <SwiperSlide>
        <div class="card">

        <h2>CARD</h2>
        
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="card">

        <h2>CARD</h2>
        
        </div>
    </SwiperSlide>

  </Swiper>
    </div>
  )
}

export default Member
