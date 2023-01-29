import React from "react";
import { FaUserCircle } from "react-icons/fa";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
  Button,
  Badge,
  Flex,
  useDisclosure,
  useToast,
  Stack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { SIGNOUT } from "../../Redux/AuthContext/actionTypes";

const UserDetail = ({onCloseNav}) => {
  const userData = useSelector((data) => data.AuthReducer.userData);
  // console.log(userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onClose } = useDisclosure();

  const handleClickAccount = () => {
    navigate("/profileEdit", { replace: true });
  };

  const handleAdminDashboard = () => {
    if (userData.userType === "admin") {
      navigate("/admindashboard", { replace: true });
    } else {
      toast({
        title: "Require Admin Authorization !!!",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("loggedUser");
    setTimeout(() => {
      navigate("/signup", { replace: true });
    }, 2000);

    dispatch({ type: SIGNOUT });
    toast({
      title: "Signout Successfull !!!",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"spacebetween"}
      alignItems="center"
      gap={5}
    >
      <Button
        style={{
          padding: "0.7rem 1rem",
          borderRadius: "5px",
          outline: "none",
          border: "none",
          backgroundColor: "#3174ad",
          color: "#fff",
          cursor: "pointer",
          marginBottom: "-8px",
        }}
        onClick={handleAdminDashboard}
      >
        <Box onClick={onCloseNav}>Admin Dashboard</Box>
      </Button>

      <Menu>
        <MenuButton p={"0 0.5rem 0 0"}>
          <FaUserCircle cursor="pointer" size="2rem" />
        </MenuButton>
        <MenuList
          m={["auto", "auto"]}
          maxW="300px"
          w={["90%", "90%", "300px", "300px"]}
          p="1rem 1.5rem"
        >
          <Text textAlign="center" fontSize="1.2rem" fontWeight="bold">
            {" "}
            Hi, {userData.userName}
          </Text>
          <Text textAlign="center" m="7px 0px" fontSize="0.8rem">
            {userData.userEmail}
          </Text>

          <Flex justify="center">
            <Badge
              bg="#3662d8"
              color="white"
              p="5px 1rem"
              borderRadius="20px"
              mb={"5px"}
            >
              {userData.userType === "admin" ? "Admin" : "Customer"}
            </Badge>
          </Flex>

          <Box
            borderTop="0.5px solid gray"
            borderBottom="0.5px solid gray"
            p="1rem 0px"
          >
            <MenuItem onClick={handleClickAccount} fontSize="1rem">
              <Box onClick={onCloseNav}>Account</Box>
            </MenuItem>
            <Link to="/">
               <MenuItem onClick={onCloseNav}>Home</MenuItem>
            </Link>
            <Link to={"/todohomepage"}>
               <MenuItem onClick={onCloseNav}>Task Page</MenuItem>
            </Link>
            <Link to={"/calendarhomepage"}>
               <MenuItem onClick={onCloseNav}>Calendar Page</MenuItem>
            </Link>
            <MenuItem onClick={onCloseNav} fontSize="1rem">Feedback</MenuItem>
          </Box>

          <Box p="1rem">
            <MenuItem
              justifyContent={"center"}
              onClick={handleSignOut}
              w="100%"
              _hover={"none"}
              m="15px 0px"
              p={"0.4rem "}
              color="white"
              bg="#3662d8"
              textAlign={"center"}
              fontSize="18px"
              borderRadius={"1rem"}
            >
              <Box onClick={onCloseNav}>SignOut</Box>
            </MenuItem>
          </Box>
        </MenuList>
      </Menu>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Text>
              Don't worry your work stress is ours here. Enjoy your stay on
              WebTaskIt.
            </Text>
          </ModalBody>

          <ModalFooter borderTop="0.5px solid gray">
            <Button onClick={onClose} w="100%" variant={"flushed"}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default UserDetail;
