import { Flex, Image } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            as='header'
            bg='white'
            mx='auto'
            px='1rem'
            h={['56px', '100px']}
            align="center"
            justify='center'
        >
            <Image src="/images/logo.svg" alt="logo word trip" />
        </Flex>
    )
}