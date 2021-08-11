
import React from "react"
import { Image, Flex, Text, SimpleGrid, Box, HStack } from "@chakra-ui/react"
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom"
import { BannerContinent } from "../../components/BannerContinent";
import { ContentContinent } from "../../components/Content/content-continent";
import { Cities } from "../../components/Cities/index";

export interface InfosProps {
    countries: string;
    languages: string;
    cities: string;
}
interface ContinentProps {
    continent: {
        slug: string,
        title: string,
        description: string,
        banner_image: string,
        infos: InfosProps
    }
}

export default function Continent({ continent }: ContinentProps) {
    return (
        <Flex direction='column'>
            <BannerContinent bannerImage={continent.banner_image} title={continent.title} />
            <ContentContinent description={continent.description} infos={continent.infos} />
            <Cities />
        </Flex>
    )
}

export async function getServerSideProps({ req, params }) {
    const { slug } = params;
    const prismic = getPrismicClient()
    const response = await prismic.getByUID('continent', String(slug), {})

    const dataInfos = response.data.infos[0]
    const infos = Object.keys(dataInfos).reduce((acc, cur) => {
        return { ...acc, [cur]: dataInfos[cur][0].text }
    }, {})

    console.log('response  **%%**', response)
    console.log('dataInfos  **%%**', response.data.infos[0])


    const continent = {
        slug,
        title: RichText.asText(response.data.title),
        description: RichText.asText(response.data.description),
        banner_image: response.data.banner_image.url,
        infos
    };


    console.log('continent --> ', continent)
    return {
        props: {
            continent,
        }
    }
}

// <Flex>
// </Flex >
// <SimpleGrid columns={2} spacing={40} p={20}>
// <Text>{continent.description}</Text>

// <HStack spacing="32px">
//     <Box>
//         <Text
//             width='98px'
//             height='60px'

//             fontFamily='Poppins'
//             fontStyle='normal'
//             fontWeight='600'
//             fontSize='48px'
//             line-height='72px'
//             color='#FFBA08'
//         >50</Text>
//         <Text>países</Text>
//     </Box>
//     <Box>
//         <Text
//             width='98px'
//             height='60px'

//             fontFamily='Poppins'
//             fontStyle='normal'
//             fontWeight='600'
//             fontSize='48px'
//             line-height='72px'
//             color='#FFBA08'
//         >60</Text>
//         <Text>línguas</Text>
//     </Box>
//     <Box>
//         <Text
//             width='98px'
//             height='60px'

//             fontFamily='Poppins'
//             fontStyle='normal'
//             fontWeight='600'
//             fontSize='48px'
//             line-height='72px'
//             color='#FFBA08'
//         >27</Text>
//         <Text>cidades + 100</Text>
//     </Box>
// </HStack>
// </SimpleGrid>
// <Flex
// //width='100%'
// //width='1160px'
// height='700px'
// backgroundColor='red'
// mx='5rem'

// >

// </ Flex>