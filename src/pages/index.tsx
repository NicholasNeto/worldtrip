import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelType } from '../components/Travel'
import { Content } from '../components/Content'


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelType />
      <Content />
    </>
  )
}
