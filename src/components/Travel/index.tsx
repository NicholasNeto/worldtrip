
import { Stack, Flex, Box, Image, Text, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

export function TravelType() {


    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
    })


    return (
        <Flex width="100%" height={['120px', '145px']} px='2rem' marginTop='5rem'>
            <Grid templateColumns={['repeat(2, 1fr)', 'repeat(5, 1fr)']} gap={6} width="100%" >
                <GridItem colSpan={[2, 1]}>
                    <Stack direction={["row", "row", "column", "column"]} align="center" >
                        {isWideVersion ?
                            <Image src="/images/nightlife.svg" /> :
                            <Image
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
                        {isWideVersion ?
                            <Image src="/images/beach.svg" /> :
                            <Image
                                src="Ellipse.svg"
                                borderRadius="full"
                                boxSize="15px"
                                backgroundColor="#FFBA08"
                            />}
                        <Text
                            fontSize={['18px', '20px', '20px', '24px']}
                        >
                            praia
                        </Text>
                    </Stack>
                </GridItem>
                <GridItem colSpan={[2, 1]}>
                    <Stack direction={["row", "row", "column", "column"]} align="center" >
                        {isWideVersion ?
                            <Image src="/images/building.svg" /> :
                            <Image
                                src="Ellipse.svg"
                                borderRadius="full"
                                boxSize="15px"
                                backgroundColor="#FFBA08"
                            />}
                        <Text
                            fontSize={['18px', '20px', '20px', '24px']}
                        >
                            moderno
                        </Text>
                    </Stack>
                </GridItem>
                <GridItem colSpan={[2, 1]}>
                    <Stack direction={["row", "row", "column", "column"]} align="center" >
                        {isWideVersion ?
                            <Image src="/images/museum.svg" /> :
                            <Image
                                src="Ellipse.svg"
                                borderRadius="full"
                                boxSize="15px"
                                backgroundColor="#FFBA08"
                            />}
                        <Text
                            fontSize={['18px', '20px', '20px', '24px']}
                        >
                            clássico
                        </Text>
                    </Stack>
                </GridItem>
                <GridItem colSpan={[2, 1]}>
                    <Stack direction={["row", "row", "column", "column"]} align="center" >
                        {isWideVersion ?
                            <Image src="/images/earth.svg" /> :
                            <Image
                                src="Ellipse.svg"
                                borderRadius="full"
                                boxSize="15px"
                                backgroundColor="#FFBA08"
                            />}
                        <Text
                            fontSize={['18px', '20px', '20px', '24px']}
                        >
                            e mais...
                        </Text>
                    </Stack>
                </GridItem>
            </Grid>
        </Flex>
    )
}