import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { LpTaskCard } from "../Components/Todos/LpTaskCard";
import { getTasks } from "../Redux/AppContext/actions";

const LpTodoHomePage = () => {

    const tasks = useSelector((store) => store.AppReducer.tasks);
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();


    const filterByParamTags = (task) => {
        const tagsInTheParams = searchParams.getAll('tags');
        if (tagsInTheParams.includes('All') || tagsInTheParams.length === 0) {
            return task;
        };
        const data = task.tags.filter((elem) => {
            if (tagsInTheParams.includes(elem)) {
                return true;
            }
            return false;
        });
        if (data.length) {
            return task;
        };
        return false;
    };



    useEffect(() => {
        if (tasks.length === 0) {
            dispatch(getTasks());
        };
    }, [dispatch, tasks.length]);


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
                {/* PENDING TASKS  */}
                <Box
                    width="32%"
                    height="auto"
                    border="1px solid rgba(0,0,0,0.3)"
                >
                    <Box backgroundColor="red.100">
                        <Text
                            textAlign="center"
                            fontWeight="bold"
                        >
                            PENDING
                        </Text>
                    </Box>
                    {/* PROGRESSED TASKS  */}
                    <Box>
                        {tasks.length > 0 && 
                        tasks.filter(item => item.task_status === "todo" && item.userID === "userID")
                        .filter(filterByParamTags)
                        .map((item) => {
                            return <LpTaskCard key={item.id} {...item} colorScheme="red" />
                        })}
                    </Box>
                </Box>


                <Box
                    width="32%"
                    height="auto"
                    border="1px solid rgba(0,0,0,0.3)"
                >
                    <Box backgroundColor="yellow.100">
                        <Text
                            textAlign="center"
                            fontWeight="bold"
                        >
                            PROGRESS...
                        </Text>
                    </Box>
                    <Box>
                        {tasks.length > 0 && 
                        tasks.filter(item => item.task_status === "progress" && item.userID === "userID")
                        .filter(filterByParamTags)
                        .map((item) => {
                            return <LpTaskCard key={item.id} {...item} colorScheme="yellow" />
                        })}
                    </Box>
                </Box>

                {/* TASKS DONE  */}
                <Box
                    width="32%"
                    height="auto"
                    border="1px solid rgba(0,0,0,0.3)"
                >
                    <Box backgroundColor="teal.100">
                        <Text
                            textAlign="center"
                            fontWeight="bold"
                        >
                            DONE
                        </Text>
                    </Box>
                    <Box>
                        {tasks.length > 0 && 
                        tasks.filter(item => item.task_status === "done" && item.userID === "userID")
                        .filter(filterByParamTags)
                        .map((item) => {
                            return <LpTaskCard key={item.id} {...item} colorScheme="green" />
                        })}
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
};

export { LpTodoHomePage };