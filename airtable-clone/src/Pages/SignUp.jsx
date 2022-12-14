import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Center,
    Image,
    Text,
    useColorModeValue,
    Link,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { BsStars } from "react-icons/bs";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  
  export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <Stack >
      <Flex
        minH={"93vh"}
        align={"center"}
        justify={"center"}
        textAlign={"left"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} w={"40%"} maxW={"xl"}>
          <Image
            width={"50%"}
            height={"99"}
            src={".././Airtable_logo.jpeg"} alt="photo"
            alignSelf={"center"}
          />
          <Stack>
            <Box mb={"5"}>
              <Heading fontSize={"4xl"} textAlign={"start"}>
                Create your account
              </Heading>
              <Box mt={"5"}>
                <select>
                  <option value="" >Choose Account Type</option>
                <option value={"user"}>User</option>
                <option value={"admin"}>Admin</option>
                </select>
              </Box>
            </Box>
            <Text fontSize={"2xl"} fontWeight={"20px"} color={"black"}>
              Work email
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
                <Box>
                  <FormControl id="firstName">
                    <FormLabel>Username</FormLabel>
                    <Input type="text" placeholder={"Username"} />
                  </FormControl>
                </Box>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder={"Email@gmail.com"} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={"Password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
              <Stack height={"51"} bg={"#5728ef"} color={"white"}  >
              <Center margin={"auto"} alignItems={'center'} > 
              <BsStars />
              Sign up today and try the Pro plan for free</Center>
              </Stack>
              </Stack>
    );
  }
  