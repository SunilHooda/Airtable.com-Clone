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
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import Logo from "../images/PRlogo.jpeg";
import { BiLockAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { Loginfunction } from "../Redux/AuthContext/action";
import { SIGNIN_REQUEST } from "../Redux/AuthContext/actionTypes";
function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [userObj, setUserObj] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectUser, setSelectUser] = useState("");
  const [employeeID, setEmployee] = useState("");
  // console.log(password)
  const isAuth = useSelector((state) => {
    return {
      isAuth: state.AuthReducer.isAuth,
    };
  }, shallowEqual);

  console.log(isAuth);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    console.log(isAuth);
    if (isAuth) {
      toast({
        title: `LogIn Successfull`,
        status: "success",
        duration: 500,
        position: "top",
        isClosable: true,
      });
    }
  }, [isAuth]);

  useEffect(() => {
    axios
      .get("https://6398b39329930e2bb3bf7dcf.mockapi.io/users")

      .then((response) => {
        console.log(response.data);
        setUserObj(response.data);
        console.log(userObj);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const SendSignInRequest = () => {
    let check;

    /* Checking the email */
    let checkEmail = userObj.filter((el) => {
      return el.email === email;
    });

    /* if email is right ,Checking the password */
    if (checkEmail.length > 0) {
      let checkPassword = userObj.filter((el) => {
        return el.email === email && el.password === password;
      });
      //console.log(check[0]);

      /* if email and password is right ,Checking the userType */
      if (checkPassword.length > 0) {
        /* if userType is admin checking the employeeId */
        if (checkPassword[0].userType === "admin") {
          check = userObj.filter((el) => {
            return (
              el.email === email &&
              el.password === password &&
              el.employeeId === employeeID
            );
          });
          /* if employee is is correct */
          if (check.length > 0) {
            dispatch(
              Loginfunction({
                ...check[0],
              })
            );
          } else if (check.length === 0) {
            /*if employee id is not correct */
            toast({
              title: `Invalid Employee Id !!!`,
              status: "error",
              duration: 1500,
              position: "top",
              isClosable: true,
            });
          }
        } else if (checkPassword[0].userType === "customer") {
          /* if userType is customer disaptch */
          dispatch(
            Loginfunction({
              ...checkPassword[0],
            })
          );
        }
      } else if (checkPassword.length === 0) {
        /* if password is wrong */
        toast({
          title: `Wrong Password !!!`,
          status: "error",
          duration: 1500,
          position: "top",
          isClosable: true,
        });
      }
    } else {
      /* if email is not found */
      toast({
        title: `User not registered !!!`,
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
    }
    setEmail("");
    setPassword("");
    setSelectUser("");
  };
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
      <Container>
        <VStack borderRadius="50%" w="lg" h="full" p={10} bg="white">
          <Image
            objectFit="cover"
            borderRadius="20%"
            width="20%"
            src={Logo}
            alt="logo"
          />
        </VStack>
        <VStack w="lg" h="full" p={10}>
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
        <VStack w="lg" h="full" p={10}>
          <Box width="full">
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                w="full"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email address"
                type="email"
                value={email}
                id="email"
              />
            </FormControl>
            <br />
            <Select
              placeholder="Select"
              value={selectUser}
              onChange={(e) => setSelectUser(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </Select>
            <br />
            {selectUser === "admin" ? (
              <>
                <FormLabel>Employee ID</FormLabel>
                <Input
                  w="full"
                  onChange={(e) => setEmployee(e.target.value)}
                  placeholder="Enter Employee ID"
                  type="text"
                  value={employeeID}
                  id="email"
                />
              </>
            ) : null}
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                w="full"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                value={password}
                id="password"
                type="password"
              />
            </FormControl>
            <br />
            <Box w="full">
              <Button
                _hover={{ color: "white" }}
                onClick={SendSignInRequest}
                color="white"
                align="flex-center"
                bg="blue.500"
                w="100%"
                disabled={email === "" || password === "" || selectUser === ""}
              >
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

        <VStack w="lg" h="full" p={10}>
          <VStack w="full"></VStack>
        </VStack>
      </Container>
    </>
  );
}
export default Login;
