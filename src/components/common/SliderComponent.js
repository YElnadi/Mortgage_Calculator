import React from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
const SliderComponent = ({ min, max, defaultValue, step, onChange, value, label, unit }) => {
  return (
    <div>
      <Stack spacing={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">{unit} {defaultValue}</Typography>
      </Stack>

      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        label = {label}
        onChange={onChange}
        value={value}
        unit = {unit}
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
