import React from "react";
import { Box, GridItem, Grid } from "@chakra-ui/react";

export const CreateSolution = () => {
  return (
    <Box marginBottom="120px">
      <Grid
        width={"80%"}
        margin={"auto"}
        gridTemplateColumns={{
          lg: "repeat(2,1fr)",
          md: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap={"50px"}
      >
        <GridItem textAlign="left" width="100%">
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
            Create solutions that mirror your business
          </h1>
        </GridItem>
        <GridItem width="80%">
          <p style={{ textAlign: "left", fontSize: "20px" }}>
            Move work forward faster with no-code apps that perfectly match your
            team’s agility and scale.
          </p>
        </GridItem>
      </Grid>
    </Box>
  );
};
