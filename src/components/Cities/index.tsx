import React from "react";
import { Flex, Text, Image, Stack, Box, SimpleGrid } from "@chakra-ui/react";
import { CitiesProps } from "../../pages/continent/[slug]";

interface CitieProps {
    cities: CitiesProps[]
}


export function Cities({ cities }: CitieProps) {
    return (
        // direction="column" maxW="1160px" maxHeight='700' mx="auto" mb="10" mt='10' px="1rem"
        <Flex
            direction="column"
            width={["300px", "500px", '800px', "1160px"]} px="1rem"
            height={['1531px', '1531px', '1531px', '700px']}
            marginInlineStart='auto'
            marginInlineEnd='auto'
        >
            <Text
                fontFamily='Poppins'
                fontStyle='normal'
                fontWeight='500'
                fontSize={['24px', '28px', '28px', '36px']}
                color='#47585B'
            >Cidades + 100</Text>

            <SimpleGrid columns={[1, null, null, 4]} spacing="40px" width="100%" >
                {/* <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box> */}


                {cities.map(it => {
                    return (
                        <Flex
                            key={it.city_pais}
                            direction="column"
                            
                            width={["256px", '456px']} 
                            height={["279px",  "379px"]}
                             
                            borderRadius="4px"
                            border='1px solid rgba(255, 186, 8, 0.5)'
                            backgroundColor='#FFFFFF'

                        >
                            <Flex
                              width='100%'
                              height="173px"
                              backgroundImage={`url(${it.city_image})`} 
                            />
                            <Flex width='100%' justifyContent="space-around" align='center'>
                                <Box>
                                    <Text>{it.city_capital}</Text>
                                    <Text>{it.city_pais}</Text>
                                </Box>
                                <Box>
                                    <Image
                                        boxSize="30px"
                                        borderRadius="full"
                                        src={it.city_flag}
                                    />
                                </Box>
                            </Flex>
                        </Flex >
                    )
                })}
            </SimpleGrid>

            {/* <Stack direction={["column", "row"]} spacing="24px" >
                {cities.map(it => {
                    return (
                        <Box
                            key={it.city_flag}
                            borderRadius="4px"
                            border='1px solid rgba(255, 186, 8, 0.5)'
                            backgroundColor='#FFFFFF'
                            height="279px"
                        >
                            <Flex width="256px" height="173px" backgroundImage={`url(${it.city_image})`} />
                            <Flex width='100%' justifyContent="space-around" align='center'>
                                <Box>
                                    <Text>{it.city_capital}</Text>
                                    <Text>{it.city_pais}</Text>
                                </Box>
                                <Box>
                                    <Image
                                        boxSize="30px"
                                        borderRadius="full"
                                        src={it.city_flag}
                                    />
                                </Box>
                            </Flex>
                        </Box >
                    )
                })}

            </Stack> */}



        </Flex>
    )
}
