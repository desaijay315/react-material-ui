import React from 'react'
import Typography  from '@material-ui/core/Typography'
import Button  from '@material-ui/core/Button'
import Container  from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function Create() {
  return (
    <Container>
      <Typography 
      variant="h6"
      color="textSecondary"
      component="h2"
      gutterBottom
      >
        Create a new note 
      </Typography>
      <Button
      onClick={()=> console.log('you clcked this')}
      type="submit"
      color="secondary"
      variant="contained"
      endIcon={<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>
   
    </Container>
  )
}
