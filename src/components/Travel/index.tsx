
import { Stack, Flex, Box, Image, Text, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

export function TravelType() {


    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
    })


    return (
        <Flex width="100%" height={['120px', '145px']} px='2rem' py='1rem'>
            <Grid templateColumns={['repeat(2, 1fr)', 'repeat(5, 1fr)']} gap={6} width="100%" >
                <GridItem colSpan={[2, 1]}>
                    <Stack direction={["row", "row", "column", "column"]} align="center" >
                        {isWideVersion ?
                            <Image src="/images/nightlife.svg" /> : <Image
                                src="Ellipse.svg"
                                borderRadius="full"
                                boxSize="15px"
                                backgroundColor="#FFBA08"
                            />}
                        <Text
                            fontSize={['18px', '20px', '20px', '24px']}
                        >
                            vida noturna
                        </Text>
                    </Stack>
                </GridItem>
                <GridItem colSpan={[2, 1]}>
                    <Stack direction={["row", "row", "column", "column"]} align="center" >
                        <Image
                            src="Ellipse.svg"
                            borderRadius="full"
                            boxSize="15px"
                            backgroundColor="#FFBA08"
                        />
                        <Text
                            fontSize={['18px', '20px', '20px', '24px']}
                        >
                            praia
                        </Text>
                    </Stack>
                </GridItem>
                <GridItem colSpan={[2, 1]}>
                    <Stack direction={["row", "row", "column", "column"]} align="center" >
                        <Image
                            src="Ellipse.svg"
                            borderRadius="full"
                            boxSize="15px"
                            backgroundColor="#FFBA08"
                        />
                        <Text
                            fontSize={['18px', '20px', '20px', '24px']}
                        >
                            moderno
                        </Text>
                    </Stack>
                </GridItem>
                <GridItem colSpan={[2, 1]}>
                    <Stack direction={["row", "row", "column", "column"]} align="center" >
                        <Image
                            src="Ellipse.svg"
                            borderRadius="full"
                            boxSize="15px"
                            backgroundColor="#FFBA08"
                        />
                        <Text
                            fontSize={['18px', '20px', '20px', '24px']}
                        >
                            clássico
                        </Text>
                    </Stack>
                </GridItem>
                <GridItem colSpan={[2, 1]}>
                    <Stack direction={["row", "row", "column", "column"]} align="center" >
                        <Image
                            src="Ellipse.svg"
                            borderRadius="full"
                            boxSize="15px"
                            backgroundColor="#FFBA08"
                        />
                        <Text
                            fontSize={['18px', '20px', '20px', '24px']}
                        >
                            e mais...
                        </Text>
                    </Stack>
                </GridItem>

                {/* <Box w="100%" h="120px" backgroundColor='#FFBA08'>
                    <Text>asas</Text>
                </Box>
                <Box w="100%" h="120px" backgroundColor='#FFBA08'></Box>
                <Box w="100%" h="120px" backgroundColor='#FFBA08' ></Box>
                <Box w="100%" h="120px" backgroundColor='#FFBA08' ></Box> */}

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