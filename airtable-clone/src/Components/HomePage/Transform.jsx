import React from "react";
import {
  Box,
  Image,
  Button,
  GridItem,
  Grid,
  Container,
  Text,
  Heading,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { AspectRatio } from "@chakra-ui/react";

const Transform = () => {
  return (
    <div>
      <Box marginBottom="150px">
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
              Transform how teams work at scale
            </h1>
          </GridItem>
          <GridItem width="80%">
            <p style={{ textAlign: "left", fontSize: "20px" }}>
              Discover deep integrations, advanced extensibility, expert
              support—everything your organization needs to reach new heights.
            </p>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default Transform;
