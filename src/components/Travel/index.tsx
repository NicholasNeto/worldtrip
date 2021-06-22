
import { HStack, Flex, Box, Image, Text } from "@chakra-ui/react";

export function TravelType() {
    return (
        <HStack
            spacing={40}
            align="center"
            justifyContent='center'
            marginTop="10"
        >
            <Box>
                <Image
                    src="/images/nightlife.svg"
                />
                <Text>vida noturna</Text>
            </Box>

            <Box>
                <Image
                    src="/images/beach.svg"
                />
                <Text>praia</Text>
            </Box>
            <Box>
                <Image
                    src="/images/building.svg"
                />
                <Text>moderno</Text>
            </Box>
            <Box>
                <Image
                    src="/images/museum.svg"
                />
                <Text>clássico</Text>
            </Box>

            <Box>
                <Image
                    src="/images/earth.svg"
                />
                <Text>e mais...</Text>
            </Box>


        </HStack>
    )
}
