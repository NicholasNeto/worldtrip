import React from "react";
import { Flex, Text, Image, VStack, Box } from "@chakra-ui/react";
import { CitiesProps } from "../../pages/continent/[slug]";

interface CitieProps {
    cities: CitiesProps[]
}


export function Cities({ cities }: CitieProps) {
    debugger
    return (
        <Flex direction="column" maxW="1160px" mx="auto" mb="10" mt='10' px="1rem">
            <Text
                fontFamily='Poppins'
                fontStyle='normal'
                fontWeight='500'
                fontSize={['24px', '28px', '28px', '36px']}
                color='#47585B'
            >Cidades + 100</Text>

            <VStack
                width="256px"
                height="279px"
                borderRadius="4px"
                border='1px solid rgba(255, 186, 8, 0.5)'
                backgroundColor='#FFFFFF'
            >
                {cities.map(it => {
                    return (
                        <div key={it.city_flag}>
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
                        </div>
                    )
                })}

            </VStack>

        </Flex>
    )
}
