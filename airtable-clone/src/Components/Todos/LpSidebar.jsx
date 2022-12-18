import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCheckPoint, getTagsList } from "../../Redux/AppContext/actions";
import { useSearchParams } from "react-router-dom";
import { LpCreateTask } from "../../Modals/LpCreateTask";

const LpSidebar = () => {
  const dispatch = useDispatch();
  const tagLists = useSelector((store) => store.AppReducer.tags);
  const tasks = useSelector((store) => store.AppReducer.tasks);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectTags, setSelectTags] = useState(
    searchParams.getAll("tags") || []
  );
  const [totalTask, setTotalTask] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
    const checkPoints = useSelector((store) => store.AppReducer.checkPoint);
    const [checkedUserId, setCheckedUserId] = useState("");
    // console.log("checkPoints:", checkPoints);
    // console.log("checkeduserid:", checkedUserId);


  const handleTagChange = (value) => {
    let newTags = [...selectTags];
    if (selectTags.includes(value)) {
      newTags.splice(newTags.indexOf(value), 1);
    } else {
      newTags.push(value);
    }
    setSelectTags(newTags);
    setSearchParams({ tags: newTags });
  };

   useEffect(() => {
        checkPoints.length > 0 && checkPoints.map(elem => {
            if(elem.checkValidate === true){
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
    if (tagLists.length === 0) {
      dispatch(getTagsList());
    }
  }, [dispatch, tagLists.length]);

    return (
        <Box
            width={{base: "90%", sm: "80%", md: "25%", lg: "25%", xl: "25%"}}
            height="auto"
            margin="auto"
            marginTop="1rem"
            padding="0.25rem"
        >
            <Flex
                direction="column"
                height="inherit"
                justifyContent="space-evenly"
            >
                <Box
                    minHeight="fit-content"
                    border="1px solid gray.200"
                >
                    <Flex direction="column" height="fit-content">
                        
                        <Box height="fit-content" padding="3%"  width="auto">
                            <Box>
                                <Button backgroundColor="blue.500" _hover={{color: "black", backgroundColor: "gray.100"}} color="white" fontSize={{base: "17px", sm:"18px", md: "13px", lg: "17px", xl: "20px"}} onClick={onOpen}>Create new Task</Button>
                            </Box>
                            <LpCreateTask isOpen={isOpen} onClose={onClose} />
                        </Box>

                        <Box
                            cursor="pointer"
                            borderRadius="10px"
                            margin={{base: "0.5%", sm: "0.5%", md: "2%", lg: "2%", xl: "2%"}}
                            padding={{base: "2%", sm: "1%", md: "5%", lg: "5%", xl: "5%"}}
                            boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                            onClick={() => {
                                handleTagChange("All");
                            }}
                            backgroundColor={
                                selectTags.includes("All") ? "blue.300" : "blue.100"
                            }
                            color={
                                selectTags.includes("All") ? "white" : "black"
                            }
                        >
                            <Flex>
                                <Text paddingLeft="5%">All</Text>
                               
                            </Flex>
                        </Box>
                        {tagLists.length > 0 &&
                            tagLists.map((item) => {
                                return (
                                    <Box
                                        cursor="pointer"
                                        margin={{base: "0.5%", sm: "0.5%", md: "2%", lg: "2%", xl: "2%"}}
                                        key={item.id}
                                        borderRadius="10px"
                                        padding={{base: "1%", sm: "1%", md: "5%", lg: "5%", xl: "5%"}}
                                        boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                                        onClick={() => {
                                            handleTagChange(item.tag);
                                        }}
                                        backgroundColor={
                                            selectTags.includes(item.tag) ? "red.300" : "red.100"
                                        }
                                        color={
                                            selectTags.includes(item.tag) ? "white" : "black"
                                        }
                                    >
                                        <Flex>
                                            <Text paddingLeft="5%">{item.tag} ➛ </Text>
                                            <Text>
                                                {tasks.filter((elem) => 
                                                    elem.tags.includes(
                                                    elem.userID === checkedUserId && 
                                                    item.tag 
                                                    )).length
                                                }
                                            </Text>
                                        </Flex>
                                    </Box>
                                );
                            })}

                    </Flex>
                  </Box>
             
      </Flex>
    </Box>
  );
};

export { LpSidebar };
