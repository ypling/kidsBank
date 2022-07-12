import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, CssBaseline, Grid } from '@mui/material'
import UserAmountView from './components/UserAmountView'
import Router from './Router'

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Box sx={{ flexGrow: 1, height: '100vh', display: 'grid', padding: 2 }}>
        <Router/>
      </Box>
    </React.Fragment>
  )
}

export default App