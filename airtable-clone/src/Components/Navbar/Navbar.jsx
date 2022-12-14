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
import { Link } from "react-router-dom";
import Logo from "./Logo.png";
import { useRef } from "react";

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const hoverColor = "#0768F8";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hamburgerMenuRef = useRef();

  return (
    <Box w="100%">
      <Flex
        justifyContent="center"
        align="center"
        p="1rem"
        fontSize="14px"
        bg="#0768F8"
        w="100%"
      >
        <Text color={"white"}>
          Welcome to WebTaskIt.com. Why stress over Work Management? Manage here
          at <Link to="/">WebTaskIt.com</Link>
        </Text>
      </Flex>

      <Flex
        justify="space-around"
        align="center"
        p="1rem 0px"
        borderBottom="0.2px solid gray"
      >
        <Flex align="center" gap="1.5rem">
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
                  <Link to="">
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
                  <Link to="">
                    <MenuItem
                      display="flex"
                      mt="0.8rem"
                      ml="0.8rem"
                      gap="1rem"
                      fontSize={17}
                      fontWeight={"460"}
                    >
                      <FaGreaterThan />
                      Views
                    </MenuItem>
                  </Link>
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
                <Link to={""}>
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

                <Link to={""}>
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

                <Link to={""}>
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
        >
          <Box
            bg={hoverColor}
            color={"white"}
            p="0.5rem 1rem"
            fontSize={18}
            fontWeight={"500"}
            borderRadius={"1rem"}
            textAlign={"center"}
          >
            <Link to={""}>
              <Text cursor="pointer">Sign up for free</Text>
            </Link>
          </Box>
          <Box p={2} fontSize={18} fontWeight={"500"} textAlign={"center"}>
            <Link to={""}>
              <Text
                cursor="pointer"
                _hover={{
                  color: hoverColor,
                  textDecoration: "underline",
                }}
              >
                Signin
              </Text>
            </Link>
          </Box>
        </Flex>

        <Box display={["inline-block", "inline-block", "none", "none"]}>
          <GiHamburgerMenu
            onClick={onOpen}
            ref={hamburgerMenuRef}
            size="1.5rem"
          />
        </Box>
        {/* Hamburger menu bar */}
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
          finalFocusRef={hamburgerMenuRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Explore</DrawerHeader>
            <DrawerBody>
              {/* <Box m="25px auto" fontSize={18} fontWeight={"500"}>
                <Text _hover={{ color: "blue", cursor: "pointer" }}>
                  Products {">"}
                </Text>
              </Box> */}
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
                  <Link to="">
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
                  <Link to="">
                    <MenuItem
                      display="flex"
                      mt="0.8rem"
                      ml="0.8rem"
                      gap="1rem"
                      fontSize={17}
                      fontWeight={"460"}
                    >
                      <FaGreaterThan />
                      Views
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>

              <Box m="25px auto" fontSize={18} fontWeight={"500"}>
                <Link to={""}>
                  <Text _hover={{ color: "blue", cursor: "pointer" }}>
                    Pricing
                  </Text>
                </Link>
              </Box>

              <Box m="25px auto" fontSize={18} fontWeight={"500"}>
                <Link to={""}>
                  <Text _hover={{ color: "blue", cursor: "pointer" }}>
                    Enterprise
                  </Text>
                </Link>
              </Box>

              <Box m="25px auto" fontSize={18} fontWeight={"500"}>
                <Link to={""}>
                  <Text _hover={{ color: "blue", cursor: "pointer" }}>
                    Resources
                  </Text>
                </Link>
              </Box>

              <Box
                bg={hoverColor}
                color={"white"}
                p="0.5rem 1rem"
                fontSize={18}
                fontWeight={"500"}
                borderRadius={"1rem"}
                textAlign={"center"}
              >
                <Link to={""}>
                  <Text cursor="pointer">Sign up for free</Text>
                </Link>
              </Box>

              <Box p={2} fontSize={18} fontWeight={"500"} textAlign={"center"}>
                <Link to={""}>
                  <Text
                    cursor="pointer"
                    _hover={{
                      color: hoverColor,
                      textDecoration: "underline",
                    }}
                  >
                    Signin
                  </Text>
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
