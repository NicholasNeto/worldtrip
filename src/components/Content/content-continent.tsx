import React from "react";
import { Flex, Grid, GridItem, Text, useBreakpointValue } from "@chakra-ui/react";
import Infos from "./Infos";
import { InfosProps } from "../../pages/continent/[slug]";

interface ContentContinentProps {
    description: string;
    infos: InfosProps;
}


export function ContentContinent({ description, infos }: ContentContinentProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
    })


    return (
        <Flex direction="column" maxW="1160px" mx="auto" mb="10" mt='10' px="1rem">
            <Grid templateColumns={isWideVersion ? "repeat(2, 1fr)" : "repeat(1, 1fr)"} gap={[5, 10, 20]}>

                <Text
                    fontFamily='Poppins'
                    fontStyle='normal'
                    fontWeight='normal'
                    fontSize={['14px', '20px', '20px', '24px']}
                    color='#47585B'
                    textAlign="justify"
                >
                    {description}
                </Text>
                <Infos continent={infos} />

            </Grid>
        </Flex>
    )
}
