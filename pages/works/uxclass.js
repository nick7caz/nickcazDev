import {Container, Box, SimpleGrid, ListItem, Image, UnorderedList, Heading} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import {Title} from '../../components/work'
import P from '../../components/paragraph'


const Work = () =>(
        <Layout title='UX Design'>
            <Container pt={10}>
                <Title>
                   Google UX Design
                </Title>
            <SimpleGrid columns={2} mt={5} gap={10}>
                <Box>
                    <Image src="/images/googlexd.png" alt='uxDesign'></Image>
                </Box>
                <Box>
                    <P>
                        After I started with Collar, I began to get some more background, starting with UX/UI design.  Through Coursera and Google, I earned this professional certificate.
                        With this certificate I learned about not only the design side of things, but also how to conduct the research, interpret that research, and apply it to my designs.
                        This course also focused heavily on accessibility for all, and responsive design.
                        </P>
                        <UnorderedList> 
                            <Heading as="h2" fontSize={14} mt={5} borderBottom="1px #bbb solid" mb={5}>Concepts Learned:</Heading>
                            
                            <ListItem>Responsive Design with Adobe</ListItem>
                            <ListItem>WireFrames</ListItem>
                            <ListItem>Prototyping with Figma</ListItem>
                            <ListItem>User Research and Testing</ListItem>
                            <ListItem>UX/UI Design</ListItem>
                            <ListItem>Accessibility</ListItem>
                            <ListItem>Design Process: Empathize, Define, Ideate</ListItem>
                        </UnorderedList>
                </Box>
            </SimpleGrid>
                <Heading pt={10}> These are some wireFrames that I worked on in the course</Heading>
                <P> I also had these wireframes hooked up in a prototyping enviornment</P>
            <SimpleGrid columns={[1,1,2]} gap={10} pt={10}>
                <Image src="/images/uxCourse/bfHome.png" alt="home"></Image>
                <Image src="/images/uxCourse/CourseInfo.png" alt="courseinfo"></Image>
                <Image src="/images/uxCourse/Home.png" alt="home"></Image>
                <Image src="/images/uxCourse/Learning.png" alt="learning"></Image>        
            </SimpleGrid>
            </Container>

        </Layout>
)
export default Work