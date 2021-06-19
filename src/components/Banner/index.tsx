import { Image, Flex, Text } from "@chakra-ui/react"


export function Banner() {
    return (
        <Flex>
            <Image
                htmlHeight='368.21px'
                width='100%'
                blendMode='normal'
                src="/images/banner.svg"
            />
            <Flex>
                <Text
                    position='absolute'
                    width='426px'
                    height='108px'
                    left='140px'
                    top='180px'

                    color='#F5F8FA'
                    fontFamily='Poppins'
                    fontStyle='normal'
                    fontWeight='500'
                    fontSize='36px'
                    lineHeight='54px'
                >
                    5 Continentes, infinitas possibilidades
                </Text>
                <Text
                    position='absolute'
                    width='524px'
                    height='57px'
                    left='140px'
                    top='308px'

                    font-family='Poppins'
                    font-style='normal'
                    font-weight='normal'
                    font-size='20px'
                    line-height='30px'
                    color='#DADADA'
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </Flex>

            <Image
                position='absolute'
                width='417.15px'
                height='270.74px'
                left='883.42px'
                top='210px'
                src="/images/airplane.svg"
                transform='rotate(3deg)'
            />
        </Flex >
    )
}
