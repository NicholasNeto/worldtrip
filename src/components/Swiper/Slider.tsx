
import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export function Slider() {
    return (
        <Flex
            w="100%"
            h={["250px", "450px"]}
            mx="auto"
            my={["5", "10", "20"]}
            maxW={'1240px'}
        >
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                }}
                style={{ width: '100%', flex: '1' }}>
                <SwiperSlide>
                    <Flex
                        backgroundImage="url('/images/continents-europa.jpg')"
                        bgRepeat='no-repeat'
                        bgSize='cover'
                        h='100%'
                        w='100%' />
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        backgroundImage="url('/images/continents-europa.jpg')"
                        bgRepeat='no-repeat'
                        bgSize='cover'
                        h='100%'
                        w='100%' />
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}