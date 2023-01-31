"use client"
import {ChakraProvider, Heading, Text} from "@chakra-ui/react"
import {Box} from "@chakra-ui/react"
import Features from "./Features";
import Header from "./Header";
import Pricing from "./Pricing";


export default function Page()
{
  return(
  <ChakraProvider>
    <Header/>
    <Pricing/>
    <Features/>
    
  </ChakraProvider>
  );
  // <Box bg="red">
  // </Box>

}


