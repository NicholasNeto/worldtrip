import { Image, Flex, Text, Box, useBreakpointValue, VStack } from "@chakra-ui/react"
import React from "react"

export function Banner() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })


    return (
        <Box
            bgSize='cover'
            bgRepeat='no-repeat'
            backgroundImage="url('/images/background.jpg')"
            height={['163px', '250px', '250px', '335px' ]}
            width='100%'
        >
            <VStack spacing={4} align="flex-start" ml='9rem'>
                <Box
                    h={[58, 108]}
                    w={[238, 426]}
                    lineHeight={['30px', '54px']}
                    mt='5rem'
                >
                    <Text
                        fontFamily='Poppins'
                        fontStyle='normal'
                        fontWeight='500'
                        fontSize={[20, 36]}
                        color='#F5F8FA'
                    >
                        5 Continentes, infinitas possibilidades
                    </Text>
                </Box>
                <Box h={[41, 57]} w={[333, 524]} lineHeight={['21px', '30px']} >
                    <Text
                        fontFamily='Poppins'
                        fontStyle='normal'
                        fontWeight='normal'
                        fontSize={[14, 20]}
                        color='#DADADA'
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>

            </VStack>

            {isWideVersion &&
                <Image
                    position='absolute'
                    width='417.15px'
                    height='270.74px'
                    left='883.42px'
                    top='210px'
                    src="/images/airplane.svg"
                    transform='rotate(3deg)'
                />
            }
        </Box >
    )
}
