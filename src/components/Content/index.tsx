import { VStack, StackDivider, StackItem, Text } from "@chakra-ui/react";

export function Content() {
    return (

        <VStack
            spacing={4}
            align="center"
            marginTop="10"

            font-family='Poppins'
            font-style='normal'
            font-weight='500'
            font-size='36px'
            line-height='54px'
        >
            <Text>Vamos nessa?</Text>
            <Text>Então escolha seu continente</Text>
        </VStack>
    )
}
