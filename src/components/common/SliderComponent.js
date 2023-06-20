import React from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
const SliderComponent = ({ min, max, defaultValue, step, onChange, value }) => {
  return (
    <div>
      <Stack spacing={1}>
        <Typography variant="subtitle2">Home Value</Typography>
        <Typography variant="h5">$ {defaultValue}</Typography>
      </Stack>

      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={value}
        marks
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <Stack direction="row" justifyContent={"space-between"} >
      <Typography variant= 'caption' color="text.secondary" >
        ${min}</Typography>
      <Typography variant= 'caption' color="text.secondary" > ${max}</Typography>
      </Stack>
    </div>
  );
};

export default SliderComponent;
