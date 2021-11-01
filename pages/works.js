import { Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import P from '../components/paragraph'

import { WorkGridItem } from '../components/work-grid'

import thumbCollar from '../public/images/collarlogo.png'
import thumbGoogleXd from '../public/images/googlexd.png'

const Works = () => (
    <Layout title='Works'>
            <Heading as='h3' fontSize={30} pb={20} pt={10} textAlign='center'>
                Working Portfolio
            </Heading>

            <SimpleGrid columns={[1]} gap={5}>
                <Section>
                    <WorkGridItem id='collar' title='Collar' thumbnail={thumbCollar}>
                        This project is what got me into this field.  My girlfirend and I thought of a dating app that would connect people along with their pets
                    </WorkGridItem>
                </Section>

                
                
                <Section delay={0.1}>
                    <WorkGridItem id='uxclass' title='UX Design' thumbnail={thumbGoogleXd}>
                        These are some of the mockups, wireframes and prototypes I developed while taking the Google UX Design course.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
                <P>
                    More On The Way...
                </P>
            
    </Layout>
)


export default Works