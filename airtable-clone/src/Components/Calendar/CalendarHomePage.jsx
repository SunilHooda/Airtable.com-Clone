import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { useDispatch, useSelector } from "react-redux";
import {
  addEvents,
  deleteEvent,
  getCheckPoint,
  getEvents,
  updateEvent,
} from "../../Redux/AppContext/actions";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  useDisclosure,
  useToast,
  Select,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CalendarHomePage = () => {
  const DragDropCalendar = withDragAndDrop(Calendar);
  let userEvents = useSelector((store) => store.AppReducer.events);
  const checkPoints = useSelector((store) => store.AppReducer.checkPoint);
  const [checkedUserId, setCheckedUserId] = useState("");

  userEvents?.forEach((item) => {
    item.start = new Date(item.start);
    item.end = new Date(item.end);
  });



  if (userEvents.length > 0) {
    userEvents = userEvents.filter((item) => item.userID === localStorage.getItem("userEmail"));
  }

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("00:00:00");
  const [endTime, setEndTime] = useState("00:00:00");
  const [selectedEvent, setSelectedEvent] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [amPm, setAmPm] = useState("AM");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const toast = useToast();

  const localizer = momentLocalizer(moment);

  useEffect(() => {
    if (userEvents.length === 0) {
      dispatch(getEvents());
    }
  }, [dispatch, userEvents.length]);


  useEffect(() => {
    checkPoints.length > 0 &&
      checkPoints.map((elem) => {
        if (elem.checkValidate === true) {
          setCheckedUserId(elem.mailID);
        }
      });
  }, [checkPoints.length]);

  useEffect(() => {
    if (checkPoints.length === 0) {
      dispatch(getCheckPoint());
    }
  }, [dispatch, checkPoints.length]);

  const clearAllFormFields = () => {
    setTitle("");
    setStartDate("");
    setEndDate("");
    setStartTime("");
    setEndTime("");
    setShowDeleteBtn(false);
    setAmPm("");
  };

  const handleAddEvent = (newEvent) => {
    // console.log("handleAddEvent:", newEvent);
    dispatch(addEvents(newEvent)).then(() => dispatch(getEvents()));
  };

  const handleUpdateEvent = (id, updateEventobj) => {
    console.log(id, updateEventobj);
    if(updateEventobj.title !== "" && 
    updateEventobj.start !== "" && 
    updateEventobj.end !== "" &&
    updateEventobj.start_time !== "" &&
    updateEventobj.end_time !== "" 
    ){
      dispatch(updateEvent(id, updateEventobj)).then(() => dispatch(getEvents()));
    }
    else{
      toast({
        description: "All fields are required !",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
    clearAllFormFields();
  };

  const handleDeletingEvent = (id) => {
    dispatch(deleteEvent(id)).then(() => dispatch(getEvents()));
  };

  const onEventResize = (data) => {
    const { event, start, end } = data;
    const { id } = event;
    let newEvent = { ...event, start, end };
    handleUpdateEvent(id, newEvent);
  };

  const onEventDrop = ({ event, start, end }) => {
    const { id } = event;
    let newEvent = { ...event, start, end };
    handleUpdateEvent(id, newEvent);
  };

  const handleSelectEvent = (event) => {
    // console.log("handleSelectEvent:", event);
    setSelectedEvent(event);
    let { start, end } = event;
    start = new Date(start);
    end = new Date(end);

    const startMonth = start.getMonth() + 1 < 10 ? `0${start.getMonth() + 1}` : start.getMonth() + 1;
    const startDt = start.getDate() + 1 < 10 ? `0${start.getDate()}` : start.getDate();
    const endMonth = end.getMonth() + 1 < 10 ? `0${end.getMonth() + 1}` : end.getMonth() + 1;
    const endDt = end.getDate() + 1 < 10 ? `0${end.getDate()}` : end.getDate();

    setStartDate(`${start.getFullYear()}-${startMonth}-${startDt}`);
    setEndDate(`${end.getFullYear()}-${endMonth}-${endDt}`);
    setStartTime(`${startTime}${amPm}`);
    setEndTime(`${endTime}${amPm}`);
    setTitle(event.title);
    setOpenModal(true);
    setShowDeleteBtn(true);
  };

  const handleSelectSlot = (event) => {
    setSelectedEvent(undefined);
    const { start, end } = event;
    // console.log("handleSelectSlot:",event);
    const startMonth = start.getMonth() + 1 < 10 ? `0${start.getMonth() + 1}` : start.getMonth() + 1;
    const startDt = start.getDate() + 1 < 10 ? `0${start.getDate()}` : start.getDate();
    const endMonth = end.getMonth() + 1 < 10 ? `0${end.getMonth() + 1}` : end.getMonth() + 1;
    const endDt = end.getDate() + 1 < 10 ? `0${end.getDate()}` : end.getDate();

    setStartDate(`${start.getFullYear()}-${startMonth}-${startDt}`);
    setEndDate(`${end.getFullYear()}-${endMonth}-${endDt}`);
    setStartTime(`${startTime}${amPm}`);
    setEndTime(`${endTime}${amPm}`);
    setOpenModal(true);
  };

  const handleSubmitEvent = () => {
    // console.log("Selected event:-", selectedEvent);

    if (selectedEvent.id) {
      console.log(123);
      const id = selectedEvent.id;
      var time1 = selectedEvent.start_time;
      var time2 = selectedEvent.end_time;
      const updateEvent = {
        title: title,
        start: new Date(startDate),
        end: new Date(endDate),
        start_time: (`${startTime}${amPm}`) || time1,
        end_time: (`${endTime}${amPm}`) || time2,
        description: "",
        userID: localStorage.getItem("userEmail"),
      };
      handleUpdateEvent(id, updateEvent);
    }
    else {
      console.log(456);

      if (title !== "" && startDate !== "" && endDate !== "" && startTime !== "" && endTime !== "") {
        const newEvent = {
          title: title,
          start: new Date(startDate),
          end: new Date(endDate),
          start_time: (`${startTime}${amPm}`),
          end_time: (`${endTime}${amPm}`),
          description: "",
          userID: localStorage.getItem("userEmail"),
        };
        handleAddEvent(newEvent);
      } 
      else {
        toast({
          description: "All fields are required !",
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    }
    setOpenModal(false);
    clearAllFormFields();
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      const id = selectedEvent.id;
      handleDeletingEvent(id);
      setOpenModal(false);
      clearAllFormFields();
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "2rem auto",
        }}
      >
        <Link to="/show_all_eventsfor_user">
          <button
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
            Show All Events
          </button>
        </Link>

        <p
          style={{
            color: "#3174ad",
            margin: 0,
            fontSize: 32,
            fontWeight: "bold",
            lineHeight: 1.5,
            letterSpacing: 0.5,
          }}
        >
          Calender Events
        </p>

        <button
          style={{
            padding: "0.7rem 1rem",
            borderRadius: "5px",
            outline: "none",
            border: "none",
            backgroundColor: "#3174ad",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setOpenModal(true)}
        >
          Create Event
        </button>
      </div>

      <DragDropCalendar
        events={userEvents}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        resizable
        style={{
          height: "500px",
          width: "90%",
          margin: "0 auto",
        }}
      />
      <Modal isOpen={isOpen || openModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Event</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              setOpenModal(false);
            }}
          />
          <ModalBody padding="5%">
            {/* title  */}

            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
            </FormControl>

            {/* Start Date  */}

            <FormControl>
              <FormLabel>Start Date</FormLabel>
              <Input
                name="start-date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </FormControl>

            {/* End Date  */}

            <FormControl>
              <FormLabel>End Date</FormLabel>
              <Input
                name="end-date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <FormControl width="90%" margin="auto">
            <FormLabel>Start Time</FormLabel>
            <Input
              name="start-time"
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </FormControl>

          <FormControl width="90%" margin="auto">
            <FormLabel>End Time</FormLabel>
            <Input
              name="end-time"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </FormControl>

          <FormControl width="90%" margin="auto">
            <FormLabel>PM/AM</FormLabel>
            <Select
              value={amPm}
              onChange={(e) => setAmPm(e.target.value)}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </Select>
          </FormControl>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleSubmitEvent()}
            >
              {showDeleteBtn ? "Edit" : "Submit"}
            </Button>

            {showDeleteBtn && (
              <>
                <Button variant="ghost" onClick={onOpen} bg={"red.400"}>
                  Delete
                </Button>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Delete Event
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => {
                            onClose();
                            handleDeleteEvent();
                          }}
                          ml={3}
                        >
                          Delete
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CalendarHomePage;