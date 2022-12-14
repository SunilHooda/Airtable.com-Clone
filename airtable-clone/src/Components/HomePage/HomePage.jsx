import React from 'react'
import {
    Box
  } from "@chakra-ui/react";
import { ConnectEv } from './ConnectEv';
import { AllBrands } from './AllBrands';
import { UnitEver } from './UnitEver';
import { CreateSolution } from './CreateSolution';
import { CustomInterface } from './CustomInterface';
import { AllDataTogether } from './AllDataTogether';
import { BeginStartet } from './BeginStartet';
import { AnyoneCan } from './AnyoneCan';
import Transform from './Transform';
import { LastDiv } from './LastDiv';

const HomePage = () => {
  return (
    <Box>
      <ConnectEv/>
      <AllBrands/>
      <CreateSolution/>
      <UnitEver/>
      <CustomInterface/>
      <AllDataTogether/>
      <BeginStartet/>
      <AnyoneCan/>
      <Transform/>
      <LastDiv/>
    </Box>
  )
}

export default HomePage
