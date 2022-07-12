import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import TWEEN from '@tweenjs/tween.js'

const UserAmountView = ({ name, amount, bgImgSrc }) => {
  const [displayAmount, setDisplayAmount] = useState(0)
  useEffect(() => {
    const ease = { value: displayAmount }
    let interval
    const tween = new TWEEN.Tween(ease).to({ value: amount }, 800).
      easing(TWEEN.Easing.Quadratic.Out).
      onUpdate(() => {
        setDisplayAmount(Math.floor(ease.value))
      }).
      onComplete(() => {
        clearInterval(interval)
      }).
      start()
    interval = setInterval(() => {
      tween.update()
    }, 20)
  }, [amount])
  return (
    <Grid item xs>
      <Card sx={{ bgcolor: 'primary.light', height: '100%' }}>
        <CardMedia
          component="img"
          height="160"
          image={bgImgSrc}
          alt="shark background"
        />
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