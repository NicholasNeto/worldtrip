import { VStack, Center, Divider, Text } from "@chakra-ui/react";

export function Content() {
    return (
        <>
            <Divider
                colorScheme='blackAlpha'
                
                size='3xs'
                variant='solid'
                my={10}
            // border='2px solid #47585B'
            //orientation="horizontal" 
            />
            <VStack
                spacing={4}
                align="center"

                fontFamily='Poppins'
                fontStyle='normal'
                fontWeight='500'
                fontSize='36px'
                line-height='54px'
            >
                <Text>Vamos nessa?</Text>
                <Text>Então escolha seu continente</Text>
            </VStack>
        </>
    )
}
