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

      <div class="card-info">
              <p class="title">Magic Card</p>
      </div>

    </div>
</SwiperSlide>
    <SwiperSlide>
          <div class="card">

          <div class="card-info">
                  <p class="title">Magic Card</p>
          </div>

          </div>
    </SwiperSlide>
    <SwiperSlide>
          <div class="card">

          <div class="card-info">
                  <p class="title">Magic Card</p>
          </div>

        </div>
</SwiperSlide>
    <SwiperSlide>
          <div class="card">

          <div class="card-info">
                  <p class="title">Magic Card</p>
          </div>

          </div>
    </SwiperSlide>

  </Swiper>
    </div>
  )
}

export default Member
