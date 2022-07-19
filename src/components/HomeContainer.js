import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import UserAmountView from './UserAmountView'
import axios from 'axios'
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box'

const HomeContainer = () => {
  const [amountData, setAmountData] = useState([])
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    axios.get('https://kids-bank-ypling.herokuapp.com/amount').then(res => {
      res.data[0].bgImgSrc = 'https://wallpaper.dog/large/20517298.jpg'
      res.data[1].bgImgSrc = 'https://wallpaperaccess.com/full/477608.jpg'
      setAmountData(res.data)
      setIsPending(false)
    })
  },[])


  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
      {isPending && <CircularProgress />}
      {!isPending && <Grid container direction="column" spacing={1}>
      {amountData.map(amountObj => (
        <UserAmountView
          key={amountObj.id}
          name={amountObj.name}
          amount={amountObj.amount}
          bgImgSrc={amountObj.bgImgSrc}
        />
      ))}
      </Grid>}

    </Box>

  )
}

export default HomeContainer