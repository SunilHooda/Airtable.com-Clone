import React from "react";
import { Box, GridItem, Grid } from "@chakra-ui/react";

export const BeginStartet = () => {
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
            Get started quickly
          </h1>
        </GridItem>
        <GridItem width="80%">
          <p style={{ textAlign: "left", fontSize: "20px" }}>
            Begin building on day one. Airtable’s pre-made templates and
            intuitive design help you tackle even your most complex needs, right
            away.
          </p>
        </GridItem>
      </Grid>
    </Box>
  );
};
