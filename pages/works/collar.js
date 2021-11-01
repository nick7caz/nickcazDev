import {Container, Box, SimpleGrid, List, ListItem, Image, UnorderedList, Heading, Spacer} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'


const Work = () => (
        <Layout title="Collar">
            <Container pt={10}>
                <Title>
                    Collar
                </Title>
            <SimpleGrid columns={2} mt={5} gap={10}>
                <Box>
                    <WorkImage src="/images/collarlogo.png" alt='collar' ></WorkImage>
                </Box>
                <Box>
                    <P>
                        This idea we had is what got me jumpstarted in this field.  I have a functioning product that now just needs some polishing to be finished.
                        Matching and messaging are fully functional.  
                        From this porject, I have leaped into other languages and frameworks to further my abilities to finish the project.
                        </P>
                        <UnorderedList> 
                            <Heading as="h2" fontSize={14} mt={5} borderBottom="1px #bbb solid" mb={5}>Concepts Learned:</Heading>
                            
                            <ListItem>Flutter/Dart</ListItem>
                            <ListItem>Bloc</ListItem>
                            <ListItem>FireBase as a Backend</ListItem>
                            <ListItem>Authentication Services</ListItem>
                            <ListItem>UX/UI Design</ListItem>
                            <ListItem>Plugin Management</ListItem>
                            <ListItem>Xcode/VS Code/Android Studio</ListItem>
                        </UnorderedList>
                    
                </Box>
            </SimpleGrid>
            <SimpleGrid columns={[1,1,2]} gap={10} pt={10}>
                <Image src="/images/collar/login.png"></Image>
                <Image src="/images/collar/profile.png"></Image>
                <Image src="/images/collar/drawer.png"></Image>
                <Image src="/images/collar/matches.png"></Image>
                <Image src="/images/collar/messages.png"></Image>
                <Image src="/images/collar/matched.png"></Image>

            </SimpleGrid>

            </Container>

        </Layout>
)


export default Work