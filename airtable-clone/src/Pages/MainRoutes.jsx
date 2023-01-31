import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Login from "./Login/Login";
import ProfileEdit from "./ProfileEditPage";
import SignUp from "./SignUp";
import { Stack } from "@chakra-ui/react";
import { LpSidebar } from "../Components/Todos/LpSidebar";
import { LpTodoHomePage } from "./LpTodoHomePage";
import { LpEditPage } from "./LpEditPage";
import ResoursePage from "./ResoursePage";
import FirstOpenablePage from "./FirstOpenablePage";
import SecondOpenablePageSection from "./SecondOpenablePageSection";
import ThirdOpenablePageSection from "./ThirdOpenablePageSection";
import FourthOpenablePageSection from "./FourthOpenablePageSection";
import PR_Singlefive from "./FifthOpenablePageSection";
import PR_Singlesix from "./SixthOpenablePageSection";
import { UserDashboard } from "./UserDashboard";
import CalendarHomePage from "../Components/Calendar/CalendarHomePage";
import AllEvents from "./AllEvents";
import { CombinedPage } from "./CombinedPage";
import AdminDashboard from "./AdminDashboard";
import DSingleBook from "../Components/Admin/DSingleBook";
import PaymentPro from "../Components/paymentproNew";
import ThreeTierPricing from "../Components/PricingNew";
import PricingModal from "../Components/pricingModalNew";
import Overview from "./OverviewER";
import { Product } from "./ProductNew";
import PrivateRoute from "../Routes/PriveteRoute";
import { EventsGallary } from "../Components/Calendar/EventsGallary";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admindashboard"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/profileEdit"
        element={
          <PrivateRoute>
            <ProfileEdit />
          </PrivateRoute>
        }
      />
      <Route
        path="/users/:id"
        element={
          <PrivateRoute>
            <DSingleBook />
          </PrivateRoute>
        }
      />
      <Route path="/enterprises" element={<Overview />} />
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <PaymentPro />
          </PrivateRoute>
        }
      />
      <Route path="/pricing" element={<ThreeTierPricing />} />
      <Route path="/pricingmodal" element={<PricingModal />} />
      <Route path="/featuresoverview" element={<Product />} />
      <Route path="/resourse" element={<ResoursePage />} />
      <Route path="/singleresourse" element={<FirstOpenablePage />} />
      <Route path="/singletworesourse" element={<SecondOpenablePageSection />} />
      <Route path="/singlethreeresourse" element={<ThirdOpenablePageSection />} />
      <Route path="/singlefourresourse" element={<FourthOpenablePageSection />} />
      <Route path="/singlefiveresourse" element={<PR_Singlefive />} />
      <Route path="/singlesixresourse" element={<PR_Singlesix />} />
      <Route path="/combinedpage" element={<CombinedPage />} />
      <Route
        path="/todohomepage"
        element={
          <PrivateRoute>
            <Stack
              backgroundColor="gray.200"
              direction={{
                base: "column",
                sm: "colum",
                md: "row",
                lg: "row",
                xl: "row",
              }}
            >
              <LpSidebar />
              <LpTodoHomePage />
            </Stack>
          </PrivateRoute>
        }
      />
      <Route
        path="/task/:id"
        element={
          <PrivateRoute>
            <Stack
              backgroundColor="gray.200"
              direction={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
            >
              <LpSidebar />
              <LpEditPage />
            </Stack>
          </PrivateRoute>
        }
      />
      <Route
        path="/show_all_eventsfor_user"
        element={
          <PrivateRoute>
            <EventsGallary />
          </PrivateRoute>
        }
      />
      <Route
        path="/calendarhomepage"
        element={
          <PrivateRoute>
            <CalendarHomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/userdashboard"
        element={
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/alluserevents"
        element={
          <PrivateRoute>
            <AllEvents />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
export { MainRoutes };
