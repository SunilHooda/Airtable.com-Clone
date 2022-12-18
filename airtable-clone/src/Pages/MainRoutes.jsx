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
import PR_Resourse from "./PR_Resourse";
import PR_Single from "./PR_Single";
import PR_Singletwo from "./PR_Singletwo";
import PR_Singlethree from "./PR_Singlethree";
import PR_Singlefour from "./PR_Singlefour";
import PR_Singlefive from "./PR_Singlefive";
import PR_Singlesix from "./PR_Singlesix";

import { UserDashboard } from "./UserDashboard";
import CalendarHomePage from "../Components/Calendar/CalendarHomePage";
import AllEvents from "./AllEvents";

import { CombinedPage } from "./CombinedPage";
import PaymentPro from "../Components/paymentproNew";
import ThreeTierPricing from "../Components/PricingNew";
import PricingModal from "../Components/pricingModalNew";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profileEdit" element={<ProfileEdit />} />
      <Route path="/payment"  element={<PaymentPro />}  />
      <Route path="/pricing"  element={<ThreeTierPricing />} />
      <Route path="/pricingmodal" element={<PricingModal />}/>

      <Route path="/resourse" element={<PR_Resourse />} />
      <Route path="/singleresourse" element={<PR_Single />} />
      <Route path="/singletworesourse" element={<PR_Singletwo />} />
      <Route path="/singlethreeresourse" element={<PR_Singlethree />} />
      <Route path="/singlefourresourse" element={<PR_Singlefour />} />
      <Route path="/singlefiveresourse" element={<PR_Singlefive />} />
      <Route path="/singlesixresourse" element={<PR_Singlesix />} />
      

      <Route path="/combinedpage" element={<CombinedPage />} />


      <Route
        path="/todohomepage"
        element={

            
            <Stack backgroundColor="gray.200"  direction={{base: "column", sm: "colum", md: "row", lg: "row", xl: "row"}}>
              <LpSidebar />
              <LpTodoHomePage />
            </Stack>

        }
      />
      <Route
        path="/task/:id"
        element={

            <Stack backgroundColor="gray.200" direction={{base: "column", sm: "column", md: "row", lg: "row", xl: "row"}}>
              <LpSidebar />
              <LpEditPage />
            </Stack>

        }
      />
      <Route path="/calendarhomepage" element={<CalendarHomePage />} />

      <Route path="/userdashboard" element={<UserDashboard />} />

      <Route path="/alluserevents" element={<AllEvents />} />
    </Routes>
  );
};
export { MainRoutes };
