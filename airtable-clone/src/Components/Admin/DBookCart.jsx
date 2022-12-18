import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const DBookCart = ({ bookData }) => {
  return (
    <Box
      style={{
        border: "1px solid gray",
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
        <h1>User Name : {bookData.userName}</h1>
        <h1>User Type : {bookData.userType}</h1>
      </Box>
      <Link to={`/users/${bookData.id}`}>
        <Button bg={"green.400"} marginBottom={"10px"}>User Info</Button>
      </Link>
    </Box>
  );
};

export default DBookCart;
