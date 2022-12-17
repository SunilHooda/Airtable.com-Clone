import {
    Box,
    Grid,
    Flex,
    Heading,
    Button,
    ButtonGroup,
    GridItem,
    Text,
    Image,
    CardBody,
    Card,
    Stack,
  } from "@chakra-ui/react";
  import React,{useState} from "react";
  import banner from "../Resource/Prresource/banner.png";
  const Resource = () => {
    const  data = [
      {id:1, link:"" , title:"What is a customer experience (CX) strategy?"  ,img:"https://images.ctfassets.net/wl95ljfippl8/1fheqqSaxXT2Tb2gOK32EU/dd4b6b91de2069cc4f29bbff2b829d68/customer-experience-strategy-hero-image.png?w=1920" , subTitle:"CUSTOMER EXPERIENCE" , question1:"What is customer experience (CX)?"},
      {id:2, link:"" , title:"What is customer experience" ,img:"https://images.ctfassets.net/wl95ljfippl8/16DlxQWQLiYqpG9nvoyuKy/3a0d89e94e38abf6c8cd5aaed50cdeb8/customer_experience_definition_examples_hero_Image.png?w=1920" , subTitle:"CUSTOMER EXPERIENCE"},
      {id:3, link:"" , title:"What is User Experience (UX)?" ,img:"https://images.ctfassets.net/wl95ljfippl8/3zl4yPmELPsDZW1NGI1DF2/bccaa17477689f5046f715954f5ff8e1/AdobeStock_405374782.jpg?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:4, link:"" , title:"What is a user story?" ,img:"https://images.ctfassets.net/wl95ljfippl8/43440zlYn2Ur4ChTIGx5Oi/d156faddd37e0904ed1ec23ed2a3ded0/Product_6_16x9.png?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:5, link:"" , title:"UI vs UX: What’s the difference?" ,img:"https://images.ctfassets.net/wl95ljfippl8/1Sqw2HCEOho5B6S8hKr2QF/fff0feb497dd009d93f6a583edded4e8/Product_Hub_316x9.png?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:6, link:"" , title:"What is a customer experience (CX) strategy?"  ,img:"https://images.ctfassets.net/wl95ljfippl8/1fheqqSaxXT2Tb2gOK32EU/dd4b6b91de2069cc4f29bbff2b829d68/customer-experience-strategy-hero-image.png?w=1920" , subTitle:"CUSTOMER EXPERIENCE"},
      {id:7, link:"" , title:"What is customer experience" ,img:"https://images.ctfassets.net/wl95ljfippl8/16DlxQWQLiYqpG9nvoyuKy/3a0d89e94e38abf6c8cd5aaed50cdeb8/customer_experience_definition_examples_hero_Image.png?w=1920" , subTitle:"CUSTOMER EXPERIENCE"},
      {id:8, link:"" , title:"What is User Experience (UX)?" ,img:"https://images.ctfassets.net/wl95ljfippl8/3zl4yPmELPsDZW1NGI1DF2/bccaa17477689f5046f715954f5ff8e1/AdobeStock_405374782.jpg?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:9, link:"" , title:"What is a user story?" ,img:"https://images.ctfassets.net/wl95ljfippl8/43440zlYn2Ur4ChTIGx5Oi/d156faddd37e0904ed1ec23ed2a3ded0/Product_6_16x9.png?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:10, link:"" , title:"UI vs UX: What’s the difference?" ,img:"https://images.ctfassets.net/wl95ljfippl8/1Sqw2HCEOho5B6S8hKr2QF/fff0feb497dd009d93f6a583edded4e8/Product_Hub_316x9.png?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:11, link:"" , title:"What is a customer experience (CX) strategy?"  ,img:"https://images.ctfassets.net/wl95ljfippl8/1fheqqSaxXT2Tb2gOK32EU/dd4b6b91de2069cc4f29bbff2b829d68/customer-experience-strategy-hero-image.png?w=1920" , subTitle:"CUSTOMER EXPERIENCE"},
      {id:12, link:"" , title:"What is customer experience" ,img:"https://images.ctfassets.net/wl95ljfippl8/16DlxQWQLiYqpG9nvoyuKy/3a0d89e94e38abf6c8cd5aaed50cdeb8/customer_experience_definition_examples_hero_Image.png?w=1920" , subTitle:"CUSTOMER EXPERIENCE"},
      {id:13, link:"" , title:"What is User Experience (UX)?" ,img:"https://images.ctfassets.net/wl95ljfippl8/3zl4yPmELPsDZW1NGI1DF2/bccaa17477689f5046f715954f5ff8e1/AdobeStock_405374782.jpg?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:14, link:"" , title:"What is a user story?" ,img:"https://images.ctfassets.net/wl95ljfippl8/43440zlYn2Ur4ChTIGx5Oi/d156faddd37e0904ed1ec23ed2a3ded0/Product_6_16x9.png?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:15, link:"" , title:"UI vs UX: What’s the difference?" ,img:"https://images.ctfassets.net/wl95ljfippl8/1Sqw2HCEOho5B6S8hKr2QF/fff0feb497dd009d93f6a583edded4e8/Product_Hub_316x9.png?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:16, link:"" , title:"What is a customer experience (CX) strategy?"  ,img:"https://images.ctfassets.net/wl95ljfippl8/1fheqqSaxXT2Tb2gOK32EU/dd4b6b91de2069cc4f29bbff2b829d68/customer-experience-strategy-hero-image.png?w=1920" , subTitle:"CUSTOMER EXPERIENCE"},
      {id:17, link:"" , title:"What is customer experience" ,img:"https://images.ctfassets.net/wl95ljfippl8/16DlxQWQLiYqpG9nvoyuKy/3a0d89e94e38abf6c8cd5aaed50cdeb8/customer_experience_definition_examples_hero_Image.png?w=1920" , subTitle:"CUSTOMER EXPERIENCE"},
      {id:18, link:"" , title:"What is User Experience (UX)?" ,img:"https://images.ctfassets.net/wl95ljfippl8/3zl4yPmELPsDZW1NGI1DF2/bccaa17477689f5046f715954f5ff8e1/AdobeStock_405374782.jpg?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:20, link:"" , title:"What is a user story?" ,img:"https://images.ctfassets.net/wl95ljfippl8/43440zlYn2Ur4ChTIGx5Oi/d156faddd37e0904ed1ec23ed2a3ded0/Product_6_16x9.png?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:21, link:"" , title:"UI vs UX: What’s the difference?" ,img:"https://images.ctfassets.net/wl95ljfippl8/1Sqw2HCEOho5B6S8hKr2QF/fff0feb497dd009d93f6a583edded4e8/Product_Hub_316x9.png?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:22, link:"" , title:"What is a customer experience (CX) strategy?"  ,img:"https://images.ctfassets.net/wl95ljfippl8/1fheqqSaxXT2Tb2gOK32EU/dd4b6b91de2069cc4f29bbff2b829d68/customer-experience-strategy-hero-image.png?w=1920" , subTitle:"CUSTOMER EXPERIENCE"},
      {id:23, link:"" , title:"What is customer experience" ,img:"https://images.ctfassets.net/wl95ljfippl8/16DlxQWQLiYqpG9nvoyuKy/3a0d89e94e38abf6c8cd5aaed50cdeb8/customer_experience_definition_examples_hero_Image.png?w=1920" , subTitle:"CUSTOMER EXPERIENCE"},
      {id:24, link:"" , title:"What is User Experience (UX)?" ,img:"https://images.ctfassets.net/wl95ljfippl8/3zl4yPmELPsDZW1NGI1DF2/bccaa17477689f5046f715954f5ff8e1/AdobeStock_405374782.jpg?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:25, link:"" , title:"What is a user story?" ,img:"https://images.ctfassets.net/wl95ljfippl8/43440zlYn2Ur4ChTIGx5Oi/d156faddd37e0904ed1ec23ed2a3ded0/Product_6_16x9.png?w=1920" , subTitle:"PRODUCT DESIGN"},
      {id:26, link:"" , title:"UI vs UX: What’s the difference?" ,img:"https://images.ctfassets.net/wl95ljfippl8/1Sqw2HCEOho5B6S8hKr2QF/fff0feb497dd009d93f6a583edded4e8/Product_Hub_316x9.png?w=1920" , subTitle:"PRODUCT DESIGN"}
  ]
  
  const [noofElements , setnoofElements] =useState(6)
  const slice = data.slice(0 , noofElements)
  const loadMore = () =>{
    setnoofElements(noofElements + 3)
  }
    return (
      <>
        <Box>
          {/* homebar */}
          <Box
            bg="#f2f4f7"
            border="1px"
            style={{ border: "1px solid gray" }}
            h="10"
          >
            <Flex mt="2" ml="5" gap="2">
              <Heading as="h6" size="xs">
                Home{" "}
              </Heading>
              <Heading as="h6" size="xs">
                {" "}
                {">"}{" "}
              </Heading>
              <Heading as="h6" size="xs">
                Resource
              </Heading>
            </Flex>
            <Flex></Flex>
          </Box>
  
          {/* slider */}
  
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
            ]}
          >
            <GridItem
              bg="#181d26"
              p={10}
              h="m"
              width={["full", "full", "full", "base"]}
            >
              <Box width={["full", "full", "full", "sm"]} ml="10">
                <Heading as="h2" size="lg" color="white">
                  Power up.
                </Heading>
                <Heading as="h6" mt="3" size="xs" color="white">
                  Airtable gives you the superpower to build workflows made for
                  your business objects in a visual, flexible way. Power up your
                  skillset with our catalog of resources.
                </Heading>
                <Heading as="h4" size="lg" mt="20" color="white">
                  QUICK START
                </Heading>
                <ButtonGroup mt="3">
                  <Button>Product</Button>
                  <Button>Marketing</Button>
                </ButtonGroup>
              </Box>
            </GridItem>
  
            <GridItem>
              <Image src={banner} width="100%" h="100%" alt="DanAbramov" />
            </GridItem>
          </Grid>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
            ]}
          >
            <GridItem p={[ 10 ,5 ,5 ,5]} h="auto" width={["full", "full", "full", "base"]}>
              <Box width={["full", "full", "full", "base"]} ml="10">
                <Heading as="h1" size="2xl" color="black.500">
                  Powerful best practices and practical how-tos.
                </Heading>
              </Box>
            </GridItem>
  
            <GridItem p={[ 10 ,5 ,5 ,5]} h="auto" width={["full", "full", "full", "base"]}>
              <Box width={["full", "full", "full", "sm"]} ml="10">
                <Text fontSize="xl" color="black.500">
                  Airtable’s leading the charge of the low- and no-code movement.
                  Explore our growing catalog of resources, and transform the way
                  your team works.
                </Text>
              </Box>
            </GridItem>
          </Grid>
  
          <Box pb="5" ml={[10,10,20,300]}>
            <Heading color="black.300" fontSize={20} as="h4" size="sm">
              Browse
            </Heading>
          </Box>
          <Box ml={[10,10,20,300]}  >
          <hr
            width="100%"
            color="black"
            style={{ border: "0.5px solid gray" }}
          />
          </Box>
         
  
          <Grid ml={[10,10,20,300]} mt="10" gap={5}
           templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          >
        
            {slice.map((item)=>(
               <GridItem>
               <Card  maxW="sm">
                 <CardBody >
                   <Image
                     src={item.img}
   
                     alt="Green double couch with wooden legs"
                     borderRadius="lg"
                   />
                   <Stack mt="6" spacing="3">
                     <Heading size="md">{item.title}</Heading>
                     <Text color="gray">{item.subTitle}</Text>
                   </Stack>
                 </CardBody>
               </Card>
             </GridItem>
            ))}
          </Grid>
          <Box align="center" p={10}>
          <Button onClick={()=> loadMore()}  _hover={{bg: "RGBA(0, 0, 0, 0.24)"}} size='lg' h={50} variant="outline"  color="black" bg="RGBA(0, 0, 0, 0.04)" >Load more</Button>
          </Box>
          <Grid p={[5,10,5,10]} bg="#EBF8FF"
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
      </>
    );
  };
  
  export default Resource;
  