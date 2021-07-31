
import { Image, Flex, Text, SimpleGrid, Box, HStack } from "@chakra-ui/react"
import React from "react"

export default function Home() {
    return (
        <>
            <Flex>
                <Image
                    htmlHeight='500px'
                    htmlWidth='1440px'
                    width='100%'
                    src="/images/continents-europa.svg"
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
                <Text>
                    A Europa é, por convenção, um dos seis continentes do mundo.
                    Compreendendo a península ocidental da Eurásia, a Europa
                    geralmente divide-se da Ásia a leste pela divisória de águas
                    dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o
                    mar Negro a sudeste
                </Text>

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
