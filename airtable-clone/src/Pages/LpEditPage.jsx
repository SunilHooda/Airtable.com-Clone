import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Editable,
    EditablePreview,
    EditableTextarea,
    Flex,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteIcon } from "@chakra-ui/icons";
import { 
    addSubtasks, 
    addTags, 
    deleteSubtasks, 
    getTagsList, 
    getTasks, 
    updateSubtasksList, 
    updateTasks 
} from "../Redux/AppContext/actions";
import { LpCreateTask } from "../Modals/LpCreateTask";


const date = new Date().toLocaleDateString();


const LpEditPage = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { id } = useParams();
    const tasks = useSelector((store) => store.AppReducer.tasks);
    const tagLists = useSelector((store) => store.AppReducer.tags);

    const dispatch = useDispatch();
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskStatus, setTaskStatus] = useState('');
    const [taskTags, setTaskTags] = useState([]);
    const [subTasks, setSubTasks] = useState([]);
    const [checkBox, setCheckBox] = useState([]);
    const [currentSubTask, setCurrrentSubTask] = useState("");
    const [newTag, setNewTag] = useState('');
 
    
    const deleteSubTaskHandler = (title) => {
        let newSubTasksTitle = subTasks.filter((item) => item.subTaskTitle !== title);
        dispatch(deleteSubtasks(id, {subTasks: newSubTasksTitle}))
        .then(() => dispatch(getTasks()));
        console.log("newSubTasksTitle:" , newSubTasksTitle)
    }


    const addSubTask = (e) => {
        e.preventDefault();
        if(currentSubTask){
            const newSubTask = [
                ...subTasks,
                { subTaskTitle: currentSubTask, status: false }
            ];

            dispatch(addSubtasks(id, {subTasks: newSubTask}))
            .then(() => dispatch(getTasks()))
            .then(() => setCurrrentSubTask(""))
        }
    };


    const createTagHandler = () => {
        if(newTag){
            dispatch(addTags(newTag)).then(() => dispatch(getTagsList()));
        };
    };


    const updateFunc = (identifier, value) => {
        if(identifier === "textAndDescription"){
            dispatch(updateTasks(id,{
                title: taskTitle,
                description: taskDescription
            })).then(() => dispatch(getTasks()));
            console.log("taskDescription-1: ", taskDescription);
        }
        else if(identifier === "taskStatus"){
            dispatch(updateTasks(id,{
                task_status: value,
            })).then(() => dispatch(getTasks()));
        }
        else if(identifier === "taskTags"){
            dispatch(updateTasks(id,{
                tags: value,
            })).then(() => dispatch(getTasks()));
        }
        // console.log("taskDescription-2: ", taskDescription);
    };


    const updateSubTaskStatus = (value) => {
        const newSubTaskData = subTasks.map((item) => {
            if (value.includes(item.subTaskTitle)) {
                return { ...item, status: true };
            }
            else{
                return { ...item, status: false };
            }
        });
        dispatch(updateSubtasksList(id, { subTasks: newSubTaskData }))
        .then(() => {
            dispatch(getTasks());
        });
    };


    useEffect(() => {
        if(tasks.length === 0){
            dispatch(getTasks());
        }
    },[dispatch, tasks.length]);



    useEffect(() => {
        if (tasks) {

            const currentTask = tasks.find(item => item.id === id);

            if (currentTask) {
                setTaskTitle(currentTask.title);
                setTaskDescription(currentTask.description);
                setTaskStatus(currentTask.task_status);
                setTaskTags(currentTask.tags);
                setSubTasks(currentTask.subTasks);
                let data = currentTask.subTasks.filter(item => {
                    return item.status && item.subTaskTitle
                }).map(item => item.subTaskTitle);
                setCheckBox(data);
            }
        }
    }, [id, tasks]);


    return (
        <Box
            width="100%"
            paddingTop="1rem"
            border="1px solid rgba(0,0,0,0.3)"
        >
            <Flex
                direction="row"
                justifyContent="space-around"
            >
                <Flex
                    width="32%"
                    padding="3px 15px, 0px, 3px"
                    height="fit-content"
                    direction="column"
                    justifyContent="space-between"
                    overflow="auto"
                    border="1px solid rbga(0,0,0,0.1)"
                    borderRadius="5px"
                >
                    <Box>
                        <Stack direction="column">
                            <Input
                                placeholder="title"
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                            />
                            <Editable value={taskDescription}>
                                <EditablePreview />
                                <EditableTextarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                            </Editable>
                            <Button onClick={() => {
                                updateFunc('textAndDescription');
                            }}>Update</Button>
                        </Stack>
                    </Box>
                    <Box>
                        <Heading as="h5" size="md" padding="0.5rem 0">
                            Status
                        </Heading>
                        <RadioGroup 
                            value={taskStatus} 
                            onChange={(value) => {
                                setTaskStatus(value);
                                updateFunc("taskStatus", value);
                            }}>
                            <Stack direction="column">
                                <Radio value="todo">Todo</Radio>
                                <Radio value="progress">In-progress</Radio>
                                <Radio value="done">Done</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Box>
                        <Heading as="h5" size="md" padding="0.5rem 0">
                            Tags
                        </Heading>
                        <Flex>
                            <Input 
                                value={newTag}
                                placeholder="Create New Tag"
                                onChange={(e) => setNewTag(e.target.value)}
                                />
                            <Button onClick={createTagHandler} marginLeft="0.5rem">Create</Button>
                        </Flex>
                        <CheckboxGroup 
                            colorScheme="green" 
                            value={taskTags} 
                            onChange={(value) => {
                                setTaskTags(value);
                                updateFunc("taskTags", value);
                            }}>
                            <Stack spacing={[1, 5]} direction="column">
                                {tagLists.length > 0 && tagLists.map((item) => {
                                    return (
                                        <Checkbox key={item.id} value={`${item.tag}`}>{item.tag}</Checkbox>
                                    );
                                })}
                            </Stack>
                        </CheckboxGroup>
                    </Box>
                </Flex>


                {/* Add new subtasks  */}


                <Box
                    width="32%"
                    padding="0.25rem"
                    paddingRight="15px"
                    height="fit-content"
                    overflow="auto"
                    border="1px solid rbga(0,0,0,0.1)"
                    borderRadius="5px"
                >
                    <form onSubmit={addSubTask}>
                        <Flex>
                            <Input 
                                placeholder="Add new subtask" 
                                value={currentSubTask}
                                onChange={(e) => {
                                    setCurrrentSubTask(e.target.value);
                                }}
                            />
                            <Button ml="0.5rem" type="submit">Add</Button>
                        </Flex>
                    </form>
                    <Flex direction="column" p="1rem" gap="1rem">
                        <CheckboxGroup 
                            value={checkBox} 
                            onChange={(value) => {
                                setCheckBox(value);
                                updateSubTaskStatus(value);
                            }}>
                            {subTasks.length && subTasks.map((item, index) => (
                                <Flex key={index} justifyContent="space-between" alignItems="center">
                                    <Checkbox value={item.subTaskTitle}>{item.subTaskTitle}</Checkbox>
                                    <DeleteIcon onClick={() => deleteSubTaskHandler(item.subTaskTitle)}/>
                                </Flex>
                            ))}
                        </CheckboxGroup>
                    </Flex>
                </Box>


                {/* Create new tasks  */}


                <Box
                    border="1px solid rbga(0,0,0,0.1)"
                    borderRadius="5px"
                    width="32%"
                    height="auto"
                    textAlign="center"
                >
                    <Flex justifyContent="center" marginTop="1rem">
                        <Text>Date: </Text>
                        <Text margin="auto 0" fontWeight="bold">{date}</Text>
                    </Flex>
                    <Box m="1rem">
                        <Button onClick={onOpen}>Create new Task</Button>
                    </Box>
                    <LpCreateTask isOpen={isOpen} onClose={onClose}/>
                </Box>
            </Flex>
        </Box>
    );
};

export { LpEditPage };