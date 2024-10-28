import { Download } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import "./App.css";
import FormatSelect from "./components/FormatSelect";
import NavBar from "./components/NavBar";
import QrCard from "./components/QrCard";
import TextArea from "./components/TextArea";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <>
        <NavBar setCurrentTheme={setCurrentTheme} appName="QR GENERATOR" />
        <QrCard>
          <Stack direction={"row"}>
            <FormatSelect />
            <Button size="small" startIcon={<Download />} variant="outlined">
              Download
            </Button>
          </Stack>
          <TextArea />
        </QrCard>
      </>
    </ThemeProvider>
  );
}

export default App;
