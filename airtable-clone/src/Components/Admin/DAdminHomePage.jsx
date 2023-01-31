import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/AdminContext/action";
import { useMediaQuery } from '@chakra-ui/react'
import styled from "styled-components";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import DFilterComp from "./DFilterComp";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./DUserCart.css";
import DUserCart from "./DUserCart";

const DAdminHomePage = () => {
  const users = useSelector((store) => store.AdminReducer.users);
  const dispatch = useDispatch();
  const location = useLocation();
  const [serchParams] = useSearchParams();
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  useEffect(() => {
    if (location || users.length === 0) {
      const getUserParams = {
        params: {
          userType: serchParams.getAll("userType"),
        },
      };

      dispatch(getUsers(getUserParams));
    }
  }, [users.length, dispatch, location.search]);

  return (
    <Box 
     display= "flex"
     flexDirection={"column"}
    width= "80%"
    margin= "auto"
  

     
    >
      <Box 
      marginBottom={"20px"}
      width={"100%"}
      margin="auto"
      // border="1px solid red"
      >
        <DFilterComp />
      </Box>

      <Box style={{  width:"100%" ,margin:"auto"}}>
        <Grid
          templateColumns={{
            base:"repeat(1,1fr)",
            lg: "repeat(4,1fr) ",
            md: "repeat(3,1fr)",
           
          }}
        >
          {users.length > 0 &&
            users.map((ele) => {
              return (
                <GridItem>
                  <DUserCart key={ele.id} userData={ele} />
                </GridItem>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};

export default DAdminHomePage;
