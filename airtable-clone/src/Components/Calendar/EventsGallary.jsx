import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../Redux/AppContext/actions";
import { AdminSideSingleEventBoxLokesh } from "../Admin/AdminSideSingleEventBoxLokesh";

const EventsGallary = () => {
  const dispatch = useDispatch();
  const events = useSelector((store) => store.AppReducer.events);

  useEffect(() => {
    if (events.length === 0) {
      dispatch(getEvents());
    }
  }, [dispatch, events, events.length]);

  return (
    <Box>
      {events.length === 0 ? (
        <Box
          paddingTop="5%"
          color="red"
          fontWeight="bold"
          fontSize={{
            base: "70%",
            sm: "70%",
            md: "80%",
            lg: "100%",
            xl: "120%",
          }}
        >
          User dont have any events yet!
        </Box>
      ) : (
        <Box
          width="90%"
          margin="auto"
          display="grid"
          gridTemplateColumns={{ base: "repeat(2,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)",xl:"repeat(4,1fr)" }}
        >
          {events
            .filter((elem) => elem.userID === localStorage.getItem("userEmail"))
            .map((item) => {
              return (
                <AdminSideSingleEventBoxLokesh
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  start={item.start}
                  end={item.end}
                  start_time={item.start_time}
                  end_time={item.end_time}
                  description={item.description}
                  userID={item.userID}
                />
              );
            })}
        </Box>
      )}
    </Box>
  );
};

export { EventsGallary };
