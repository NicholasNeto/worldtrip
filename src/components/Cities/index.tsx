import React from "react";
import { Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { CitiesProps } from "../../pages/continent/[slug]";
import { City } from './City'

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
                        <City
                            key={it.city_pais}
                            city_pais={it.city_pais}
                            city_image={it.city_image}
                            city_flag={it.city_flag}
                            city_capital={it.city_capital} />
                    )
                })}
            </SimpleGrid>
        </Flex >
    )
}
