import { Container, Box, Button, Stack, Text, Link, Icon } from '@chakra-ui/react'
import React from 'react';
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'



const Footer = () => (

  <Box mt={20} mt={20} >
    <Text fontSize="xl" mt={12} fontWeight="bold" textAlign="center">
      Nick Caz Dev
      <Link 
        href="https://instagram.com/nickcazdev"
        target="_blank">
        <Button
        alignContent="center"
          variant="ghost"
          colorScheme="red"
          leftIcon={<Icon as={IoLogoInstagram} />}
        >
          @nickcazdev
        </Button>
      </Link>
    </Text>
    <Text
      fontSize="lg"
      textAlign="center"
      maxW="800px"
      m="0 auto"
      borderBottom="1px #bbb solid"
      mt={4}
      pb={5}
    >
      Here to Help Desgin and Create Ideas
    </Text>
    <Text fontSize='sm' textAlign='center' maxW='700px' m='0 auto' >
      Contact me at nick7caz@gmail.com
    </Text>
    <Box align="center" opacity={0.4} fontSize="sm">
      Based in Santa Cruz, CA
      &copy; {new Date().getFullYear()} Nick Cavazos. All Rights Reserved.
    </Box>
  
  </Box>

)


export default Footer
