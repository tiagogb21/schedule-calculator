import React, { useState } from 'react';
import { Paper, TextField, Grid, Button } from "@material-ui/core";
import { calculatorButtons } from '../../data/data';

const Calculator: React.FC = () => {
  const [resultLabel, setResultLabel] = useState<string[]>([]);

  const addToResult = (val: string) => {
    setResultLabel((prev) => {
      prev.push(val);
      return prev;
    });
  };

  const clear = () => {
    setResultLabel([]);
  }

  const shiftDigit = () => {
    setResultLabel((prev) => {
      prev.pop();
      return prev;
    });
  }

  const handleClick = () => {
    return;
  }

  return (
    <React.Fragment>
      <Paper style={{ width: '250px', fontFamily: 'Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
        <TextField
          variant="outlined"
          value={ resultLabel }
          style={{ width: "100%", background: 'lightgray' }}
        />
        <Grid container>
          <Grid item xs={3}>
            {
              calculatorButtons.map((btns, id) => (
                <article style={{ display: 'flex', width: '250px' }} key={ id }>
                    {
                      btns.map((btn) => (
                      <Button
                        style={{ flexGrow: 1, background: btn.color, width: btn.width }}
                        onClick={handleClick}
                        key={btn.name}
                      >
                        { btn.name }
                      </Button>
                      ))
                    }
                </article>  
              ))
            }
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

export default Calculator;