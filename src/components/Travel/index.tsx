
import { HStack, Flex, Box, Image, Text } from "@chakra-ui/react";

export function TravelType() {
    return (
        <HStack
            spacing={40}
            justifyContent='center'
            position='absolute'
            width='1160px'
            height='145px'
            left='140px'
            top='549px'
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
