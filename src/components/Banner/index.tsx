import { Image, Flex, Text, Box, useBreakpointValue, VStack, Stack } from "@chakra-ui/react"
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
            <Stack direction="column" spacing={[1, 8, 7, 7 ]} align="flex-start" ml={['1rem', '9rem']} width="100%">
                <Box
                    h={['58px', '82px', '82px', '108px']}
                    w={['238px', '285px', '332px', '426px']}
                    lineHeight={['30px', '36px', '42px', '54px']}
                    mt={['1.75rem', '3rem']}
                >
                    <Text
                        fontFamily='Poppins'
                        fontStyle='normal'
                        fontWeight='500'
                        fontSize={['20px', '28px', '28px', '36px']}
                        color='#F5F8FA'
                    >
                        5 Continentes, infinitas possibilidades
                    </Text>
                </Box>
                <Box
                    h={['41px', '57px', '57px', '57px']}
                    //w={['333px', '380px', '427px', '524px']}
                    maxW={["100%", "100%", "100%", "550px"]}
                    lineHeight={['21px', '23px', '23px', '30px']}
                >
                    <Text
                        fontFamily='Poppins'
                        fontStyle='normal'
                        fontWeight='400'
                        fontSize={['14px', '16px', '18px', '20px']}
                        color='#DADADA'
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>
            </Stack>
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
