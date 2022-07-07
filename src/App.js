import React from 'react'
import { Box, CssBaseline, Grid } from '@mui/material'
import UserAmountView from './components/UserAmountView'

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Box sx={{ flexGrow: 1, height: '100vh', display: 'grid' }}>
        <Grid container direction="column" spacing={1}>
          <UserAmountView
            name={'Jackson'}
            amount={98}
          />
          <UserAmountView
            name={'Jacob'}
            amount={1260}
          />
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default App