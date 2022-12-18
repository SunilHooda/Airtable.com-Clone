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
    userEvents = userEvents.filter((item) => item.userID === checkedUserId);
  }

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedEvent, setSelectedEvent] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

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

  // checking point for validate user for todos

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

  const clearAllFormFields = () => {
    setTitle("");
    setStartDate("");
    setEndDate("");
    setShowDeleteBtn(false);
  };

  const handleUpdateEvent = (id, newEvent) => {
    dispatch(updateEvent(id, newEvent)).then(() => dispatch(getEvents()));
  };

  const handleAddEvent = (newEvent) => {
    dispatch(addEvents(newEvent)).then(() => dispatch(getEvents()));
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
    setSelectedEvent(event);
    let { start, end } = event;
    start = new Date(start);
    end = new Date(end);

    const startMonth =
      start.getMonth() + 1 < 10
        ? `0${start.getMonth() + 1}`
        : start.getMonth() + 1;
    const startDt =
      start.getDate() + 1 < 10 ? `0${start.getDate()}` : start.getDate();

    const endMonth =
      end.getMonth() + 1 < 10 ? `0${end.getMonth() + 1}` : end.getMonth() + 1;
    const endDt = end.getDate() + 1 < 10 ? `0${end.getDate()}` : end.getDate();

    setStartDate(`${start.getFullYear()}-${startMonth}-${startDt}`);
    setEndDate(`${end.getFullYear()}-${endMonth}-${endDt}`);
    setTitle(event.title);
    setOpenModal(true);
    setShowDeleteBtn(true);
  };

  const handleSelectSlot = (event) => {
    const { start, end } = event;

    const startMonth =
      start.getMonth() + 1 < 10
        ? `0${start.getMonth() + 1}`
        : start.getMonth() + 1;
    const startDt =
      start.getDate() + 1 < 10 ? `0${start.getDate()}` : start.getDate();

    const endMonth =
      end.getMonth() + 1 < 10 ? `0${end.getMonth() + 1}` : end.getMonth() + 1;
    const endDt = end.getDate() + 1 < 10 ? `0${end.getDate()}` : end.getDate();

    setStartDate(`${start.getFullYear()}-${startMonth}-${startDt}`);
    setEndDate(`${end.getFullYear()}-${endMonth}-${endDt}`);
    setOpenModal(true);
  };

  const handleSubmitEvent = () => {
    if (selectedEvent) {
      const id = selectedEvent.id;
      const newEvent = {
        title: title,
        start: new Date(startDate),
        end: new Date(endDate),
        description: "",
      };
      handleUpdateEvent(id, newEvent);
    } else {
      if (!title || !startDate || !endDate) {
        toast({
          description: "All fields are required !",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
        return;
      }
      const newEvent = {
        title: title,
        start: new Date(startDate),
        end: new Date(endDate),
        description: "",
      };
      handleAddEvent(newEvent);
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
        <Link to={"/alluserevents"}>
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
          <ModalBody>
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
