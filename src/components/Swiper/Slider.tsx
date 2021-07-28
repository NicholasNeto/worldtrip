
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
        description: string;
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
                                    <Link href={`/continent/${it.id}`} >
                                        <a>
                                            <Heading textAlign='center' fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">{it.title}</Heading>
                                            <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>{it.description}</Text>
                                        </a>
                                    </Link>
                                </Flex>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Flex>
    )
}