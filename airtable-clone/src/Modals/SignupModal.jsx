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
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    ModalBody,
} from "@chakra-ui/react";
import logo from ".././Images/footer_logo.jpeg";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BsStars } from "react-icons/bs";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { SignUpFunc } from "../Redux/AuthContext/actions";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginModal } from "./LoginModal";


export default function SignUpModal({onCloseNavDrawer}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
            if (el.userEmail === email) {
                checkAlready = true;
            }
        })

        if (!checkAlready) {
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
        } else {
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
        <>
            <Button onClick={onOpen} colorScheme={'blue'}>Sign Up</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <Flex
                                minH="fit-content"
                                align={"center"}
                                justify={"center"}
                                textAlign={"left"}
                                bg={useColorModeValue("gray.50", "gray.800")}
                            >
                                <Stack w={"100%"} maxW={"xl"}>
                                    <Image
                                        borderRadius={"25"}
                                        width={"40%"}
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
                                            <Stack pt={2}>
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
                                                <Text align={"center"} onClick={onclose}>
                                                    Already a user?{" "}
                                                    <LoginModal onCloseNavDrawer={onCloseNavDrawer}/>
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
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Box><LoginModal/></Box>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}