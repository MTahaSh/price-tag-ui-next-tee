import { Icon ,Box, HStack, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import repeat from './Icons/repeat'
import sheild from './Icons/sheild'
import token from './Icons/token'

export default function Features() {
  return (
    <Box maxW={"906px"} m={"auto"} pt={"57px"} pb={"120px"} px={"50px"}>
        <Flex direction={{base:"column",lg:"row"}}>
        <HStack mb={"40px"}>
        <Icon as={sheild}/>
        <Text fontWeight={"bold"}>30 days money back Guarantee</Text>
        </HStack >


        <HStack mb={"40px"}>
        <Icon as={token}/>
        <Text fontWeight={"bold"}>No setup fees 100% hassle-free</Text>
        </HStack>


        <HStack mb={"40px"}>
        <Icon as={repeat}/>
        <Text fontWeight={"bold"}>No monthly subscription Pay once and for all</Text>
        </HStack>
        </Flex>



    </Box>
    


  )
}
