import {Container, Box, Heading } from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Bio from '../components/bio'
import Footer from '../components/footer'

const Home = () => {
    return(
    <Layout>
        <Container>
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1} textAlign='center' pt={5}>
                        <Heading as='h2' variant='page-title'>
                            Nick Cavazos
                        </Heading>
                        <p>Creator and Developer</p>
                    </Box>
                </Box>
                <Box>
                    <Bio/>
                </Box>
                <Box>
                </Box>
        </Container>
    </Layout>
    )
}
export default Home 