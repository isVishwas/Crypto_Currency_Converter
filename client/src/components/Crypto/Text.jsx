import { Box, Typography } from '@mui/material';

const Text = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="90%">
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
        Crypto Calculator
      </Typography>
    </Box>
  );
};

export default Text;
