import { Button,HStack } from '@chakra-ui/react';
import React from 'react';
import{Link} from "react-router-dom";
const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}> 
  <Button varient={"unstyled"}>
    <Link to="/">Home</Link>
  </Button>
  <Button varient={"unstyled"}>
    <Link to="/exchanges">Exchanges</Link>
  </Button>
  <Button varient={"unstyled"}>
    <Link to="/coins">Coins</Link>
  </Button>
  </HStack>
  )
}

export default Header
