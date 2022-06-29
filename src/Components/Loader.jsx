import React from 'react';
import { Box, Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
    return (
        <Box>
            <Stack justifyContent='center' alignItems='center'>
                <CircularProgress color='secondary' />
            </Stack>
        </Box>
    );
};

export default Loader;