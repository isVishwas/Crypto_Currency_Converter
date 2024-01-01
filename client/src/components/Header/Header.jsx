import { AppBar, Toolbar } from '@mui/material';

const Header = () => {

  return (
    <>
      <AppBar sx={{ backgroundColor: '#393E46' }} position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: { xs: 1, sm: 2 },
            py: 1,
          }}
        >
          <h1>Crypto Currency Converter</h1>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
