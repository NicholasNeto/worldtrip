import { useRouter } from 'next/router'
import { Flex, Image, Grid, Icon, Link } from "@chakra-ui/react";
import { BiChevronLeft } from 'react-icons/bi';

export function Header() {
    const { asPath } = useRouter()

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

                {asPath.startsWith('/continent') ? (
                    <Link
                        href="/" colorScheme='green'
                        _focus={{ border: 'none' }} >
                        <Icon as={BiChevronLeft} fontSize='20' />
                    </Link>
                ) : null}

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