import React from "react";
import { Box, Image, GridItem, Grid } from "@chakra-ui/react";

export const AllBrands = () => {

const img=[
  "https://images.ctfassets.net/wl95ljfippl8/7pKtkFBKIr5OWbcHfcFmZo/d01d9ddad2324136d0706186f81f576f/Netflix_2.svg?w=1920",
  "https://images.ctfassets.net/wl95ljfippl8/3sB6QYrBgW0GzAksLoetXD/2e5f45ac66cf9db6502aa379b9040204/harrys.svg?w=1920",
  "https://images.ctfassets.net/wl95ljfippl8/SU5defQsQuYcsSujt7PEC/6a184e638dff38c2d95982285146e38b/Everlane_3_15.svg?w=1920",
  "https://images.ctfassets.net/wl95ljfippl8/654l9KVweY5skKNdQtiBki/c54e1031797959a83c65c55da933a29c/Shopify_2.svg?w=1920"
]



  return (
    <Box marginBottom="100px">
      <Grid
        width={"80%"}
        margin={"auto"}
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          lg: "repeat(5,1fr)",
          md: "repeat(3,1fr)",
          sm: "repeat(2,1fr)",
        }}
        gap={"50px"}
      >
        <GridItem textAlign="left" width="100%">
          <p style={{ marginBottom: "40px" }}>
            Trusted by leading companies of all sizes
          </p>
        </GridItem>
        <GridItem>
          <Image
            boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
            margin={"auto"}
            //   width={{ lg: "200px", md: "200px", sm: "200px" }}
            width={"100%"}
            src="https://images.ctfassets.net/wl95ljfippl8/7pKtkFBKIr5OWbcHfcFmZo/d01d9ddad2324136d0706186f81f576f/Netflix_2.svg?w=1920"
          />
        </GridItem>
        <GridItem>
          <Image
            boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
            margin={"auto"}
            //   width={{ lg: "200px", md: "200px", sm: "200px" }}
            width={"100%"}
            src="https://images.ctfassets.net/wl95ljfippl8/3sB6QYrBgW0GzAksLoetXD/2e5f45ac66cf9db6502aa379b9040204/harrys.svg?w=1920"
          />
        </GridItem>
        <GridItem>
          <Image
            boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
            margin={"auto"}
            //   width={{ lg: "200px", md: "200px", sm: "200px" }}
            width={"100%"}
            src="https://images.ctfassets.net/wl95ljfippl8/SU5defQsQuYcsSujt7PEC/6a184e638dff38c2d95982285146e38b/Everlane_3_15.svg?w=1920"
          />
        </GridItem>
        <GridItem>
          <Image
            boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
            margin={"auto"}
            //   width={{ lg: "200px", md: "200px", sm: "200px" }}
            width={"100%"}
            src="https://images.ctfassets.net/wl95ljfippl8/654l9KVweY5skKNdQtiBki/c54e1031797959a83c65c55da933a29c/Shopify_2.svg?w=1920"
          />
        </GridItem>
      </Grid>

      {/* <Box>
{img.map((ele)=>(
 <Grid
 width={"80%"}
 margin={"auto"}
 gridTemplateColumns={{
   base: "repeat(2,1fr)",
   lg: "repeat(5,1fr)",
   md: "repeat(3,1fr)",
   sm: "repeat(2,1fr)",
 }}
 gap={"50px"}
>
<GridItem>
 <Image  boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
            margin={"auto"}
            //   width={{ lg: "200px", md: "200px", sm: "200px" }}
            width={"100%"} src={ele} alt="img" />
 </GridItem>
 </Grid>
))}



      </Box> */}
    </Box>




  );
};
