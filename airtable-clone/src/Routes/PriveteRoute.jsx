import { useToast } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("isAuth");
  const toast = useToast();

  if (!isAuth) {
    toast({
      title: 'Login first.',
      description: "You are not loged-in.",
      status: 'warning',
      duration: 2000,
      position: "top",
      isClosable: true,
    });
    return <Navigate to="/" />;
  }
  
  return children;
}

export default PrivateRoute;