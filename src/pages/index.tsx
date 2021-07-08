import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelType } from '../components/Travel'
import { Content } from '../components/Content'
import { NNSwiper } from '../components/Swiper'


export default function Home() {
  return (
    <>
      <Banner />
      <TravelType />
      <Content />
      <NNSwiper />
    </>
  )
}
