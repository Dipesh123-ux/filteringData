import React from 'react';
import  {makeStyles}  from '@mui/styles';
import Slider from '@mui/material/Slider';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  thumb: {
    color: '#777171',
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: '#666464',
  },
});

const PriceSlider = ({ value, changePrice }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    console.log(e.target.value)
      changePrice(e.target.value)
  }

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay='on'
        min={1000}
        max={10000}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
    </div>
  );
};

export default PriceSlider;