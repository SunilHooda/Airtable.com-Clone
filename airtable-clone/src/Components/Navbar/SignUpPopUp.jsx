import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignUpPopUp = () => {
  const navigate = useNavigate();
  const hoverColor = "#0768F8";

  const handleClickSignIn = () => {
    navigate("/login", { replace: true });
  };

  const handleClickSignUp = () => {
    navigate("/signup", { replace: true });
  };

  return (
    <Menu>
      <MenuButton
        bg={hoverColor}
        color={"white"}
        p="0.5rem 2rem"
        fontSize={18}
        fontWeight={"500"}
        borderRadius={"1rem"}
        textAlign={"center"}
      >
        Sign in for free
      </MenuButton>
      <MenuList
        m={["auto", "auto"]}
        maxW="400px"
        w={["85%", "90%", "400px", "400px"]}
        p="1rem 1.5rem"
      >
        <Text fontSize="1.2rem" fontWeight="bold">
          You could be getting lower prices.
        </Text>
        <Text m="7px 0px" fontSize="0.8rem">
          Go PRO. Save time and get more feature to explore.
        </Text>

        <MenuItem w="100%">
          <Box
            w="100%"
            _hover={"none"}
            onClick={handleClickSignIn}
            m="15px 0px"
            p={"0.4rem "}
            color="white"
            bg="#3662d8"
            textAlign={"center"}
            fontSize="20px"
            borderRadius={"1rem"}
          >
            Sign in
          </Box>
        </MenuItem>
        <MenuItem w="100%" borderRadius={"1rem"}>
          <Box
            onClick={handleClickSignUp}
            m="15px 0px"
            w="100%"
            _hover={{ color: "#3662d8" }}
            variant={"flushed"}
            p={"0.4rem "}
            textAlign={"center"}
            fontSize="20px"
            borderRadius={"1rem"}
          >
            Sign up, it's free
          </Box>
        </MenuItem>

        <Box borderTop="0.5px solid gray" p="1rem 0px">
          <MenuItem fontSize="0.9rem">Feedback</MenuItem>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default SignUpPopUp;
