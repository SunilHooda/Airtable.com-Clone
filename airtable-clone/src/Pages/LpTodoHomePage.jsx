import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { LpTaskCard } from "../Components/Todos/LpTaskCard";
import { getCheckPoint, getTasks } from "../Redux/AppContext/actions";

const LpTodoHomePage = () => {
   const tasks = useSelector((store) => store.AppReducer.tasks);
    const checkPoints = useSelector((store) => store.AppReducer.checkPoint);
    // console.log("checkPoints:", checkPoints);
    const [checkedUserId, setCheckedUserId] = useState("");
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const [gettododata, setGettododata] = useState(true);

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


    // checking point for validate user for todos 

    useEffect(() => {
        checkPoints.length > 0 && checkPoints.map(elem => {
            if(elem.checkValidate === true){
                // console.log(elem);
                setCheckedUserId(elem.mailID)
            }
        });
    },[checkPoints.length]);


    useEffect(() => {
        if (checkPoints.length === 0) {
            dispatch(getCheckPoint());
        };
    }, [dispatch, checkPoints.length]);


    useEffect(() => {
        if (tasks.length === 0) {
            dispatch(getTasks());
            console.log("running!")
        };
        tasks.length=0;
    }, [dispatch, tasks.length]);

   
    return (
        <Box
            width="100%"
            paddingTop="1rem"
        >
            <Flex
                direction={{base: "column", sm: "column", md: "column", lg: "row", xl: "row"}}
                justifyContent="space-around"
            >
                {/* PENDING TASKS  */}
                <Box
                    width={{base: "100%", sm: "100%", md: "100%", lg: "32%", xl: "32%"}}
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

                    <Box
                        display={{base: "grid", sm: "grid", md: "grid", lg: "flex", xl: "flex"}}
                        flexDirection="column"
                        gridTemplateColumns={{base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(1, 1fr)", xl: "repeat(1, 1fr)"}}
                    >
                        {tasks.length > 0 && 
                        tasks.filter(item =>  
                            item.task_status === "todo" && 
                            item.userID === checkedUserId) 
                            .filter(filterByParamTags)
                            .map((item) => {
                                return <LpTaskCard key={item.id} {...item} colorScheme="red" />
                            })}
                    </Box>
                </Box>


                <Box
                    width={{base: "100%", sm: "100%", md: "100%", lg: "32%", xl: "32%"}}
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
                    <Box
                        display={{base: "grid", sm: "grid", md: "grid", lg: "flex", xl: "flex"}}
                        flexDirection="column"
                        gridTemplateColumns={{base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(1, 1fr)", xl: "repeat(1, 1fr)"}}
                    >
                        {tasks.length > 0 && 
                        tasks.filter(item => 
                            item.task_status === "progress" && 
                            item.userID === checkedUserId ) // && item.isValidate === true
                            .filter(filterByParamTags)
                            .map((item) => {
                                return <LpTaskCard key={item.id} {...item} colorScheme="yellow" />
                            })}
                    </Box>
                </Box>

                {/* TASKS DONE  */}
                <Box
                    width={{base: "100%", sm: "100%", md: "100%", lg: "32%", xl: "32%"}}
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
                    <Box 
                        display={{base: "grid", sm: "grid", md: "grid", lg: "flex", xl: "flex"}}
                        flexDirection="column"
                        gridTemplateColumns={{base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(1, 1fr)", xl: "repeat(1, 1fr)"}}
                    >
                        {tasks.length > 0 && 
                        tasks.filter(item => 
                            item.task_status === "done" && 
                            item.userID === checkedUserId)
                            .filter(filterByParamTags)
                            .map((item) => {
                                return <LpTaskCard key={item.id} {...item} colorScheme="green" />
                            })}
                    </Box>
                </Box>
            </Flex>

     
    </Box>
  );
};

export { LpTodoHomePage };

