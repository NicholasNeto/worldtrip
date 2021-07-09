
import { Image, Flex, Text } from "@chakra-ui/react"

export default function Home() {
    return (
        <Flex>
            <Image
                htmlHeight='500px'
                htmlWidth='1440px'
                width='100%'
                src="/images/continents-europa.svg"
            />

            <Text
                position='absolute'
                width='173px'
                height='72px'
                left='140px'
                top='469px'

                fontFamily='Poppins'
                fontStyle='normal'
                fontWeight='600'
                fontSize='48px'
                line-height='72px'
                color='#F5F8FA'

            >Europa</Text>
        </Flex >
    )
}
