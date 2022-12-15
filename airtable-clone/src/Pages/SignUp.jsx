import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Center,
  Image,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from "@chakra-ui/react";
import logo from ".././Images/footer_logo.jpeg";
import { useEffect, useState } from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { BsStars } from "react-icons/bs";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { SignUpFunc } from "../Redux/AuthContext/actions";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
//   console.log(userType);
const { userData, successCreate, createError } = useSelector(
    (state) => {
      return {
        userData: state.AuthReducer.userData,
        successCreate: state.AuthReducer.successCreate,
        createError: state.AuthReducer.createError,
      };
    },
    shallowEqual
  );
  
  useEffect(() => {
    if (successCreate){
      toast({
        title: `Account Created Successfull`,
        status: "success",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [successCreate]);

  useEffect(() => {
    if (createError) {
      toast({
        title: `Something Went Wrong !!!`,
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
    }
  }, [createError]);

function SignUp() {
    dispatch(
        SignUpFunc({ 
        userEmail: email,
        password: password,
        userName: userName,
        userType: userType,
        employeeID: employeeID,
      })
    );
    setEmail("");
    setPassword("");
    setUserName("");
    setUserType("");
  }
  function SignupRequest() {
    dispatch(
      SignUp({
        email: email,
        password: password,
        userName: userName,
        userType: userType,
      })
    );
    setEmail("");
    setPassword("");
    setUserName("");
    setUserType("");
  }
  return (
    <Stack>
      <Flex
        minH={"93vh"}
        align={"center"}
        justify={"center"}
        textAlign={"left"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} w={"40%"} maxW={"xl"}>
          <Image
            borderRadius={"25"}
            width={"200px"}
            height={"100px"}
            src={logo}
            alt="photo"
            alignSelf={"center"}
          />
          <Stack>
            <Box mb={"5"}>
              <Heading fontSize={"4xl"} textAlign={"start"}>
                Create your account
              </Heading>
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
                <FormControl id="firstName" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" placeholder={"Username"} onChange={(e) => setUserName(e.target.value)} value={userName} />
                </FormControl>
              </Box>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder={"Email@gmail.com"} value={email}/>
              </FormControl>
              <Box mt={"5"}>
                <select 
                onChange={(e) => setUserType(e.target.value)} value={userType}>
                  <option value="">Choose Account Type</option>
                  <option value={"user"}>User</option>
                  <option value={"admin"}>Admin</option>
                </select>
              </Box>
              {userType === "admin" ? 
               <Box>
               <FormControl id="employeeID" isRequired>
                 <FormLabel>EmployeeID</FormLabel>
                 <Input type="text" placeholder={"Employee ID"} onChange={(e) => setEmployeeID(e.target.value)} value={employeeID} />
               </FormControl>
             </Box>
              : null}
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={"Password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  disabled={
                    email === "" ||
                    password === "" ||
                    userName === "" ||
                    userType === ""
                  }
                  onClick={SignupRequest}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link to={"/login"} color={"blue.400"} >Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Stack height={"51"} bg={"#5728ef"} color={"white"}>
        <Center margin={"auto"} alignItems={"center"}>
          <BsStars />
          Sign up today and try the Pro plan for free
        </Center>
      </Stack>
    </Stack>
  );
}
