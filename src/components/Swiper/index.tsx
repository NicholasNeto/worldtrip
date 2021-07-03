// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image, Flex } from "@chakra-ui/react"
// import SwiperCore from 'swiper/core';
import 'swiper/swiper-bundle.css'
import React from 'react';
// import './styles.css'

// Import Swiper styles
// import 'swiper/swiper.scss';

export function NNSwiper() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Flex>
                    <Image
                        display='flex'
                        justifyContent='center'
                        maxWidth='1240px'
                        maxHeight='450px'
                        src="/images/europa.svg"
                        background='linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(.jpg)'
                        box-shadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
                    />
                </Flex>

            </SwiperSlide>
        </Swiper>
    );
};