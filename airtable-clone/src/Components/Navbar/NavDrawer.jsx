import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import SignUpModal from "../../Modals/SignupModal";
import { useSelector } from "react-redux";
import { FaGreaterThan } from "react-icons/fa";
import UserDetail from "./UserDetail";

const NavDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const isAuth = useSelector((store) => store.AuthReducer.isAuth);


    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                <GiHamburgerMenu onClick={onOpen} size="1.5rem" />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>

                    <DrawerBody>

                        <Menu>
                            <MenuButton
                                _hover={{ color: "#0768F8", textDecoration: "underline" }}
                                fontSize={18}
                                fontWeight={"500"}
                                onClick={onClose}
                            >
                                Product {">"}
                            </MenuButton>
                            <MenuList
                                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                                minW="full"
                            >
                                <Link to="/featuresoverview">
                                    <MenuItem
                                        display="flex"
                                        mt="0.8rem"
                                        gap="1rem"
                                        fontSize={17}
                                        fontWeight={"460"}
                                        onClick={onClose}
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
                                    onClick={onClose}
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
                                        onClick={onClose}
                                    >
                                        <FaGreaterThan />
                                        <Box>Views</Box>
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>

                        <Box m="25px auto" fontSize={18} fontWeight={"500"}>
                            <Link to={"/"}>
                                <Text onClick={onClose} _hover={{ color: "blue", cursor: "pointer" }}>
                                   Home
                                </Text>
                            </Link>
                        </Box>

                        <Box m="25px auto" fontSize={18} fontWeight={"500"}>
                            <Link to={"/pricing"}>
                                <Text onClick={onClose} _hover={{ color: "blue", cursor: "pointer" }}>
                                    Pricing
                                </Text>
                            </Link>
                        </Box>

                        <Box m="25px auto" fontSize={18} fontWeight={"500"}>
                            <Link to={"/enterprises"}>
                                <Text onClick={onClose} _hover={{ color: "blue", cursor: "pointer" }}>
                                    Enterprise
                                </Text>
                            </Link>
                        </Box>

                        <Box m="25px auto" fontSize={18} fontWeight={"500"}>
                            <Link to={"/resourse"}>
                                <Text onClick={onClose} _hover={{ color: "blue", cursor: "pointer" }}>
                                    Resources
                                </Text>
                            </Link>
                        </Box>
                        
                        <Box m="25px auto" fontSize={18} fontWeight={"500"}>
                            <Link to="/todohomepage">
                                <Box onClick={onClose}>Task Page</Box>
                            </Link>
                        </Box>
                        
                        <Box m="25px auto" fontSize={18} fontWeight={"500"}>
                            <Link to="/calendarhomepage">
                                <Box onClick={onClose}>Calendar Page</Box>
                            </Link>
                        </Box>

                        <Box m="25px auto">
                            {isAuth ? <UserDetail onCloseNavDrawer={onClose}/> : <SignUpModal onCloseNavDrawer={onClose}/>}
                        </Box>

                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export { NavDrawer };