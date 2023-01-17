import React, { useEffect, useState } from "react";
import { Container,Box} from "@chakra-ui/react"
import Loader from "./Loader";
const CoinDetailes = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  return<Container maxW={"container.xl"}  >
          {
            loading? <Loader/> :(
              <>
              <Box width={"full"} borderwidth={1}>
ds
              </Box> 
              </>
            )
          }
  </Container>;
}

export default CoinDetailes 