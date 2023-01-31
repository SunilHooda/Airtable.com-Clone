import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteEvent, getEvents } from "../../Redux/AppContext/actions";

const AdminSideSingleEventBoxLokesh = ({
  id,
  title,
  start,
  end,
  start_time,
  end_time,
  description,
  userID,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const deleteEventHandler = (id) => {
    dispatch(deleteEvent(id))
      .then(() => dispatch(getEvents()))
      .then(() =>
        toast({
          description: "Event deleted !",
          status: "warning",
          duration: 2000,
          position: "top",
          isClosable: true,
        })
      );
  };

  start = new Date(start);
  end = new Date(end);

  return (
    <Box
      boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
      borderRadius="7px"
      margin="2%"
      padding="2%"
      paddingTop="5%"
      paddingBottom="5%"
      border="1px solid black"
      display="flex"
      flexDirection="column"
    >
      <Box color={"blue.800"} fontWeight="bold" fontSize={{base: "70%", sm:"90%",md: "100%",lg:"100%",xl:"110%"}}>
        <Text>{title}</Text>
        {description ? <Text>{description}</Text> : <></>}
      </Box>
      <Box
        width="100%"
        marginTop="4%"
        color={"red.900"}
        fontWeight="bold"
        display="flex"
        flexDirection="column"
        fontSize={{base: "70%", sm:"90%",md: "100%",lg:"100%",xl:"110%"}}
      >
        <Text>
          Start-date-{" "}
          {`${start.getFullYear()}-${
            start.getMonth() + 1 < 10
              ? `0${start.getMonth() + 1}`
              : start.getMonth() + 1
          }-${
            start.getDate() + 1 < 10 ? `0${start.getDate()}` : start.getDate()
          }`}
        </Text>
        <Text>
          End-date-{" "}
          {`${" "} ${end.getFullYear()}-${
            end.getMonth() + 1 < 10
              ? `0${end.getMonth() + 1}`
              : end.getMonth() + 1
          }-${end.getDate() + 1 < 10 ? `0${end.getDate()}` : end.getDate()}`}
        </Text>
      </Box>
      <Box
        marginTop="4%"
        color={"green.900"}
        fontWeight="bold"
        display="flex"
        flexDirection="column"
        fontSize={{base: "70%", sm:"90%",md: "100%",lg:"100%",xl:"110%"}}
      >
        <Text>Start-time- {start_time}</Text>
        <Text>End-time- {end_time}</Text>
      </Box>
      <Box marginTop="4%" fontWeight="bold" width="100%">
        <Button
          onClick={() => deleteEventHandler(id)}
          margin="auto"
          size={"md"}
          colorScheme={"red"}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export { AdminSideSingleEventBoxLokesh };