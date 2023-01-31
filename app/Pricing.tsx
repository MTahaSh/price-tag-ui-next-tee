import { Icon , Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import CheckMarks from './Icons/CheckMarks'


export default function Pricing() {
  return (  
    <Box maxW={"994px"} minH={{lg:"336px",base:"606px",md:"606px"}} mx={{lg:"auto", base:"22px",}} mt={"-162px"} bg={"white"} borderRadius={"12px"} overflow={"hidden"} boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"}>
        <Flex direction={{base:"column",md:"column", lg:"row"}}>

        <Box bg={"#c1ade9"} p={"57px 48px 88px 48px"} textAlign={"center"}>
        <Text fontWeight={"bold"} fontSize={"24px"}>Preimum PRO</Text>
        <Heading fontSize={"60px"}>$329</Heading>
        <Text>billed just once</Text>
        <Button mt={"20px"} w={"282px"} color={"white"} bg={"#805AD5"}>Get Started</Button>
        </Box>
        <Box pt={"50px"} pl={"25px"} pr={"20px"}>

        <Text mb={"24px"} ml={"48px"}>Access these features when you get this pricing package for your business.</Text>
        
        <HStack ml={"53px"} mb={"16px"}>
            <Icon as={CheckMarks}/>
            <Text>International calling and messaging API</Text>
        </HStack>
        
        <HStack ml={"53px"} mb={"16px"}>
            <Icon as={CheckMarks}/>
            <Text>Additional phone numbers</Text>
        </HStack>
        
        <HStack ml={"53px"} mb={"16px"}>
            <Icon as={CheckMarks}/>
            <Text>Automated messages via Zapier</Text>
        </HStack>
        
        <HStack ml={"53px"} mb={"16px"}>
            <Icon as={CheckMarks}/>
            <Text>24/7 support and consulting</Text>
        </HStack>
        
        
        </Box>
        </Flex>
    </Box>
  )
}
