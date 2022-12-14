import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Button,
    Box,
    Editable,
    EditablePreview,
    EditableTextarea,
    FormControl,
    FormLabel,
    Input,
    Menu,
    MenuButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Select,
    MenuList,
    MenuOptionGroup,
    ModalFooter,
    MenuItemOption,
    useToast
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createTasks, getTasks } from "../Redux/AppContext/actions";

const initialTaskState = {
    title: "",
    description: "default description",
    task_status: "todo",
    tags: ["Others"],
    subTasks: [],
    userID: "",
    isValidate: false,
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'title':
            return {
                ...state,
                title: action.payload,
            };

        case 'description':
            return {
                ...state,
                description: action.payload,
            };

        case 'task_status':
            return {
                ...state,
                task_status: action.payload,
            };

        case 'tags':
            return {
                ...state,
                tags: action.payload,
            };

        case 'subTasks':
            return {
                ...state,
                subTasks: action.payload,
            };
        case 'userID':
            return {
                ...state,
                userID: action.payload,
            };
        default:
            return state;
    };
};

const LpCreateTask = ({ isOpen, onClose }) => {

    const [taskState, setTaskState] = useReducer(taskReducer, initialTaskState);
    const tagList = useSelector((state) => state.AppReducer.tags);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const toast = useToast();


    const createTaskHandler = () => {
        dispatch(createTasks(taskState))
        .then(() => dispatch(getTasks()))
        .then(() => toast({
            title: 'Task Created.',
            description: "We've created your task for you.",
            status: 'success',
            duration: 2000,
            position: "top",
            isClosable: true,
          }))
        .then(() => {
            if(location.pathname !== "/todohomepage"){
                navigate("/todohomepage");
                onClose();
            }
            else{
                onClose();
            };
        });
    };


    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create new Task</ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                    {/* title  */}

                    <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input
                            placeholder="Title"
                            value={taskState.title}
                            onChange={(e) => setTaskState({ type: 'title', payload: e.target.value })}
                        />
                    </FormControl>

                    {/* UserId  */}

                    <FormControl>
                        <FormLabel>User-ID</FormLabel>
                        <Input
                            placeholder="User-ID"
                            value={taskState.userID}
                            onChange={(e) => setTaskState({ type: 'userID', payload: e.target.value })}
                        />
                    </FormControl>

                    {/* Description  */}

                    <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Editable minHeight="65px" defaultValue={taskState.description}>
                            <EditablePreview />
                            <EditableTextarea
                                value={taskState.description}
                                onChange={(e) => setTaskState({ type: 'description', payload: e.target.value })}
                            ></EditableTextarea>
                        </Editable>
                    </FormControl>

                    {/* Task Status  */}

                    <Box mb="0.5rem">
                        <FormLabel>Task Status</FormLabel>
                        <Select
                            placeholder="Select Status"
                            value={taskState.task_status}
                            onChange={(e) => setTaskState({ type: 'task_status', payload: e.target.value })}
                        >
                            <option value="todo">Todo</option>
                            <option value="progress">In-Progress</option>
                            <option value="done">Done</option>
                        </Select>
                    </Box>

                    {/* Tags  */}

                    <Box mb="0.5rem">
                        <FormLabel>Tags</FormLabel>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Select Tag
                            </MenuButton>
                            <MenuList>
                                <MenuOptionGroup
                                    title="Tags"
                                    value={taskState.tags}
                                    onChange={value => setTaskState({ type: 'tags', payload: value })}
                                    type="checkbox"
                                >
                                    {tagList.length > 0 && tagList.map((item) => {
                                        return (
                                            <MenuItemOption value={item.tag} key={item.tag}>{item.tag}</MenuItemOption>
                                        );
                                    })}
                                </MenuOptionGroup>
                            </MenuList>
                        </Menu>
                    </Box>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost' onClick={createTaskHandler}>Create Task</Button>
                </ModalFooter>

            </ModalContent>
        </Modal>
    )
};

export { LpCreateTask };
