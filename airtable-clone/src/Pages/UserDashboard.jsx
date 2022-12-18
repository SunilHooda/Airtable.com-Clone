import { Box, Flex, Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const UserDashboard = () => {
  const [isLargerThan680] = useMediaQuery("(min-width: 680px)");

  return (
    <Box>
      <Flex direction={"column"}>
        <h1
          style={{
            color: "#3174ad",
            margin: 0,
            fontSize: 32,
            fontWeight: "bold",
            lineHeight: 1.5,
            letterSpacing: 0.5,
          }}
        >
          User DashBoard
        </h1>
        <Stack
          display={"flex"}
          flexDirection={isLargerThan680 ? "row" : "column"}
          justifyContent={"space-evenly"}
          alignItems="center"
          padding={5}
        >
          <Link to={"/todohomepage"}>
            <Box
              width={280}
              height={240}
              margin="auto"
              border={"1px solid grey"}
              fontSize={36}
              justifyContent={"center"}
              alignItems={"center"}
              paddingTop={20}
              fontWeight="bold"
              lineHeight={1.5}
              textAlign={"center"}
              letterSpacing={0.5}
              borderRadius={50}
              textShadow="2px 2px 3px black,3px 3px 4px #00FFFF"
              boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            >
              User Todos
            </Box>
          </Link>
          <Link to={"/calendarhomepage"}>
            <Box
              width={280}
              height={240}
              margin="auto"
              border={"1px solid grey"}
              fontSize={36}
              justify={"center"}
              align={"center"}
              paddingTop={20}
              fontWeight="bold"
              lineHeight={1.5}
              letterSpacing={0.5}
              textAlign={"center"}
              borderRadius={50}
              textShadow="2px 2px 3px black,3px 3px 4px #00FFFF"
              boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            >
              Calendar Events
            </Box>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};
