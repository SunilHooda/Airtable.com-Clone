import React from "react";
import { Box, Container, Flex, Stack, useMediaQuery } from "@chakra-ui/react";
import DFilterComp from "../Components/Admin/DFilterComp";
import DAdminHomePage from "../Components/Admin/DAdminHomePage";
const AdminDashboard = () => {
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");
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
          Admin DashBoard
        </h1>
        <Box
          justifyContent={"center"}
          alignItems="center"
          padding={5}
          width={"container.xl"}
        >
          <DAdminHomePage />
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;
