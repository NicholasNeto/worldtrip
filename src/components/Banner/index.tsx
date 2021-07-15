import { Image, Flex, Text, Box, useBreakpointValue, VStack } from "@chakra-ui/react"
import React from "react"

export function Banner() {
    return (
        <Flex
            backgroundImage="url('/images/banner.jpg')"
            bgRepeat='no-repeat'
            bgSize='cover'
            backgroundPosition={['100% 20%', '100% 20%', '100% 30%']}
            height={['163px', '250px', '250px', '335px']}
            width='100%'
        >
            <VStack spacing={4} align="flex-start" ml={['1rem', '9rem']}>
                <Box
                    h={['58px', '82px', '82px', '108px']}
                    w={['238px', '285px', '332px', '426px']}
                    lineHeight={['30px', '36px', '42px', '54px']}
                    mt={['1.75rem', '5rem']}
                >
                    <Text
                        fontFamily='Poppins'
                        fontStyle='normal'
                        fontWeight='400'
                        fontSize={['20px', '28px', '28px', '36px']}
                        color='#F5F8FA'
                    >
                        5 Continentes, infinitas possibilidades
                    </Text>
                </Box>
                <Box
                    h={['41px', '45px', '49px', '57px']}
                    w={['333px', '380px', '427px', '524px']}
                    lineHeight={['21px', '23px', '23px', '30px']}
                    mt={['0,5rem', '1.25rem']}>
                    <Text
                        fontFamily='Poppins'
                        fontStyle='normal'
                        fontWeight='normal'
                        fontSize={['14px', '16px', '18px', '20px']}
                        color='#DADADA'
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>
            </VStack>
        </Flex >
    )
}




// </VStack>

// {isWideVersion &&
// <Image
//     position='absolute'
//     width='417.15px'
//     height='270.74px'
//     left='883.42px'
//     top='210px'
//     src="/images/airplane.svg"
//     transform='rotate(3deg)'
// />
// }
