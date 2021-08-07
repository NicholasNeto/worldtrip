import { Image, Flex, Text, Box, useBreakpointValue, VStack, Stack } from "@chakra-ui/react"
import React from "react"

interface BannerContinentProps {
    bannerImage: string,
}

export function BannerContinent({ bannerImage }: BannerContinentProps) {

    return (
        <Flex
            backgroundImage={`url(${bannerImage})`}
            bgRepeat='no-repeat'
            bgSize='cover'

            height={['150px', '250px', '250px', '500px']}
            width='100%'

            
        ></Flex >
    )
}