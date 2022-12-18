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
import Pricing from "../Components/Pricing";
import { Product } from "./Product";
import PricingModal from "../Components/PricingModal";
import PaymentPro from "../Components/Payment_Pro";



const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profileEdit" element={<ProfileEdit />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/product" element={<Product />} />
      <Route path="/PricingModal" element={<PricingModal />} />
      <Route path="/paymentpro" element={<PaymentPro />} />

      <Route
        path="/todohomepage"
        element={
            
            <Stack backgroundColor="gray.200"  direction={{base: "column", sm: "row", md: "row", lg: "row", xl: "row"}}>
              <LpSidebar />
              <LpTodoHomePage />
            </Stack>
        }
      />
      <Route
        path="/task/:id"
        element={
            <Stack backgroundColor="gray.200" direction={{base: "column", sm: "row", md: "row", lg: "row", xl: "row"}}>
              <LpSidebar />
              <LpEditPage />
            </Stack>
        }
      />
    </Routes>
  );
};
export { MainRoutes };
