import React from "react";
import { Box, Button, Divider, Image, Text } from "@chakra-ui/react";
import logo from "../Images/pro_banner.png";
import {BsCheckLg} from "react-icons/bs"
import { Link } from "react-router-dom";

const PricingModal = () => {
  return (
    <div>
      <Box textAlign={'center'} w={'35%'} h={'80vh'} borderRadius={5} 
      border={'0.2px solid grey'}
      margin={'auto'} mt={'20'} >
        <Image  margin={"auto"}  src={logo} alt="photo" />
        <Box padding={'1'} >
        <Text fontSize={'2xl'} fontWeight={'bold'} >
          Upgrade My First Workspace to keep using premium features that
          supercharge your workflows
        </Text>
        <Divider orientation="horizontal" h={2} />
        <Box>
          <Box  mt={'1'} display={'flex'} textAlign={'center'}  justifyContent={'center'} gap={'10'}>
                <Text fontSize={'xl'}>Pro</Text>
                <Button backgroundColor={'#cfdfff'}>most popular</Button>
          </Box>
          <Box display={'flex'} justifyContent={'center'} mt={'1'} alignItems={'center'} gap={'3'} >
            <Text fontSize={'3xl'}>$20</Text>
            <Text>per seat/month</Text>
          </Box>
          <Link to='/payment'>
          <Button backgroundColor={'#2d7ff9'} w={"70%"} mt={'1'} >Choose Pro</Button>
          </Link>
          <Box margin={'auto'}  w={'50%'} mt={'5'} textAlign={'left'}>
            
             <Box display={'flex'} gap={'2'}>
             <BsCheckLg /> 
            Everything in Plus, and :</Box> 
            <Box display={'flex'} gap={'2'}>
             <BsCheckLg /> 
            50,000 records per base</Box>
            <Box display={'flex'} gap={'2'}>
             <BsCheckLg /> 
            20GB of attachments per base</Box>
            <Box display={'flex'} gap={'2'}>
             <BsCheckLg /> 
            1-year revision & snapshot history</Box>
            <Box display={'flex'} gap={'2'}>
             <BsCheckLg /> 
            Personal & locked views</Box>
            <Box display={'flex'} gap={'2'}>
             <BsCheckLg /> 
            Color & formatting options</Box>

            <Text mt={2} mb={'2'}>
            Now, Pro plan updates include:
             </Text>
            <Box display={'flex'} gap={'2'}>
             <BsCheckLg /> 
            10 extensions per base </Box>
            <Box display={'flex'} gap={'2'}>
             <BsCheckLg /> 
             10 sync integrations </Box> 
          </Box>
        </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PricingModal;
