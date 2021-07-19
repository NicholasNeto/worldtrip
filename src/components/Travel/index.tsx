
import { Stack, Flex, Box, Image, Text, Grid } from "@chakra-ui/react";

export function TravelType() {
    return (
        <Flex width="100%" height={['120px', '145px']}>
            <Grid templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={6} >
                <Box w="100%" h="120px" backgroundColor='#FFBA08'>
                    <Text>asas</Text>
                </Box>
                <Box w="100%" h="120px" backgroundColor='#FFBA08'></Box>
                <Box w="100%" h="120px" backgroundColor='#FFBA08' ></Box>
                <Box w="100%" h="120px" backgroundColor='#FFBA08' ></Box>

            </Grid> 
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)']} gap={6} >
                <Box w="100%" h="120px" backgroundColor='#FFBA08'>
                    <Text>asas</Text>
                </Box>
            </Grid>
            
        </Flex>
    )
}


{/* <Box>
<Image
    src="/images/nightlife.svg"
/>
<Image
    src="Ellipse.svg"
    borderRadius="full"
    boxSize="15px"
    backgroundColor="#FFBA08"
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
</Box> */}