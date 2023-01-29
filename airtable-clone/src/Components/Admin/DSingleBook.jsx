import styled from "styled-components";
import "./DBookCart.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  Box,
  Image,
  Button,
  GridItem,
  Grid,
  Flex,
  Text,
  Container,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getUsers } from "../../Redux/AdminContext/action";
import {
  getCheckPoint,
  getEvents,
  getTasks,
  updateEvent,
} from "../../Redux/AppContext/actions";
import { DSingleUserPage } from "./DSingleUserPage";

const DSingleBook = () => {
  const { id } = useParams();

  const tasks = useSelector((store) => store.AppReducer.tasks);
  console.log("🚀 ~ file: DSingleBook.jsx:14 ~ DSingleBook ~ tasks", tasks);
  let userEvents = useSelector((store) => store.AppReducer.events);
  const checkPoints = useSelector((store) => store.AppReducer.checkPoint);
  const [checkedUserId, setCheckedUserId] = useState("");
  const [detail, setDetail] = useState("");
  const [showDetail, setShowDetail] = useState(detail);
  const { isOpen, onOpen, onClose } = useDisclosure();

  userEvents?.forEach((item) => {
    item.start = new Date(item.start);
    item.end = new Date(item.end);
  });

  if (userEvents.length > 0) {
    userEvents = userEvents.filter((item) => item.userID === checkedUserId);
  }

  const users = useSelector((store) => store.AdminReducer.users);
  // console.log("🚀 ~ fil", users);



  const [currentuser, setCurrentUser] = useState([]);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const filterByParamTags = (task) => {
    const tagsInTheParams = searchParams.getAll("tags");
    if (tagsInTheParams.includes("All") || tagsInTheParams.length === 0) {
      return task;
    }
    const data = task.tags.filter((elem) => {
      if (tagsInTheParams.includes(elem)) {
        return true;
      }
      return false;
    });
    if (data.length) {
      return task;
    }
    return false;
  };

 

  const handleUpdateEvent = (id, newEvent) => {
    console.log(id, newEvent);
    dispatch(updateEvent(id, newEvent)).then(() => dispatch(getEvents()));
  };

  useEffect(() => {
    checkPoints.length > 0 &&
      checkPoints.map((elem) => {
        if (elem.checkValidate === true) {
          // console.log(elem);
          setCheckedUserId(elem.mailID);
        }
      });
  }, [checkPoints.length]);

  useEffect(() => {
    if (checkPoints.length === 0) {
      dispatch(getCheckPoint());
    }
  }, [dispatch, checkPoints.length]);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, [users.length, dispatch]);

  useEffect(() => {
    if (id) {
      const user = users.find((item) => item.id == id);

      console.log(user.todos);
      users && setCurrentUser(user);
    }
  }, [id]);

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(getTasks());
    }
    if (userEvents.length === 0) {
      dispatch(getEvents());
    }
    console.log("h");
  }, [dispatch, tasks.length, userEvents.length]);


  return (
    <>
      <Box width={"70%"} margin="auto" marginBottom="50px" marginTop="50px" border={"1px solid black"}
     boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
     padding={"20px "}
    borderRadius={"5px"}
    backgroundColor={"#c8d5e0"}
 
      >
        <Grid
          width={"70%"}
          margin={"auto"}
          gridTemplateColumns={{
            lg: "repeat(2,1fr)",
            md: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap={"50px"}
        >
          <GridItem>
            <Image
              boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
              margin={"auto"}
              padding={"20px"}
              width={{ lg: "200px", md: "200px", sm: "200px" }}
              // width={"100%"}
              borderRadius={"50%"}
              src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
            />
          </GridItem>
          <GridItem
          marginLeft={"-50px"}
            textAlign="left"
            width="75%"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            {/* <p style={{fontSize:"15px",marginBottom:"-12px"}}>User Name :</p> */}
            <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
              {currentuser.userName}
            </h1>
            {/* <p style={{fontSize:"15px",marginBottom:"-9px"}}>User Email :</p> */}
            <h1
              style={{
                textAlign: "left",
                fontSize: "20px",
                marginBottom: "5px",
              }}
            >
              {currentuser.userEmail}
            </h1>
            {/* <p style={{fontSize:"15px",marginBottom:"-12px"}}>User Type :</p> */}
            <p
              style={{
                textAlign: "left",
                fontSize: "19px",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {currentuser.userType}
            </p>
          </GridItem>
        </Grid>
      </Box>

     


      <Tabs  width={"60%"}  margin={"auto"} textAlign={"center"}>
  <TabList>
    <Tab>Show Todos</Tab>
    <Tab>Show Calender</Tab>
  </TabList>

  <TabPanels  width={"80%"} marginLeft={"50px"}>
    <TabPanel>
    <Box className="todos"
          width={"full"}
          display={"grid"}
          templateColumns={{
            lg: "repeat(4,1fr)",
            md: "repeat(3,1fr)",
            sm: "repeat(2,1fr)",
            base: "repeat(2,1fr)",
          }}
        >
          <Grid
            w="full"
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={8}
            padding="0px  20px"
            paddingTop="5px"
            margin={"auto"}
            justifyContent={"space-evenly"}
            align="center"
          >
            {tasks.length > 0 &&
              tasks
                .filter((item) => item.userID === currentuser.userEmail)

                .map((item) => {
                  return (
                    <GridItem
                      key={item.id}
                      justify={"center"}
                      align="center"
                      border={"1px solid grey"}
                      padding={"3px"}
                      borderRadius={"10px"}
                    >
                      <DSingleUserPage
                        key={item.id}
                        {...item}
                        colorScheme="red"
                      />
                    </GridItem>
                  );
                })}
          </Grid>
        </Box>
    </TabPanel>
    <TabPanel>
    <Box display="flex" flexDirection={"column"}>
          <Container
            maxW="container.xl"
            margin={"auto"}
            mt="20px"
            justify={"center"}
            align="center"
          >
            <Grid
              w="full"
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={4}
              paddingTop="5px"
            >
              {userEvents.length > 0 &&
                userEvents.map((item, index) => {
                  return (
                    <GridItem key={item.id} justify={"center"} align="center">
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        paddingBottom={5}
                        boxShadow={" rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
                        borderRadius={5}
                      >
                        <Stack
                          display={"flex"}
                          flexDirection={"row"}
                          justifyContent={"space-evenly"}
                          alignItems="center"
                          padding={5}
                        >
                          <Text fontWeight={600} fontSize="xl">
                            Title:{" "}
                          </Text>
                          <Text
                            fontWeight={500}
                            fontSize="xl"
                            color={"#008B8B"}
                          >
                            {item.title}
                          </Text>
                        </Stack>
                        <Stack
                          display={"flex"}
                          flexDirection={"row"}
                          justify={"space-evenly"}
                          align="center"
                          padding={5}
                        >
                          <Text fontWeight={600} fontSize="xl">
                            Start Date :{" "}
                          </Text>
                          <Text
                            fontWeight={500}
                            fontSize="xl"
                            color={"#008B8B"}
                          >
                            {`${item.start.getFullYear()}-${
                              item.start.getMonth() + 1 < 10
                                ? `0${item.start.getMonth() + 1}`
                                : item.start.getMonth() + 1
                            }-${
                              item.start.getDate() + 1 < 10
                                ? `0${item.start.getDate()}`
                                : item.start.getDate()
                            }`}
                          </Text>
                        </Stack>
                        <Stack
                          display={"flex"}
                          flexDirection={"row"}
                          justify={"space-evenly"}
                          align="center"
                          padding={5}
                        >
                          <Text fontWeight={600} fontSize="xl">
                            End Date :
                          </Text>

                          <Text
                            fontWeight={500}
                            fontSize="xl"
                            color={"#008B8B"}
                          >
                            {`${" "} ${item.end.getFullYear()}-${
                              item.end.getMonth() + 1 < 10
                                ? `0${item.end.getMonth() + 1}`
                                : item.end.getMonth() + 1
                            }-${
                              item.end.getDate() + 1 < 10
                                ? `0${item.end.getDate()}`
                                : item.end.getDate()
                            }`}
                          </Text>
                        </Stack>

                        <Link to="/calendarhomepage">
                          <Button
                            margin="auto"
                            bg={"black"}
                            color={"blue.400"}
                            onClick={onOpen}
                          >
                            Edit Event
                          </Button>
                        </Link>

                        <Modal isOpen={isOpen} onClose={onClose}>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>Add Event Description</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              {/* Description  */}

                              <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Input
                                  placeholder="Type here..."
                                  name="description"
                                  type="text"
                                  value={detail}
                                  onChange={(e) => {
                                    setDetail(e.target.value);
                                    setShowDetail(e.target.value);
                                  }}
                                  autoFocus
                                />
                              </FormControl>
                            </ModalBody>

                            <ModalFooter>
                              <Button
                                colorScheme="blue"
                                mr={3}
                                onClick={() => {
                                  onClose();
                                }}
                              >
                                Submit
                              </Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </Box>
                    </GridItem>
                  );
                })}
            </Grid>
          </Container>
        </Box>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>


      

    





    </>
  );
};

export default DSingleBook;
