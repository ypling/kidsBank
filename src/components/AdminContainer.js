import React from 'react'
import { Grid } from '@mui/material'
import axios from 'axios'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const AdminContainer = () => {

  const callUpdateAmountAPI = (dbId, updatedAmount) => {
    axios.post('https://kids-bank-ypling.herokuapp.com/amount', { id: dbId, amount: updatedAmount }).then(res => {
      console.log(res)
    })
  }

  const [name, setName] = React.useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const [amount, setAmount] = React.useState('')

  const handleAmountChange = (event) => {
    setAmount(event.target.value)
  }

   const handleClick = (event) => {
     callUpdateAmountAPI(name, amount)
   }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          label="Name"
          onChange={handleNameChange}
        >
          <MenuItem value={1}>Jackson Li</MenuItem>
          <MenuItem value={2}>Jacob Li</MenuItem>
        </Select>
        <TextField
          id="filled-basic"
          label="Type in the amount here"
          variant="filled"
          onChange={handleAmountChange}
        />

        <Button
          variant="contained"
          color="success"
          onClick={handleClick}
        >
          Submit
        </Button>
      </FormControl>
    </Box>

  )

}

export default AdminContainer