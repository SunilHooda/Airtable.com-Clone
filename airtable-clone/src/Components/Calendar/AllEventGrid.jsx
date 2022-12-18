import {
  Box,
  Button,
  Stack,
  Text,
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
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEvent, getEvents } from "../../Redux/AppContext/actions";

const AllEventGrid = ({ id, title, start, end, description }) => {
  const [detail, setDetail] = useState("");
  const [showDetail, setShowDetail] = useState(detail);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleUpdateEvent = (id, newEvent) => {
    dispatch(updateEvent(id, newEvent)).then(() => dispatch(getEvents()));
  };

  const handleDescription = (id) => {
    const newEvent = {
      title: title,
      start: new Date(start),
      end: new Date(end),
      description: detail,
    };
    handleUpdateEvent(id, newEvent);
    setDetail("");
  };
  return (
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
        <Text fontWeight={500} fontSize="xl" color={"#008B8B"}>
          {title}
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
        <Text fontWeight={500} fontSize="xl" color={"#008B8B"}>
          {`${start.getFullYear()}-${
            start.getMonth() + 1 < 10
              ? `0${start.getMonth() + 1}`
              : start.getMonth() + 1
          }-${
            start.getDate() + 1 < 10 ? `0${start.getDate()}` : start.getDate()
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

        <Text fontWeight={500} fontSize="xl" color={"#008B8B"}>
          {`${" "} ${end.getFullYear()}-${
            end.getMonth() + 1 < 10
              ? `0${end.getMonth() + 1}`
              : end.getMonth() + 1
          }-${end.getDate() + 1 < 10 ? `0${end.getDate()}` : end.getDate()}`}
        </Text>
      </Stack>

      {description === undefined ? null : (
        <Stack
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
          alignItems="center"
          padding={5}
        >
          <Text fontWeight={600} fontSize="xl">
            Description:
          </Text>
          <Text fontWeight={500} fontSize="xl" color={"#008B8B"}>
            {showDetail}
          </Text>
        </Stack>
      )}

      <Button margin="auto" bg={"black"} color={"blue.400"} onClick={onOpen}>
        {description === undefined ? "Add Description" : "Edit Description"}
      </Button>
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
                handleDescription(id);
                onClose();
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AllEventGrid;
