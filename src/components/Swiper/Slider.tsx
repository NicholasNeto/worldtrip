
import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface SliderProps {
    continents: {
        id: string;
        imgurl: string;
        title: string;
    }[];

}

export function Slider({ continents }: SliderProps) {
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
                // autoplay={{
                //     delay: 4000,
                // }}
                style={{ width: '100%', flex: '1' }}>

                {
                    continents && continents.map(it => {
                        return (
                            <SwiperSlide>
                                <Flex
                                    backgroundImage={it.imgurl}
                                    bgRepeat='no-repeat'
                                    bgSize='cover'
                                    h='100%'
                                    w='100%'
                                    align='center'
                                    justifyContent='center'
                                >
                                    <Text
                                        fontFamily='Poppins'
                                        fontStyle='normal'
                                        font-weight='bold'
                                        fontSize='48px'
                                        line-height='72px'
                                        text-align='center'
                                        color='#F5F8FA'
                                    >Europa</Text>
                                    {/* <Text
                                        fontFamily='Poppins'
                                        fontStyle='normal'
                                        font-weight='bold'
                                        fontSize='48px'
                                        line-height='72px'
                                        text-align='center'
                                        color='#F5F8FA'
                                    >O continente mais antigo</Text> */}
                                </Flex>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Flex>
    )
}