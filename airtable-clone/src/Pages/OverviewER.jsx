import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Button,
  Image,
  Text,
  Flex,
  Stack,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AspectRatio,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const img=[
  "https://www.airtable.com/images/logo_bar_enterprise/Levis.svg",
  "https://www.airtable.com/images/logo_bar_enterprise/Intuit.svg",
  "https://www.airtable.com/images/logo_bar_enterprise/Shopify.svg",
  "https://www.airtable.com/images/logo_bar_enterprise/Netflix.svg"
]


const data=[
  {borderColor:"c6a9f5",orientation:"vertical",head:"95%",des:"less time spent on data entry (GitHub)"},
  {borderColor:"#ffeab6",orientation:"vertical",head:"4X",des:"faster content publishing (Equinox Media)"},
  {borderColor:"#d3ebd5",orientation:"vertical",head:"$2.6M",des:"Annual savings from automation (Fortune 100 company)"}
 
]



const Overview = () => {
  return (
    <Box>
      <Box bg="#EBF8FF">
        <Grid
          h="auto"
          bg="#EBF8FF"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <GridItem>
            <Box mt="50" width={["full", "full", "full", "base"]} p={5}>
              <Box>
                <Heading as="h1" size="4xl" noOfLines={2}>
                  Connect at scale with Airtable Enterprise
                </Heading>
              </Box>
              <Box mt="5">
                <Heading as="h4" size="md" color="#2B6CB0" noOfLines={2}>
                  Build a single source of truth that connects your data,
                  workflows and teams so you can all move faster, together.
                </Heading>
              </Box>
              <Box mt="8">
                <Button size="lg" colorScheme="blue">
                  Contact sales{" "}
                </Button>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Image
              src="https://www.airtable.com/images/home/templates/laptop.png"
              width="100%"
              h="90%"
              alt="DanAbramov"
            />
          </GridItem>
        </Grid>



        <Box style={{  width:"80%" ,margin:"auto",marginTop:"20px",marginBottom:"20px"}}>
        <Grid
         gap={"50px"}
          templateColumns={{
            base: "repeat(2,1fr)",
              lg: "repeat(5,1fr)",
              md: "repeat(3,1fr)",
              sm: "repeat(2,1fr)",
           
          }}
        ><GridItem textAlign="left" width="100%">
        <p style={{ marginBottom: "40px",fontSize:"25px" }}>
        Leading enterprises run on Airtable
        </p>
      </GridItem>
          {img.length > 0 &&
            img.map((ele) => {
              return (
               
                <GridItem>
              <Image  boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
            margin={"auto"}
            //   width={{ lg: "200px", md: "200px", sm: "200px" }}
            width={"100%"} src={ele} alt="img" />
                </GridItem>
              );
            })}
        </Grid>
      </Box>

      </Box>

      <Box p={5} mb="50" textAlign={["left", "left", "center", "center"]}>
        <Heading as="h2" size="3xl">
          Results you can count on
        </Heading>



        <Box style={{  width:"100%" ,margin:"auto",marginTop:"20px",marginBottom:"20px"}}>
        <Grid
         gap={"50px"}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]
          }
        >
          {data.length > 0 &&
            data.map((ele) => {
              return (
               
                <GridItem>
                <Stack direction="row" h="150px" p={4}>
                  <Divider
                    border="5px"
                    borderColor={ele.borderColor}
                    orientation="vertical"
                  />
                  <Box align="left">
                    <Heading fontSize={30}>{ele.head}</Heading>
                    <Heading fontSize={20}>
                     {ele.des}
                    </Heading>
                  </Box>
                </Stack>
              </GridItem>
              );
            })}
        </Grid>
      </Box>



       
      </Box>

      <Box>
        <Grid
          p={20}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <GridItem>
            <Box>
              <Box>
                <Heading as="h3" size="lg" color="gray">
                  Flexibility
                </Heading>
              </Box>
              <Box mt="5">
                <Heading as="h2" size="3xl" noOfLines={2}>
                  Works across all your teams
                </Heading>
              </Box>
              <Box mt="5">
                <Flex gap={5}>
                  <Box mt="1">
                    <Heading>
                      {" "}
                      <FaCheckCircle />{" "}
                    </Heading>
                  </Box>
                  <Heading as="h4" size="md" noOfLines={2}>
                    Unify operations with a flexible platform that supports any
                    use case
                  </Heading>
                </Flex>
              </Box>
              <Box mt="5">
                <Flex gap={5}>
                  <Box mt="1">
                    <Heading>
                      {" "}
                      <FaCheckCircle />{" "}
                    </Heading>
                  </Box>
                  <Heading as="h4" mt={2} size="md" noOfLines={2}>
                    Sync information across teams and systems in real time
                  </Heading>
                </Flex>
              </Box>
              <Box mt="5">
                <Flex gap={5}>
                  <Box mt="1">
                    <Heading>
                      {" "}
                      <FaCheckCircle />{" "}
                    </Heading>
                  </Box>
                  <Heading as="h4" mt={2} size="md" noOfLines={2}>
                    Optimize cross-team visibility with a shared source of truth
                  </Heading>
                </Flex>
              </Box>
            </Box>
          </GridItem>
          <GridItem ml={20} mt={20}>
            <Box>
              <AspectRatio borderRadius={20} objectFit="cover" ratio={[16 / 9]}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/8IgbxRaxYc4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </AspectRatio>
            </Box>
            <Box mt={5}>
              <Heading as="h5" mt={2} size="sm">
                Customer Story: Energy technology company Baker Hughes is
                transforming with help from Airtable{" "}
              </Heading>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      <Box bg="#EBF8FF">
        <Grid
          h="auto"
          bg="#EBF8FF"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          p={20}
        >
          <GridItem>
            <Image
              src="https://www.airtable.com/images/card_media_enterprise/PowerScales.png"
              width="80%"
              h="90%"
              alt="DanAbramov"
            />
          </GridItem>
          <GridItem>
            <Box>
              <Box>
                <Heading as="h3" size="lg" color="gray">
                  Scale
                </Heading>
              </Box>
              <Box mt="5">
                <Heading as="h2" mt={2} size="3xl" noOfLines={1}>
                  Power that scales
                </Heading>
              </Box>
              <Box mt="5">
                <Flex gap={5}>
                  <Box mt="1">
                    <Heading>
                      {" "}
                      <FaCheckCircle />{" "}
                    </Heading>
                  </Box>
                  <Heading as="h4" mt={2} size="md" noOfLines={2}>
                    Connect large teams and datasets with advanced workflows
                  </Heading>
                </Flex>
              </Box>
              <Box mt="5">
                <Flex gap={5}>
                  <Box mt="1">
                    <Heading>
                      {" "}
                      <FaCheckCircle />{" "}
                    </Heading>
                  </Box>
                  <Heading as="h4" mt={2} size="md" noOfLines={1}>
                    Get unlimited workspaces plus 3-year revision history
                  </Heading>
                </Flex>
              </Box>
              <Box mt="5">
                <Flex gap={5}>
                  <Box mt="1">
                    <Heading>
                      {" "}
                      <FaCheckCircle />{" "}
                    </Heading>
                  </Box>
                  <Heading as="h4" mt={2} size="md" noOfLines={2}>
                    Stay aligned by centralizing your data with 250K records per
                    base
                  </Heading>
                </Flex>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box bg="#EBF8FF">
        <Grid
          p={20}
          bg="#EBF8FF"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <GridItem>
            <Box>
              <Heading as="h3" size="lg" color="gray">
                Scale
              </Heading>
            </Box>
            <Box mt="2">
              <Heading as="h2" mt={2} size="3xl" noOfLines={1}>
                Power that scales
              </Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box mt={10}>
              <Text fontSize={25}>
              Anyone can create a workflow in Airtable. Bring all your data together with a breadth of integrations, extensible APIs, custom scripting, and more.
              </Text>
            </Box>
            <Box mt="20">
              <Heading as='h4' size='md'color="#2B6CB0">
              See all integrations {"->"}
              </Heading>
            </Box>
          </GridItem>
        </Grid>
        <Grid   p={20}
          bg="#EBF8FF"
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
            "repeat(7, 1fr)",
          ]}>
         <Image mt="5"src="https://www.airtable.com/images/integrations/Slack.svg"  alt='Dan Abramov' />
         <Image mt="5" src="https://www.airtable.com/images/integrations/Box.svg"  alt='Dan Abramov' />
         <Image mt="5" src="https://www.airtable.com/images/integrations/Jira.svg"  alt='Dan Abramov' />
         <Image mt="5" src="https://www.airtable.com/images/integrations/GoogleDrive.svg"  alt='Dan Abramov' />
         <Image mt="5" src="https://www.airtable.com/images/integrations/Hootsuite.svg"  alt='Dan Abramov' />
         <Image mt="5" src="https://www.airtable.com/images/integrations/Zendesk.svg"  alt='Dan Abramov' />
         <Image mt="5" src="https://www.airtable.com/images/integrations/Github.svg"  alt='Dan Abramov' />
        </Grid>
      </Box>
      <Box>
      <Grid p={[5,10,5,10]} bg="white"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <GridItem  h="auto" width={["full", "full", "full", "base"]}>
            <Box >
              <Heading as="h6" size="xl" color="black.500">
              Join us and change how you work.
              </Heading>
            </Box>
          </GridItem>

          <GridItem align={["right"]} >
            <Button  colorScheme='blue'>Sign up for free</Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Overview;
