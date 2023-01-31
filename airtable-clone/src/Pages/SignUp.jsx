import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Select,
  Button,
  Heading,
  Center,
  Image,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import logo from ".././Images/footer_logo.jpeg";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BsStars } from "react-icons/bs";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { SignUpFunc } from "../Redux/AuthContext/actions";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [userObj, setUserObj] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const { successCreate, createError } = useSelector((state) => {
    return {
      successCreate: state.AuthReducer.successCreate,
      createError: state.AuthReducer.createError,
    };
  }, shallowEqual);


  useEffect(() => {
    if (successCreate) {
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
  }, [successCreate, toast, navigate]);

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
  }, [createError, toast]);

  function SignupRequest() {

    let checkAlready = false;

    userObj.length > 0 && userObj.forEach((el) => {
      if(el.userEmail === email){
        checkAlready = true;
      }
    })

    if(!checkAlready){
      dispatch(
        SignUpFunc({
          userEmail: email,
          password: password,
          userName: userName,
          userType: userType,
          employeeID: employeeID,
        })
      ).then(()=>toast({
        title: `Account Created Successfull`,
        status: "success",
        duration: 1500,
        position: "top",
        isClosable: true,
    }));
      setEmail("");
      setPassword("");
      setUserName("");
      setUserType("");
    }
    else{
      toast({
        title: `User already Signed up !!!`,
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
    }
    
  }

  useEffect(() => {
    axios
      .get("https://6398b39329930e2bb3bf7dcf.mockapi.io/users")
      .then((response) => {
        setUserObj(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);


  return (
        
    <Stack 
      width={{base: "80%", sm: "75%", md: "60%", lg: "40%",xl:"30%"}} 
      paddingTop="5%"
      paddingBottom="5%"
      margin="auto"
      >
      <Flex
        align={"center"}
        justify={"center"}
        textAlign={"left"}
        bg={useColorModeValue("gray.50", "gray.800")}
      padding="5%"

      >
        <Stack spacing={8} w={"100%"} maxW={"xl"}>
          <Image
            borderRadius={"25"}
            width={{base: "100px", sm:"110px", md: "150px",lg:"200px",xl:"200px"}}
            height={{base: "70px", sm:"80px", md: "100px",lg:"100px",xl:"100px"}}
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
            width="100%"
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            padding="3%"
          >
            <Stack spacing={4}>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    placeholder={"Username"}
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                </FormControl>
              </Box>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={"Email@gmail.com"}
                  value={email}
                />
              </FormControl>
              <Box mt={"5"}>
                <Select
                  onChange={(e) => setUserType(e.target.value)}
                  value={userType}
                >
                  <option value="">Choose Account Type</option>
                  <option value={"user"}>Customer</option>
                  <option value={"admin"}>Admin</option>
                </Select>
              </Box>
              {userType === "admin" ? (
                <Box>
                  <FormControl id="employeeID" isRequired>
                    <FormLabel>EmployeeID</FormLabel>
                    <Input
                      type="text"
                      placeholder={"Employee ID"}
                      onChange={(e) => setEmployeeID(e.target.value)}
                      value={employeeID}
                    />
                  </FormControl>
                </Box>
              ) : null}
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
                  Already a user?{" "}
                  <Link to="/login" style={{ color: "blue" }}>
                    Login
                  </Link>
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