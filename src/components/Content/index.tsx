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
                line-height={['30px', '54px']}
            >
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
            </VStack>
        </>
    )
}
