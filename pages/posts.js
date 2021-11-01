import {Container, Heading, SimpleGrid, } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/work-grid'
import thumbLogo from "../public/images/logo.jpeg"
import thumbMachines from '../public/images/machines/machines.png'

const Posts = () => (
        <Layout title="Posts">
        <Container >
            <Heading as='h3' fontSize={30} pb={10} pt={10} textAlign='center'>
                My Posts
        </Heading>
                <Section>
                        <SimpleGrid columns={1} gap={10}>
                                <PostGridItem title="How I got started" id="intro" thumbnail={thumbLogo}>
                                </PostGridItem>
                                <PostGridItem title="My Machines" id="machines" thumbnail={thumbMachines}>
                                </PostGridItem>
                        </SimpleGrid>
                </Section>

        </Container>

        </Layout>
        )


export default Posts