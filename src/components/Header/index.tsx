import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"


export function Header() {
    return (
        <Flex
            as='header'
            display='flex'
            justifyContent='center'
        >
            <Image
                boxSize="100px"
                src="/images/logo.svg"
                alt="logo word trip"
            />
        </Flex>
    )
}