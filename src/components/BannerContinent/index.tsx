import { Image, Flex, Text, Box, useBreakpointValue, VStack, Stack } from "@chakra-ui/react"
import React from "react"

interface BannerContinentProps {
    bannerImage: string,
    title: string,
}

export function BannerContinent({ bannerImage, title }: BannerContinentProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        sm: true,
    })

    return (
        <Flex
            backgroundImage={`url(${bannerImage})`}
            bgRepeat='no-repeat'
            bgSize='cover'
            backgroundPosition={['100% 40%', '100% 40%', '100% 40%', '100% 45%']}
            height={['200px', '350px', '450px', '600px']}
            width='100%'
            alignItems={isWideVersion ? 'flex-end' : 'center'}
        >
            <Text
                fontFamily='Poppins'
                fontStyle='normal'
                fontWeight='600'
                fontSize={['28px', '38px', '38px', '48px']}
                color='#F5F8FA'
                marginBottom={['0rem', '3rem']}
                marginLeft={['7rem', '10rem']}
            >
                {title}
            </Text>

        </Flex >
    )
}