import { Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"


export function Header() {
    return (
        <Flex w={1440} h={100} mx='auto' justifyContent='center' mt='4'>
            <Image
                src="/images/logo.svg"
                alt="logo word trip"
            />
            {/* <Flex
                as='header'
                mx='auto' // mx margin horizontal | left and right
                px='6' // px padding horizontal | left and right
                mt='4'
                align='center'
            >

            </Flex> */}

        </Flex>
    )
}