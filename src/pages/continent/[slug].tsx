
import React from "react"
import { Image, Flex, Text, SimpleGrid, Box, HStack } from "@chakra-ui/react"
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom"
interface ContinentProps {
    continent: {
        slug: string,
        title: string,
        description: string,
        banner_image: string,
    }
}

export default function Home({ continent }: ContinentProps) {
    return (
        <>
            <Flex>
                <Image
                    htmlHeight='500px'
                    htmlWidth='1440px'
                    width='100%'
                    src={continent.banner_image}
                />

                <Text
                    position='absolute'
                    width='173px'
                    height='72px'
                    left='140px'
                    top='469px'

                    fontFamily='Poppins'
                    fontStyle='normal'
                    fontWeight='600'
                    fontSize='48px'
                    line-height='72px'
                    color='#F5F8FA'

                >Europa</Text>
            </Flex >
            <SimpleGrid columns={2} spacing={40} p={20}>
                <Text>{continent.description}</Text>

                <HStack spacing="32px">
                    <Box>
                        <Text
                            width='98px'
                            height='60px'

                            fontFamily='Poppins'
                            fontStyle='normal'
                            fontWeight='600'
                            fontSize='48px'
                            line-height='72px'
                            color='#FFBA08'
                        >50</Text>
                        <Text>países</Text>
                    </Box>
                    <Box>
                        <Text
                            width='98px'
                            height='60px'

                            fontFamily='Poppins'
                            fontStyle='normal'
                            fontWeight='600'
                            fontSize='48px'
                            line-height='72px'
                            color='#FFBA08'
                        >60</Text>
                        <Text>línguas</Text>
                    </Box>
                    <Box>
                        <Text
                            width='98px'
                            height='60px'

                            fontFamily='Poppins'
                            fontStyle='normal'
                            fontWeight='600'
                            fontSize='48px'
                            line-height='72px'
                            color='#FFBA08'
                        >27</Text>
                        <Text>cidades + 100</Text>
                    </Box>

                </HStack>
            </SimpleGrid>
        </>
    )
}

export async function getServerSideProps({ req, params }) {
    const { slug } = params;
    const prismic = getPrismicClient()
    const response = await prismic.getByUID('continent', String(slug), {})

    console.log('response  **%%**', response)
    const continent = {
        slug,
        title: RichText.asText(response.data.title),
        description: RichText.asText(response.data.description),
        banner_image: response.data.banner_image.url
    };

    console.log('continent --> ', continent)
    return {
        props: {
            continent,
        }
    }
}