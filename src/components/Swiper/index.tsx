
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper/core';

import { Flex } from '@chakra-ui/react'

import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

export function NNSwiper() {
    SwiperCore.use([EffectFade, Navigation, Pagination]);

    return (
        <Flex w="100%" h={["250px","450px"]} maxW="1240px" mx="auto" mb={["5","10"]}>
            <Swiper
                cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper" 
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 3,
                      spaceBetween: 30
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 30
                    }
                  }}>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
            </Swiper>
        </Flex>
    )
}