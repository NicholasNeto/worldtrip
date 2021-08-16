import React from "react";
import { Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { CitiesProps } from "../../pages/continent/[slug]";

interface CitieProps {
    cities: CitiesProps[]
}

export function Cities({ cities }: CitieProps) {
    return (
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
                {cities.map(it => {
                    return (
                        <Flex
                            key={it.city_pais}
                            direction="column"

                            width={["256px", '456px', '656px', "256px"]}
                            height={["279px", "379px", "579px", "279px"]}

                            borderRadius="4px"
                            border='1px solid rgba(255, 186, 8, 0.5)'
                            backgroundColor='#FFFFFF'

                        >
                            <Flex
                                width='100%'
                                height={["173px", "273px", "379px", "173px"]}
                                backgroundImage={`url(${it.city_image})`}
                                bgRepeat='no-repeat'
                                bgSize='cover'
                                marginBottom={'1rem'}
                            />
                            <Flex width='100%' justifyContent="space-around" align='center'>
                                <Flex direction="column">
                                    <Text

                                        fontFamily='Barlow'
                                        fontStyle='normal'
                                        fontWeight='600'
                                        fontSize={['20px', '30px', '30px', '40px']}
                                        color='#47585B'
                                    >
                                        {it.city_capital}
                                    </Text>
                                    <Text
                                        fontFamily='Barlow'
                                        fontStyle='normal'
                                        fontWeight='500'
                                        fontSize={['16px', '28px']}
                                        color='#999999'
                                    >
                                        {it.city_pais}
                                    </Text>
                                </ Flex>

                                <Image
                                    boxSize="30px"
                                    borderRadius="full"
                                    src={it.city_flag}
                                />
                            </Flex>
                        </Flex >
                    )
                })}
            </SimpleGrid>
        </Flex >
    )
}
