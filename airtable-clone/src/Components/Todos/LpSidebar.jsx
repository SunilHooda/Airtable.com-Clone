import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getTagsList } from "../../Redux/AppContext/actions";
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

  // useEffect(() => {
  //     if(tasks.length === 0){

  //     }
  // });

  useEffect(() => {
    if (tagLists.length === 0) {
      dispatch(getTagsList());
    }
  }, [dispatch, tagLists.length]);

  return (
    <Box
      border="1px solid rgba(0,0,0,0.4)"
      width="25%"
      height="auto"
      marginTop="1rem"
      padding="0.25rem"
    >
      <Flex direction="column" height="inherit" justifyContent="space-evenly">
        <Box minHeight="fit-content" border="1px solid rgba(0,0,0,0.3)">
          <Flex direction="column" height="fit-content">
            <Box height="fit-content" bg="purple.100">
              <Box m="1rem">
                <Button onClick={onOpen}>Create new Task</Button>
              </Box>
              <LpCreateTask isOpen={isOpen} onClose={onClose} />
            </Box>

            <Box
              cursor="pointer"
              padding="5%"
              boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
              onClick={() => {
                handleTagChange("All");
              }}
              backgroundColor={
                selectTags.includes("All") ? "blue.300" : "blue.100"
              }
              color={selectTags.includes("All") ? "white" : "black"}
            >
              <Flex>
                <Text>All ➛ </Text>
                <Text>{tasks.length}</Text>
              </Flex>
            </Box>
            {tagLists.length > 0 &&
              tagLists.map((item) => {
                return (
                  <Box
                    cursor="pointer"
                    key={item.id}
                    padding="5%"
                    boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                    onClick={() => {
                      handleTagChange(item.tag);
                    }}
                    backgroundColor={
                      selectTags.includes(item.tag) ? "red.300" : "red.100"
                    }
                    color={selectTags.includes(item.tag) ? "white" : "black"}
                  >
                    <Flex>
                      <Text>{item.tag} ➛ </Text>
                      <Text>
                        {
                          tasks.filter((elem) => elem.tags.includes(item.tag))
                            .length
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
