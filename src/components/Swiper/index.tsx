
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

export function NNSwiper() {
    SwiperCore.use([EffectFade, Navigation, Pagination]);

    return (
        <>
            <Swiper
                cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper" 
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 3,
                      spaceBetween: 30
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 1
                    }
                  }}>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
            </Swiper>
        </>
    )
}