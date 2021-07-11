import { Flex, Image} from "@chakra-ui/react";

export function Header() {
    return (
        <Flex w={1440} h={100} mx='auto' justifyContent='center' mt='4'>
            <Image src="/images/logo.svg" alt="logo word trip" />
        </Flex>
    )
}