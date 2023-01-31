import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'


export default function Header() {
  return (
    <Box textAlign={{base:"left", md:"left", lg:"center"}} pl={"23px"} bg={"#6B46C1"} pt={"88.45px"} pb={"246.24px"} color={"white"}>
        <Heading mb={"10px"}>Simple Pricing for your business</Heading>
        <Text>Plans that are carefully crafted to suit your business</Text>
        <Text fontSize={"12px"}>Price Tag UI by Muhammad Taha Rizwan</Text>
    </Box>
  )
}
