import { Flex, Image, Grid } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            as='header'
            bg='white'
            mx='auto'
            px='1rem'
            h={['56px', '100px']}
            align="center"
            justify='center'
        >
            <Grid
                h='100%'
                mx='auto'
                width='100%'
                maxWidth='1160px'
                alignItems="center"
                templateColumns="repeat(3, 1fr)"
                justifyContent="center"
            >
                <Image
                    src="/images/logo.svg"
                    alt="logo word trip"
                    w={['81px', '184px']}
                    gridColumn='2'
                    justifySelf='center'
                />
            </Grid>
        </Flex>
    )
}