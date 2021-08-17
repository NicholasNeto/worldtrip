import React from "react";
import { Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { CitiesProps } from "../../pages/continent/[slug]";

interface CityProps {
    city_image: string
    city_capital: string
    city_pais: string
    city_flag: string 
}

export function City({ city_pais, city_image, city_capital, city_flag}: CityProps) {
    return (
        <Flex
            key={city_pais}
            direction="column"

            width={["256px", '456px', '656px', "256px"]}
            height={["279px", "579px", "579px", "279px"]}

            borderRadius="4px"
            border='1px solid rgba(255, 186, 8, 0.5)'
            backgroundColor='#FFFFFF'
        >
            <Flex
                width='100%'
                height={["173px", "379px", "379px", "173px"]}
                backgroundImage={`url(${city_image})`}
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
                        fontSize={['20px', '30px', '30px', '20px']}
                        color='#47585B'
                    >
                        {city_capital}
                    </Text>
                    <Text
                        fontFamily='Barlow'
                        fontStyle='normal'
                        fontWeight='500'
                        fontSize={['16px', '28px', '28px', '16px']}
                        color='#999999'
                    >
                        {city_pais}
                    </Text>
                </ Flex>

                <Image
                    boxSize="30px"
                    borderRadius="full"
                    src={city_flag}
                />
            </Flex>
        </Flex >
    )
}
