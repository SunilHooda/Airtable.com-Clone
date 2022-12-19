import {
  Badge,
  Box,
  Flex,
  Text,
  Stack,
  CheckboxGroup,
  Checkbox,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTasks,
  getTasks,
  updateSubtasksList,
} from "../../Redux/AppContext/actions";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const DSingleUserPage = ({
  id,
  title,
  description,
  tags,
  subTasks,
  colorScheme,
}) => {
  const dispatch = useDispatch();

  const deleteTaskHandler = (id) => {
    dispatch(deleteTasks(id)).then(() => dispatch(getTasks()));
  };

  const [checkBox, setCheckBox] = useState(() => {
    let data = subTasks
      .filter((item) => {
        return item.status && item.subTaskTitle;
      })
      .map((item) => item.subTaskTitle);
    return data;
  });

  const updateSubTaskStatus = (value) => {
    const newSubTaskData = subTasks.map((item) => {
      if (value.includes(item.subTaskTitle)) {
        return { ...item, status: true };
      } else {
        return { ...item, status: false };
      }
    });
    dispatch(updateSubtasksList(id, { subTasks: newSubTaskData })).then(() => {
      dispatch(getTasks());
    });
  };

  return (
    <Box>
      <Box>
        <Flex>
          <Text fontWeight="bold">{title}</Text>
        </Flex>
      </Box>
      <Box>
        <Stack width="fit-content">
          {tags.length &&
            tags.map((item, index) => {
              return (
                <Badge colorScheme={colorScheme} key={index}>
                  {item}
                </Badge>
              );
            })}
        </Stack>
      </Box>
      <Box>
        <Flex>
          <Text fontWeight="500" marginTop="3%" marginBottom="3%">
            {description}
          </Text>
        </Flex>
      </Box>
      <Box display="flex" flexDirection="column">
        <CheckboxGroup
          value={checkBox}
          onChange={(value) => {
            setCheckBox(value);
            updateSubTaskStatus(value);
          }}
        >
          {subTasks.length > 0 &&
            subTasks.map((item, index) => {
              return (
                <Checkbox value={item.subTaskTitle} key={index}>
                  {item.subTaskTitle}
                </Checkbox>
              );
            })}
        </CheckboxGroup>
      </Box>
      <Box>
        <Flex padding="4%" paddingTop="7%" justifyContent="space-between">
          <Box color="blue">
            <Link to={`/task/${id}`}>
              <EditIcon cursor="pointer" />
            </Link>
          </Box>
          <Box color="red">
            <DeleteIcon
              onClick={() => deleteTaskHandler(id)}
              cursor="pointer"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export { DSingleUserPage };
