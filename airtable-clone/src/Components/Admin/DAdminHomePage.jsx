import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/AdminContext/action";

import styled from "styled-components";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import DBookCart from "./DBookCart";
import DFilterComp from "./DFilterComp";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const DAdminHomePage = () => {
  const users = useSelector((store) => store.AdminReducer.users);
  const dispatch = useDispatch();
  const location = useLocation();
  const [serchParams] = useSearchParams();
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
    <>
   
   <Grid
    templateColumns={{
      lg: "repeat(2,1fr)",
      md: "repeat(2,1fr)",
      sm: "repeat(1,1fr)",
    }}>
    <GridItem>
    <Box>
    <DFilterComp />
    </Box>
   
        
       
    </GridItem>
    <GridItem>
    <Grid
            templateColumns={{
              lg: "repeat(4,1fr)",
              md: "repeat(3,1fr)",
              sm: "repeat(2,1fr)",
            }}
          >
            {users.length > 0 &&
              users.map((ele) => {
                return (
                  <GridItem>
                    <DBookCart key={ele.id} bookData={ele} />
                  </GridItem>
                );
              })}
          </Grid>
    </GridItem>

   </Grid>



        
        <>
      
        </>
    
    

    </>
  );
};





export default DAdminHomePage;
