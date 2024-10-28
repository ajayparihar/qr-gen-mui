import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

export default function FormatSelect() {
  const [age, setAge] = React.useState("png");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-select-small-label">Format</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Format"
        onChange={handleChange}
      >
        <MenuItem value={"png"}>PNG</MenuItem>
        <MenuItem value={"jpeg"}>JPEG</MenuItem>
        <MenuItem value={"webp"}>WEBP</MenuItem>
      </Select>
    </FormControl>
  );
}
