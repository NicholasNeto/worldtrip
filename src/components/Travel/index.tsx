
import { Stack, Flex, Box, Image, Text, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

export function TravelType() {


    const isWideVersion = useBreakpointValue({
        base: false,
        sm: true,
    })


    return (
        <Flex width="100%" height={['120px', '145px']} marginTop={['2rem', '5rem']} marginBottom={['1rem', '10rem', "0.125rem" ]} justifyContent='center'>
            <Grid
                templateRows="repeat(3, 1fr)"
                templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(5, 1fr)']}
                gap={8}
                width="100%" >
                <GridItem>
                    <Stack direction={["row", "column", "column", "column"]} align="center" >
                        {isWideVersion ?
                            <Image
                                src="/images/nightlife.svg"
                                boxSize={['50px', '50px', '50px', '85px']}
                            /> :
                            <Image
                                src="Ellipse.svg"
                                borderRadius="full"
                                boxSize="15px"
                                backgroundColor="#FFBA08"
                            />}
                        <Text
                            fontSize={['18px', '18px', '18px', '24px']}
                        >
                            vida noturna
                        </Text>
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction={["row", "column", "column", "column"]} align="center" >
                        {isWideVersion ?
                            <Image src="/images/beach.svg"
                                boxSize={['50px', '50px', '50px', '85px']} /> :
                            <Image
                                src="Ellipse.svg"
                                borderRadius="full"
                                boxSize="15px"
                                backgroundColor="#FFBA08"
                            />}
                        <Text
                            fontSize={['18px', '18px', '18px', '24px']}
                        >
                            praia
                        </Text>
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction={["row", "column", "column", "column"]} align="center" >
                        {isWideVersion ?
                            <Image src="/images/building.svg"
                                boxSize={['50px', '50px', '50px', '85px']} /> :
                            <Image
                                src="Ellipse.svg"
                                borderRadius="full"
                                boxSize="15px"
                                backgroundColor="#FFBA08"
                            />}
                        <Text
                            fontSize={['18px', '18px', '18px', '24px']}
                        >
                            moderno
                        </Text>
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction={["row", "column", "column", "column"]} align="center" >
                        {isWideVersion ?
                            <Image src="/images/museum.svg"
                                boxSize={['50px', '50px', '50px', '85px']} /> :
                            <Image
                                src="Ellipse.svg"
                                borderRadius="full"
                                boxSize="15px"
                                backgroundColor="#FFBA08"
                            />}
                        <Text
                            fontSize={['18px', '18px', '18px', '24px']}
                        >
                            clássico
                        </Text>
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction={["row", "column", "column", "column"]} align="center" >
                        {isWideVersion ?
                            <Image src="/images/earth.svg"
                                boxSize={['50px', '50px', '50px', '85px']} /> :
                            <Image
                                src="Ellipse.svg"
                                borderRadius="full"
                                boxSize="15px"
                                backgroundColor="#FFBA08"
                            />}
                        <Text
                            fontSize={['18px', '18px', '18px', '24px']}
                        >
                            e mais...
                        </Text>
                    </Stack>
                </GridItem>
            </Grid>
        </Flex>
    )
}