import { Box,Grid,Flex, Heading, Button,ButtonGroup,GridItem } from '@chakra-ui/react';

import React from 'react'

const Resource = () => {

  return (
    <>
   <Box >
    {/* homebar */}
       <Box  bg="#f2f4f7" border="1px" h="10">
      <Flex  mt="2" ml="5" gap="2">
      <Heading as='h6' size='xs'>Home  </Heading>
      <Heading as='h6'  size='xs'>  {">"} </Heading>
      <Heading as='h6' size='xs'>Resource</Heading>
      </Flex>
      <Flex>
        
      </Flex>
       </Box>

{/* slider */}

      <Grid templateColumns={[ 'repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']}  border="2px" >
        <GridItem bg="#181d26" p={10}  h="sm" width={[ "full","full","full","xl"]} border="2px" >
          <Box  width={[ "full","full","full","sm"]} ml="10" >
           <Heading as="h2" size="lg" color="white">Power up.</Heading>
           <Heading as="h6" mt="3" size="xs" color="white">Airtable gives you the superpower to build workflows made for your business objects in a visual, flexible way. Power up your skillset with our catalog of resources.</Heading>
           <Heading as="h4" size="lg" mt="20" color="white">QUICK START</Heading>
           <ButtonGroup mt="3">
            <Button >Product</Button>
           <Button >Marketing</Button>
           </ButtonGroup>
          </Box>
        </GridItem>
    
      <GridItem>
        
      </GridItem>

      </Grid>



   </Box>
</>
  )
}

export default Resource