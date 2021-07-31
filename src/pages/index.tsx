import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { GetStaticProps } from 'next'
import { Banner } from '../components/Banner'
import { TravelType } from '../components/Travel'
import { Content } from '../components/Content'
import { Slider } from '../components/Swiper'
import { Flex } from '@chakra-ui/react'
import { getPrismicClient } from '../services/prismic'

export default function Home({ continents }) {

  return (
    <Flex direction='column'>
      <Banner />
      <TravelType />
      <Content />
      <Slider continents={continents} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'continent'),
  ])

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title[0].text,
      summary: continent.data.summary[0].text,
      image: continent.data.img.url
    }
  })
  return {
    props: {
      continents,
    },
    revalidate: 10, // In seconds
  }
}