import { Banner } from '../components/Banner'
import { TravelType } from '../components/Travel'
import { Content } from '../components/Content'
import { Slider } from '../components/Swiper'
import { Flex } from '@chakra-ui/react'

export default function Home() {

  const continents = [
    {
      id: 'continents/europa',
      imgurl: "url('/images/continents-europa.jpg')",
      title: 'Europa',
      description: 'O continente mais antigo',
    },
    {
      id: '2',
      imgurl: "url('/images/continents-europa.jpg')",
      title: 'Brasil',
      description: 'Futebol e praias',
    }
  ]

  return (
    <Flex direction='column'>
      <Banner />
      <TravelType />
      <Content />
      <Slider continents={continents} />
    </Flex>
  )
}
