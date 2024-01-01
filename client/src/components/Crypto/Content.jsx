import { Box } from "@mui/material";
import HeroExchangeContainer from "./ExchangeContainer";
import Text from "./Text";

const Content = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="16px 0px"
      sx={{ gap: "30px", zIndex: "10" }}
    >
      <Text></Text>
      <HeroExchangeContainer></HeroExchangeContainer>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Content;
