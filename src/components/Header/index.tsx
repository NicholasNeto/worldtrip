import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"


export function Header() {
    return (
        <Flex
            display='flex'
            justifyContent='center'
            as='header'
            maxWidth={1440}
        >
            <Image
                boxSize="100px"
                src="/images/logo.svg"
                alt="logo word trip"
            />
        </Flex>
    )
}