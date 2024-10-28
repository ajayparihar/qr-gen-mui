import { QrCode2 } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { ThemeToggle } from "./ThemeToggle";

interface NavBarProps {
  appName: string;
  setCurrentTheme: any;
}

function NavBar({ appName, setCurrentTheme }: NavBarProps) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <QrCode2 sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {appName}
          </Typography>
          <Box sx={{ ml: "auto" }}>
            <Tooltip title="Toggle Theme">
              <ThemeToggle setCurrentTheme={setCurrentTheme} />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
