// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";
import HeroContent from "./Content";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const Cryto = () => {
  return (
    <Box
      display="flex"
      backgroundColor="black"
      flexDirection="column"
      position="relative"
    >
      <HeroContent></HeroContent>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Cryto;
