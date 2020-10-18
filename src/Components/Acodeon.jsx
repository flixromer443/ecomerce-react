import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  texto:{
      textAlign:"left"
  }
}));

export default function SimpleAccordion({details,especification}) {
  const classes = useStyles();
  console.log(details.marca)

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <strong><h3>Generales</h3></strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.texto}>
            Marca:{details.marca}
            <br></br>
            Modelo:{details.modelo}
            <br></br>
            Tipo:{details.tipo}
            <br></br>
            Apto para:{details.uso}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong><h3>Especificas</h3></strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography className={classes.texto}>
                <strong><h4>Procesad&oacute;r</h4></strong>
                Marca del procesad&oacute;r:{especification.procesador}
                <br></br>
                Modelo del procesad&oacute;r:{especification.pmodelo}
                <br></br>
                Generaci&oacute;n:{especification.pgeneracion}
                <br></br>
                <strong><h4>Memoria</h4></strong>
                Capacidad:{especification.ram}
                <br></br>
                Tipo:{especification.cram}
              </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
