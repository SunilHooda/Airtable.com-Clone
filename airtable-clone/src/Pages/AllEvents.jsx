import { Box, Button, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AllEventGrid } from "../Components/Calendar/AllEventGrid";
import {
  getEvents,
  getCheckPoint,
  updateEvent,
} from "../Redux/AppContext/actions";

const AllEvents = () => {
  let userEvents = useSelector((store) => store.AppReducer.events);
  const checkPoints = useSelector((store) => store.AppReducer.checkPoint);
  const [checkedUserId, setCheckedUserId] = useState("");

  userEvents?.forEach((item) => {
    item.start = new Date(item.start);
    item.end = new Date(item.end);
  });

  if (userEvents.length > 0) {
    userEvents = userEvents.filter((item) => item.userID === checkedUserId);
  }

  const dispatch = useDispatch();

  const handleUpdateEvent = (id, newEvent) => {
    console.log(id, newEvent);
    dispatch(updateEvent(id, newEvent)).then(() => dispatch(getEvents()));
  };

  useEffect(() => {
    dispatch(getEvents());
  });

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

  return (
    <Box display="flex" flexDirection={"column"}>
      <Box
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "2rem auto",
        }}
      >
        <Text
          color="#3174ad"
          margin={0}
          fontSize={32}
          fontWeight="bold"
          lineHeight={1.5}
          letterSpacing={0.5}
        >
          All Calendar Events
        </Text>
        <Link to="/calendarHomePage">
          <Button
            style={{
              padding: "0.7rem 1rem",
              borderRadius: "5px",
              outline: "none",
              border: "none",
              backgroundColor: "#3174ad",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Go To Calendar
          </Button>
        </Link>
      </Box>

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
                  <AllEventGrid
                    key={index}
                    id={item.id}
                    title={item.title}
                    start={item.start}
                    end={item.end}
                    description={
                      item.description ? undefined : item.description
                    }
                    handleUpdateEvent={handleUpdateEvent}
                  />
                </GridItem>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllEvents;

// const startMonth =
// start.getMonth() + 1 < 10
//   ? `0${start.getMonth() + 1}`
//   : start.getMonth() + 1;
// const startDt =
// start.getDate() + 1 < 10 ? `0${start.getDate()}` : start.getDate();

// const endMonth =
// end.getMonth() + 1 < 10 ? `0${end.getMonth() + 1}` : end.getMonth() + 1;
// const endDt = end.getDate() + 1 < 10 ? `0${end.getDate()}` : end.getDate();

// setStartDate(`${start.getFullYear()}-${startMonth}-${startDt}`);
// setEndDate(`${end.getFullYear()}-${endMonth}-${endDt}`);
