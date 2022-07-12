import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, CssBaseline, Grid } from '@mui/material'
import UserAmountView from './components/UserAmountView'

const App = () => {
  const [amountData, setAmountData] = useState([])

  useEffect(() => {
    axios.get('https://kids-bank-ypling.herokuapp.com/amount').then(res => {
      setAmountData(res.data)
    })
  },[])

  return (
    <React.Fragment>
      <CssBaseline/>
      <Box sx={{ flexGrow: 1, height: '100vh', display: 'grid', padding: 2 }}>
        <Grid container direction="column" spacing={1}>
          {amountData.map(amountObj => (
            <UserAmountView
              key={amountObj.id}
              name={amountObj.name}
              amount={amountObj.amount}
              bgImgSrc={amountObj.bgImgSrc}
            />
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default App