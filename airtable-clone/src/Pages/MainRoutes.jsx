import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Login from "./Login/Login";
import ProfileEdit from "./ProfileEditPage";
import SignUp from "./SignUp";
import { Stack, Container } from "@chakra-ui/react";
import { LpSidebar } from "../Components/Todos/LpSidebar";
import { LpTodoHomePage } from "./LpTodoHomePage";
import { LpEditPage } from "./LpEditPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profileEdit" element={<ProfileEdit />} />
      <Route
        path="/todohomepage"
        element={
          // <Container minWidth="100%">
            <Stack direction="row">
              <LpSidebar />
              <LpTodoHomePage />
            </Stack>
          // </Container>
        }
      />
      <Route
        path="/task/:id"
        element={
          // <Container minWidth="100%">
            <Stack direction="row">
              <LpSidebar />
              <LpEditPage />
            </Stack>
          // </Container>
        }
      />
    </Routes>
  );
};
export { MainRoutes };
