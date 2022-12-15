import {
  Box,
  Button,
  Center,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { BsStars } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";

const Pricing = () => {
  return (
    <div>
      <Stack height={"51"} bg={"#5728ef"} color={"white"}>
        <Center margin={"auto"} alignItems={"center"}>
          <BsStars />
          Sign up today and try the Pro plan for free
        </Center>
        5
      </Stack>
      <div
        style={{
          width: "100%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <Box>
          <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Box
              padding={"15px"}
              border={"1px solid lightgray"}
              width={"22%"}
              height={"550px"}
              borderRadius={"20px"}
              textAlign={"left"}
              pt={'20px'}
            >
              <Text fontWeight={"bold"}>Free</Text>
              <Text>
                For individuals or very small teams just getting started with
                Airtable
              </Text>
              <Text fontWeight={"bold"} fontSize="7xl">
                Free
              </Text>
              <Button margin={"auto"} w={"90%"}>
                Sign up
              </Button>
              <Text mt={'10'} fontWeight={"bold"}>Free includes:</Text>
              <span>
                {" "}
                <BsCheckLg /> Unlimited bases
              </span>
              Up to 5 creators or editors<br></br>
              Unlimited commenter & read-only users<br></br>
              Interface Designer<br></br>1 extension per base<br></br>1 sync
              integration<br></br>
              1,200 records per base<br></br>
              <Text>2GB of attachments per base</Text>
            </Box>
            <Box>
              {" "}
              <Box
                padding={"15px"}
                border={"1px solid lightgray"}
                width={"48%"}
                style={{padding:'10px'}}
                height={"550px"}
                borderRadius={"20px"}
                textAlign={"left"}
                backgroundColor={"#d0f0fd"}
              >
                <Text fontWeight={"bold"}>Pro</Text>
                <Text>
                  For teams and departments who need to build connected apps to
                  power their most important processes
                </Text>
                <Text fontWeight={"bold"} fontSize="7xl">
                $20 
                </Text><span>
                per seat /month
                billed annually</span>
                <Button margin={"auto"} backgroundColor={'#2d7ff9'} marginTop={'10px'} w={"90%"}>
                  Try for free
                </Button>
                <Text fontWeight={"bold"}>Free includes:</Text>
                <span>
                  {" "}
                  <BsCheckLg /> Unlimited bases
                </span>
                Up to 5 creators or editors<br></br>
                Unlimited commenter & read-only users<br></br>
                Interface Designer<br></br>1 extension per base<br></br>1 sync
                integration<br></br>
                1,200 records per base<br></br>
                <Text>2GB of attachments per base</Text>
              </Box>
            </Box>
          </Box>
          <Text mt={'50px'} fontWeight={"bold"} fontSize="4xl">
            Choose the perfect plan<br></br> for your team’s needs
          </Text>
        </Box>
             </div>
    </div>
  );
};

export default Pricing;
