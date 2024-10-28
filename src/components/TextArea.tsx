import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextArea() {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Text"
          multiline
          rows={4}
          placeholder="Enter your text"
        />
      </div>
    </Box>
  );
}
