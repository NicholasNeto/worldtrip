import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelType } from '../components/Travel'
import { Content } from '../components/Content'
import { NNSwiper } from '../components/Swiper/NNSwiper'
import { Slider } from '../components/Swiper/Slider'
import { Flex } from '@chakra-ui/react'


export default function Home() {

  const continents = [
    {
      id: '1',
      imgurl: "url('/images/continents-europa.jpg')",
      title: 'Europa',
    },
    {
      id: '2',
      imgurl: "url('/images/continents-europa.jpg')",
      title: 'Brasil',
    }
  ]

  return (
    <Flex direction='column'>
      <Banner />
      <TravelType />
      <Content />
      <Slider continents={continents} />
      <NNSwiper />
    </Flex>
  )
}
