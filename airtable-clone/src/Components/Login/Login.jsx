import {
  GridItem,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Container,
  Image,
  Flex,
  FormControl,
  Heading,
  Spacer,
  Grid,
  Button,
  Input,
  VStack,
  FormLabel,
  Modal,
  Select,
} from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import Logo from "../images/PRlogo.jpeg";
import { BiLockAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button bg="blue" color="white" onClick={onOpen}>
        Login
      </Button>

      <Modal
        size="xl"
        borderRadius="20%"
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay  />
        <ModalContent  >
          <VStack borderRadius="50%" w="full" h="full" p={10} bg="white">
            <Image objectFit="cover" borderRadius="20%" width="20%" src={Logo} alt="logo" />
          </VStack>
          <VStack w="full" h="full" p={10}>
            <Grid templateColumns="repeat(2, 1fr)" gap={40}>
              <GridItem>
                <Flex gap={4}>
                  <Box>
                    <Heading fontSize={22}>Sign Up </Heading>
                  </Box>
                  <Box mt={2}>
                    <BiLockAlt />
                  </Box>
                </Flex>
              </GridItem>
              <GridItem>
                <Flex gap={2}>
                  <Heading mt={2} fontSize={15}>
                    Or
                  </Heading>
                  <a href="google.com">
                    <Heading mt={2} fontSize={15} color="blue">
                      create an account
                    </Heading>
                  </a>
                </Flex>
              </GridItem>
            </Grid>
          </VStack>
          <VStack w="full" h="full" p={10}>
            <Box width="full">
              <Select placeholder="Select">
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
              </Select>
              <br />
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input w="full" type="email" />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input w="full" type="password" />
              </FormControl>
              <br />
              <Box w="full">
                <Button _hover={{color:"white"}} color="white" align="flex-center" bg="blue.500" w="100%">
                  Login
                </Button>
              </Box>
              <br />
              <Button
                onClick={login}
                align="flex-center"
                gap={5}
                border="1px"
                bg="white.500"
                w="100%"
              >
                <FcGoogle /> Continue with Google
              </Button>
            </Box>
          </VStack>

          <VStack w="full" h="full" p={10}>
            <VStack w="full"></VStack>
          </VStack>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}
export default Login;
