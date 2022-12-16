import React from "react";
import { Box, GridItem, Grid } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import ImgSlider from "./ImgSlider";

export const LastDiv = () => {
  return (
    <Box>
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
        <GridItem>
          <ImgSlider />
        </GridItem>
        <GridItem textAlign="left" width="85%">
          <Accordion>
            <AccordionItem width="300px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Expand toolkits
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left" pb={4}>
                Take work to the next level with pre-built extensions.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem width="300px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Develop solutions
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left" pb={4}>
                Create custom solutions with easy to use APIs and low-code
                scripting tools.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem width="300px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Get expert support
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left" pb={4}>
                Accelerate team success with our professional services.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </GridItem>
      </Grid>
    </Box>
  );
};
