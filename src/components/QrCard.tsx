import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import QRCode from "react-qr-code";

interface QrCardProps {
  children: React.ReactNode; // Define the type for children
}

const QrCard: React.FC<QrCardProps> = ({ children }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={"TestString"}
          viewBox={`0 0 256 256`}
        />
      </div>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default QrCard;
