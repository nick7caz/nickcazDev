import {Box, Container, SimpleGrid, Image, Heading, UnorderedList, ListItem } from '@chakra-ui/react'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/work'

const Post = () => (
    <Layout>
        <Container pt={10}>
            <Title>
                My Machines
            </Title>

            <Box>
                <SimpleGrid columns={[1,1,2]} gap={10}>
                    <UnorderedList>
                        <Heading fontSize={25}>Main Machine: 2009 Mac Pro </Heading>
                        <ListItem>Flashed firmware to 5,1</ListItem>
                        <ListItem>2 x 3.33 GHz 6 Core Xeon</ListItem>
                        <ListItem>32gb Ram</ListItem>
                        <ListItem>RX 850 8GB</ListItem>
                        <ListItem>I purchased this machine last year and gave it a few upgrades, such as, the CPUs, new ssds, firmware, and have it running Catalina.</ListItem>
                        <Image src="/images/machines/macpro.jpeg" alt="macpro"></Image>
                    </UnorderedList>
                    <UnorderedList>
                        <Heading fontSize={25}>Windows Machine: Lenovo Legion Y740</Heading>
                        <ListItem>Intel i7-9750H 6 core</ListItem>
                        <ListItem>16gb Ram</ListItem>
                        <ListItem>NVIDIA GTX 1661 Ti</ListItem>
                        <Image src="/images/machines/lenovo.jpeg" alt="windows machine"></Image>
                        
                    </UnorderedList>
                    <UnorderedList>
                        <Heading fontSize={25}>Linux Machine: Acer Aspire M</Heading>
                        <ListItem>Intel i5-3337U 4 core</ListItem>
                        <ListItem>6gb Ram</ListItem>
                        <ListItem>I restored this laptop that was destined for e-waste.  It is now my dedicated linux machine.</ListItem>
                        
                    </UnorderedList>
                    <P>The new Macbook Pro M1 Pro is going to be an addition here soon.  It will retire the Cheesegrater, and I will turn that into a server.</P>
                </SimpleGrid>
            </Box>
        </Container>
    </Layout>


)

export default Post