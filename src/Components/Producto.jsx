import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    textDecoration:"none"
  },
  title: {
    fontSize: 14,
    textDecoration:"none"
  },
  pos: {
    marginBottom: 12,
  },
  abajo:{
    textAlign:"left",
    marginLeft:"15px"
}
});

export default function OutlinedCard({name,image,screen,memory,price}) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <CardActions>
        <Button size="small" diseabled>JSON</Button>
      </CardActions>
        <img src={image} alt=""/>
        <Typography variant="h5" component="h2">
        {name}
        </Typography>
        <Typography variant="h5" component="h2" color="primary">
            ${price}
        </Typography>
        <Typography variant="body2" component="p" className={classes.abajo}>
        <Button variant="outlined" size="small" diseabled>{memory} </Button>
          <Button variant="outlined" size="small" diseabled>{screen} </Button>
        </Typography>
      </CardContent>
    </Card>
  );
}
