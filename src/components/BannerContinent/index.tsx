import { Image, Flex, Text, Box, useBreakpointValue, VStack, Stack } from "@chakra-ui/react"
import React from "react"

interface BannerContinentProps {
    bannerImage: string,
    title: string,
}

export function BannerContinent({ bannerImage, title }: BannerContinentProps) {

    return (
        <Flex
            backgroundImage={`url(${bannerImage})`}
            bgRepeat='no-repeat'
            bgSize='cover'
            backgroundPosition={['100% 40%', '100% 40%', '100% 40%', '100% 45%']}
            height={['200px', '350px', '450px', '600px']}
            width='100%'


        >
            <Text
                fontFamily='Poppins'
                fontStyle='normal'
                fontWeight='600'
                fontSize={['28px', '38px', '38px', '48px']}
                color='#F5F8FA'
            >
                {title}
            </Text>

        </Flex >
    )
}