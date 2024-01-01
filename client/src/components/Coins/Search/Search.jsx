import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SearchHeading from "./SearchHeading";
import { setSearchValue } from "../../../features/coinsList/coinsList";

const Search = () => {
  const { searchValue } = useSelector((state) => state.coinsListHandler);
  const dispatch = useDispatch();

  const searchValueHandler = (event) => {
    dispatch(setSearchValue({ searchValue: event.target.value }));
  };

  return (
    <Box
      backgroundColor="black"
      width="100%"
      px="5%"
      pt="30px"
      display="flex"
      flexDirection="column"
      gap="15px"
    >
      <SearchHeading></SearchHeading>
      <TextField
        variant="outlined"
        fullWidth
        label="Search Cryptocurrency"
        sx={{ input: { color: "white" } }}
        InputLabelProps={{
          style: {
            color: "white",
            borderColor: "red",
          },
        }}
        onChange={searchValueHandler}
        value={searchValue}
        focused
      ></TextField>
    </Box>
  );
};

export default Search;
