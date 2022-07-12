import React from 'react'
import { Grid } from '@mui/material'
import axios from 'axios'

const AdminContainer = () => {

  const callUpdateAmountAPI = (dbId, updatedAmount) => {
    axios.post('https://kids-bank-ypling.herokuapp.com/amount', {id: dbId, amount: updatedAmount}).then(res => {
      console.log(res)
    })
  }

  return (
    <Grid container>

    </Grid>
  )
}

export default AdminContainer