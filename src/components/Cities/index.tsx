import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { InfosProps } from "../../pages/continent/[slug]";

interface ContentContinentProps {
    description: string;
    infos: InfosProps;
}


export function Cities({ description, infos }: ContentContinentProps) {

    return (
        <Flex direction="column" maxW="1160px" mx="auto" mb="10" mt='10' px="1rem">
            <Text
                fontFamily='Poppins'
                fontStyle='normal'
                fontWeight='500'
                fontSize={['24px', '28px', '28px', '36px']}
                color='#47585B'
             >Cidades + 100</Text>

            <Flex
              width="256px"  
              height="279px"
              backgroundImage='url(/images/london.jpg)'
            >
                <Text>Londres</Text>
                <Text>Reino Unido</Text>
                <Image
                    boxSize="30px"
                    borderRadius="full"
                    src="/images/flag.jpg"
                />
            </Flex>

        </Flex>
    )
}
