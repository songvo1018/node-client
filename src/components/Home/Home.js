import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';


import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: '#efefefb5',
      textAlign: 'center',
      padding: 50
    },
    card: {
      margin: '0 auto',
      maxWidth: 550
    },
    typography: {
      padding: 10
    }
}))

const Home = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Card className={classes.card}>
        <Typography className={classes.typography}>
          Create products (name, price, photo) view, 
          edit and delete. 
          The ability to create an order by product is also available, 
          i.e. you can assign a value to the quantity of the product. 
          Orders are also available for viewing, deleting, 
          but not editing.
        </Typography>
        <Typography className={classes.typography}>
          Client application deployed on hosting
          The server side is deployed on a VPS 
          and stores uploaded product photos.
        </Typography>
        <Typography className={classes.typography}>
          In development were used: 
          NPM, GIT, React-Dev-Tools, Axios
        </Typography>
        <List>
          <Typography>
            The project used:
          </Typography>
          <ListItem>
            <ListItemText>
              Client side: React, React-Router-DOM, MaterialUI
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Server side: NodeJS, Express, MongoDB, Multter
            </ListItemText>
          </ListItem>
        </List>
        <Typography className={classes.typography} >Alexey Nosov, November 2020</Typography>
      </Card>
    </Paper>
  )
}

export default Home;