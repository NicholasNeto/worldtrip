
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper/core';

import { Flex, Image } from '@chakra-ui/react'

import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

export function NNSwiper() {
    SwiperCore.use([EffectFade, Navigation, Pagination]);

    return (
        <Flex w="100%" h={["250px", "450px"]}  mx="auto" my={["5", "10", "20"]} maxW={'1240px'} >
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                initialSlide={0}
            >
                <SwiperSlide><Image htmlWidth='1240px' 
                bg='linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(.jpg)'
                boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
                src="images/Continent Image.jpg" /></SwiperSlide>
                <SwiperSlide><Image htmlWidth='1240px' src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                <SwiperSlide><Image htmlWidth='1240px' src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                <SwiperSlide><Image htmlWidth='1240px' src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
                <SwiperSlide><Image htmlWidth='1240px' src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                <SwiperSlide><Image htmlWidth='1240px' src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                <SwiperSlide><Image htmlWidth='1240px' src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                <SwiperSlide><Image htmlWidth='1240px' src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
            </Swiper>
        </Flex>
    )
}