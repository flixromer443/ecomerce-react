import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleAccordion from './Acodeon';

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
  texto:{
      textAlign:"left",
      marginLeft:"25px"
  },
  btn:{
      width:"100%",
      height:"50px"
  },
  
});

export default function Caracteristicas({name,image,price,detalles,especification}) {
  const classes = useStyles();
  return (
      <>
      <br></br>
      <br></br>
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
      </CardContent>
      <Typography className={classes.texto}>
      <strong><h3>Caracteristicas</h3></strong>

      </Typography>
      <CardActions> 
        <SimpleAccordion details={detalles} especification={especification} />

      </CardActions>
        <Button variant="contained" color="primary" size="large" className={classes.btn}>Comprar</Button>
    </Card>
    <br></br>
    <br></br>
    </>
  );
}
