import React from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Infos from "./Infos";
import { InfosProps } from "../../pages/continent/[slug]";

interface ContentContinentProps {
    description: string;
    infos: InfosProps;
}


export function ContentContinent({ description, infos }: ContentContinentProps) {
    return (
        <Flex direction="column" maxW="1160px" mx="auto" mb="10" mt='10' px="1rem">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem>{description}</GridItem>
                {/* <GridItem>
                    <Infos continent={infos}/>
                </GridItem> */}
            </Grid>
        </Flex>
    )
}
