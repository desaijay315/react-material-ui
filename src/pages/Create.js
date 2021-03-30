import React, {useState} from 'react'
import Typography  from '@material-ui/core/Typography'
import Button  from '@material-ui/core/Button'
import Container  from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {makeStyles} from '@material-ui/core';
import FormInput from '../components/CustomTextField'


const useStyles = makeStyles({
  btn:{
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover':{
      backgroundColor: 'blue'
    }
  },
  title:{
    textDecoration: 'underline',
    marginBottom: 20
  },
  field:{
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)

    if (title == '') {
      setTitleError(true)
    }
    if (details == '') {
      setDetailsError(true)
    }

    if(title && details){
      console.log(title, details)
    }
  }

  return (
    <Container>
      <Typography 
      className={classes.title}
      variant="h6"
      color="textSecondary"
      component="h2"
      gutterBottom
      >
        Create a new note 
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <FormInput
        onChange={(e) => setTitle(e.target.value)}
        className={classes.field}
        label="Note Title"
        variant="outlined"
        color="secondary"
        required
        fullWidth
        error={titleError}
        />
        <FormInput
        onChange={(e) => setDetails(e.target.value)}
        className={classes.field}
        label="Details"
        variant="outlined"
        color="secondary"
        multiline
        rows={4}
        required
        fullWidth
        error={detailsError}
        />
      
      <Button
      type="submit"
      color="secondary"
      variant="contained"
      endIcon={<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>
      </form>
   
    </Container>
  )
}
