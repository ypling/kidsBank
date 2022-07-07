import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import TWEEN from '@tweenjs/tween.js'

const UserAmountView = ({ name, amount }) => {
  const [displayAmount, setDisplayAmount] = useState(0)
  useEffect(() => {
    const ease = { value: displayAmount }
    let interval
    const tween = new TWEEN.Tween(ease).to({ value: amount }, 800).
      easing(TWEEN.Easing.Linear.None).
      onUpdate(() => {
        setDisplayAmount(Math.floor(ease.value))
      }).
      onComplete(() => {
        clearInterval(interval)
      }).
      start()
    interval = setInterval(() => {
      console.log('interval')
      tween.update()
    }, 50)
  }, [])
  return (
    <Grid item>
      <Card sx={{ maxWidth: 500, bgcolor: 'primary.light' }}>
        <CardHeader title={name}
                    titleTypographyProps={{ color: 'primary.contrastText' }}/>
        <CardContent>
          <Typography
            align="center"
            variant="h2" component="div"
            color={'primary.contrastText'}>
            <StarIcon htmlColor={'#FFDD71'} fontSize={'large'}/> {displayAmount}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default UserAmountView