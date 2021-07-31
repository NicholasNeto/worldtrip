
import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';



import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface SliderProps {
    continents: {
        slug: string;
        image: string;
        title: string;
        summary: string;
    }[];

}

export function Slider({ continents }: SliderProps) {
    return (
        <Flex
            w="100%"
            h={["250px", '310px', '310px', "450px"]}
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

                {
                    continents && continents.map(it => {
                        return (
                            <SwiperSlide key={it.slug}>
                                <Flex
                                    backgroundImage={it.image}
                                    bgRepeat='no-repeat'
                                    bgSize='cover'
                                    backgroundPosition={['100% 30%', '100% 40%', '100% 30%']}
                                    height={['250px', '310px', '310px', '450px']}
                                    align='center'
                                    justifyContent='center'
                                >
                                    <Link href={`/continent/${it.slug}`} >
                                        <a>
                                            <Heading textAlign='center' fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">{it.title}</Heading>
                                            <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>{it.summary}</Text>
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