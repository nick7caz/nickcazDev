import { Container, Box, List, ListItem, UnorderedList, Image, Center, Divider, Heading, 
    SimpleGrid,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from '@chakra-ui/react'

const Bio = () => (
        <Container p={10} >
            <Box>
                <Heading size="lg">About Nick</Heading>
            </Box>
            <Center p={10}>
            <Image
                borderRadius="10px"
                boxSize="200px"
                src="/images/portrait.jpeg"
                alt="Nicholas Cavazos"
                objectFit="cover"
            />
            </Center>
            <Divider variant='solid'/>
            <Container w="100%">
                <UnorderedList pb={2}>
                    <Heading fontSize={20} pb={2}>Basics:</Heading>
                    <ListItem>Home Town: Paradise, CA</ListItem>
                    <ListItem>Currently Living in Santa Cruz, CA</ListItem>
                    <ListItem>Studied Economics and Pre-law at Californina State University Bakersfield</ListItem>
                </UnorderedList>
                <p>
                My work background has been in sales for the past ten years.  Mostly with car sales and real estate.  During the course of this pandemic, I have had the opportunity 
                to shift gears and dive into a field that has held a curiousity in my mind.
                I started with learning Flutter late in 2020, in order to cosde and designed my own app. I have been learning more and more in this field and enjoy it more each day.
                </p>

            </Container>
            <Container p={5}>
                <p>Reach out and let’s work together.</p>
            </Container>
            <Accordion allowToggle>
                <AccordionItem>
            <Box p={5}>
                <AccordionButton>
                    <Box flex="1" textAlign="left">Knowledge with
                    </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                <UnorderedList> 
                    <ListItem>Flutter/Dart</ListItem>
                    <ListItem>HTML</ListItem>
                    <ListItem>CSS</ListItem>
                    <ListItem>JavaScript</ListItem>
                    <ListItem>React</ListItem>
                    <ListItem>BootStrap4</ListItem>
                    <ListItem>Node.Js</ListItem>
                    <ListItem>Express</ListItem>
                    <ListItem>Firebase</ListItem>
                    <ListItem>MongoDb</ListItem>
                    <ListItem>WordPress</ListItem>
                </UnorderedList>
                </AccordionPanel>
            </Box>
                </AccordionItem>
            <Divider variant='solid'/>
            <AccordionItem>
            <Box p={5} >
                    <AccordionButton>
                <Box  flex="1" textAlign="left">
                    Certificates 
                </Box>
                <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel>
            <Heading size='sm'>Full-Stack Web Development with React</Heading>
            <Divider variant='solid'/>
                <UnorderedList pb={5}>
                    <ListItem>Completed: October 2021</ListItem>
                    <ListItem>Issued By: Coursera, The Honk Kong University of Science and Technology</ListItem>
                    <ListItem>Description:<p>In this specialization you learnt to (1) Design a full-fledged Web client
application using Bootstrap 4 and React, (2) Design a hybrid mobile
application using React Native, and (3) Develop server-side support for
the web application using Node.js, ExpressJS together with database
support using MongoDB.</p></ListItem>
                    <ListItem><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/RWXBHAJCCR4F">Certificate</a></ListItem>
                </UnorderedList>
                <Heading size="sm">Google UX Desgin Professional Certificate</Heading>
                <Divider variant='solid'/>
                <UnorderedList pb={5}>
                    <ListItem>Completed: July 2021</ListItem>
                    <ListItem>Issued By: Coursera, Google</ListItem>
                    <ListItem>Description:<p>Those who earn the Google UX Design Professional Certificate have completed seven courses, developed by Google, that include hands- on, practice-based assessments and are designed to prepare them for introductory-level roles in UX design. They can complete the design process from beginning to end: empathizing with users, defining their pain points, coming up with ideas for design solutions, creating wireframes and prototypes, and testing designs to get feedback.</p></ListItem>
                    <ListItem><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/A7E7P7TDKJMW">Certificate</a></ListItem>
                </UnorderedList>
                <Heading size="sm">JavaScript for Beginners</Heading>
                <Divider variant='solid'/>
                <UnorderedList pb={5}>
                    <ListItem>Completed: Aug 2021</ListItem>
                    <ListItem>Issued By: Coursera, UC Davis</ListItem>
                    <ListItem>Description:<p>JavaScript Basics, Animation with JavaScript and jQuery, Interactivity with JavaScript and jQuery, Data Manipulation in JavaScript</p></ListItem>
                    <ListItem><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/A7U9V5QYNZ3D">Certificate</a></ListItem>
                </UnorderedList>
                <Divider variant='solid'/>
                </AccordionPanel>
            </Box>
                </AccordionItem>
            </Accordion>
        </Container>
    )


export default Bio