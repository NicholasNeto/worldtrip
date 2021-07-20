import { VStack, Center, Divider, Text, Flex, StackDivider } from "@chakra-ui/react";
import React from "react";

export function Content() {
    return (
        <Center height="50px" display='block' align="center" marginTop='1rem'>
            <Divider
                orientation="horizontal"
                borderColor='1px solid #47585B'
                width={['60px', '90px']}
            />
            <Text
                fontFamily='Poppins'
                fontStyle='normal'
                fontWeight='500'
                fontSize={['20px', '20px', '20px', '36px']}
            >
                Vamos nessa?</Text>
            <Text
                fontFamily='Poppins'
                fontStyle='normal'
                fontWeight='500'
                fontSize={['20px', '20px', '20px', '36px']}
            >
                Então escolha seu continente
            </Text>
        </Center>
    )
}
