import { Download } from "@mui/icons-material";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Button startIcon={<Download />} variant="outlined">
      Download
    </Button>
  );
}
