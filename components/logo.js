import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 40px;
  display: inline-flex;
  align-items: center;
  height: 50px;
  line-height: 20px;
  padding: 15px;
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const logoImage = `/images/icon.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImage} width={50} height={50} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            ml={4}
          >
            Nick Caz Dev
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo