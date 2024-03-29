import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo.png";
import { useSelector } from "react-redux";
import SignUpPopUp from "./SignUpPopUp";
import UserDetail from "./UserDetail";
import { NavDrawer } from "./NavDrawer";

const Navbar = () => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const hoverColor = "#0768F8";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();

  const handleDashboard = () => {
    if (isAuth) {
      navigate("/userdashboard", { replace: true });
    } else {
      toast({
        title: `Please Login First...`,
        status: "error",
        duration: 500,
        position: "top",
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };

  return (
    <Box
      bgColor="white"
      boxShadow=" rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;"
      w="100%"
      zIndex={10}
      borderBottom="1px"
      borderBottomColor="#c5c7cc"
      position="sticky"
      top="0"
      mb="5px"
    >
      <Flex align="center" p="1rem" fontSize="14px" bg="#0768F8" w="100%">
        <Text color={"white"}>
          Welcome to WebTaskIt.com. Why stress over Work Management? Manage here
          at <Link to="/">WebTaskIt.com</Link>
        </Text>
      </Flex>

      <Flex
        justify="space-between"
        align="center"
        p="1rem 0px"
        borderBottom="0.2px solid gray"
      >
        <Flex align="center" gap="1.5rem" ml="1rem">
          <Link to="/">
            <Image
              width="100px"
              height="70px"
              borderRadius={50}
              src={Logo}
              alt="WebTaskIt.com"
            />
          </Link>
          {isLargerThan768 ? (
            <>
              <Menu>
                <MenuButton
                  _hover={{ color: "#0768F8", textDecoration: "underline" }}
                  fontSize={18}
                  fontWeight={"500"}
                >
                  Product {">"}
                </MenuButton>
                <MenuList
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  minW="300px"
                >
                  <Link to="/featuresoverview">
                    <MenuItem
                      display="flex"
                      mt="0.8rem"
                      gap="1rem"
                      fontSize={17}
                      fontWeight={"460"}
                    >
                      Overview
                    </MenuItem>
                  </Link>
                  <MenuDivider />
                  <MenuItem
                    display="flex"
                    mt="0.8rem"
                    gap="1rem"
                    fontSize={17}
                    fontWeight={"460"}
                  >
                    Features {<IoIosArrowDown />}
                  </MenuItem>

                  <MenuItem
                    display="flex"
                    mt="0.8rem"
                    ml="0.8rem"
                    gap="1rem"
                    fontSize={17}
                    fontWeight={"460"}
                    onClick={handleDashboard}
                  >
                    <FaGreaterThan />
                    Views
                  </MenuItem>
                </MenuList>
              </Menu>
              <Stack
                direction="row"
                spacing={8}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={18}
                fontWeight={"500"}
              >
                <Link to={"/pricing"}>
                  <Text
                    cursor="pointer"
                    _hover={{
                      color: hoverColor,
                      textDecoration: "underline",
                    }}
                  >
                    Pricing
                  </Text>
                </Link>

                <Link to={"/enterprises"}>
                  <Text
                    cursor="pointer"
                    _hover={{
                      color: hoverColor,
                      textDecoration: "underline",
                    }}
                  >
                    Enterprise
                  </Text>
                </Link>

                <Link to={"/resourse"}>
                  <Text
                    cursor="pointer"
                    _hover={{
                      color: hoverColor,
                      textDecoration: "underline",
                    }}
                  >
                    Resources
                  </Text>
                </Link>
              </Stack>
            </>
          ) : null}
        </Flex>

        <Flex
          display={["none", "none", "flex", "flex"]}
          justify="space-between"
          align="center"
          gap="1.5rem"
          mr="1rem"
        >
          <Box display="flex" alignItem="center">
            {isAuth ? <UserDetail /> : <SignUpPopUp />}
          </Box>
        </Flex>

        <Box
          display={["inline-block", "inline-block", "none", "none","none"]}
          mr="2rem"
        >
          {/* <GiHamburgerMenu onClick={onOpen} size="1.5rem" /> */}
          <NavDrawer/>
        </Box>
        {/* Hamburger menu bar */}
      </Flex>
    </Box>
  );
};

export default Navbar;
