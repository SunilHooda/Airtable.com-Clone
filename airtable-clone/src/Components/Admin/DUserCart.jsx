import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./DUserCart.css"

const DUserCart = ({ userData }) => {
  return (
    <Box className="container"
    _hover={{marginBottom:"5px"}}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        margin: "10px",
        padding: "20px",
        borderRadius: "5px",
      
      
      }}
     
    >
      <Box>
        <img
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          width={"100px"}
          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
          alt="Book_Img"
        />
      </Box>
      <Box
        style={{ textAlign: "left", fontWeight: "bold", marginBottom: "10px" }}
      >
        <h1 style={{textAlign:"center"}}>Name : {userData.userName}</h1>
        <h1 style={{textAlign:"center"}}>Type : {userData.userType}</h1>
      </Box>
      <Link to={`/users/${userData.id}`}>
        <Button className="buttoni" bg={"green.400"} >User Info</Button>
      </Link>
    </Box>
  );
};

export default DUserCart;
