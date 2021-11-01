import Layout from "../../components/layouts/article";
import P from "../../components/paragraph"
import {Title} from "../../components/work"
import{Container, Heading, Image, Box, Spacer} from '@chakra-ui/react'


const Post = () => (
<Layout title="How I got Started" >
    <Container pt={10}>
        <Title>
            How I Got Started
        </Title>
        <Image src="/images/helloWorld.png" alt="hello world"></Image>
        <Box pt={10}>
        <P>
            I have spent the past year in a deep dive into this field.  It started with a curiousity and an idea.  From there, a passion has developed.
            The idea was Collar, and I wondered if it was something that I could create on my own.  From there, I spent the next five months Youtube&#39;ing, Google&#39;ing, and searching through Github and StackOverflow.
            I was able to create a working product and my idea finally had life.
            </P>
            <P>
            Since it was in pretty rough shape as far as the UX Design was concerned, I decided that some experience was needed with that.
            I found a Professional Certificate program offered from Google through Coursera, and spent the next month going through that.
            From there, I dove into JavaScript Basics and have finally earned my Full-Stack Certificate as well.
        </P>
        <P>
            This journey has been a departure from my comfort zone and I continue to keep learning and expanding my skills.
        </P>
        <Spacer p={5}/>
        <Heading as="h3" fontSize={20} textAlign="center">
            If there is a project you would like to collaborate with, you can reach me at nick7caz@gmail.com
        </Heading>
        </Box>
    </Container>
</Layout>

)

export default Post