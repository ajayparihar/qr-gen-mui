import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import DefaultLayout from "@/layouts/default";
import { ResetIcon } from "@radix-ui/react-icons";
import { Download } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";
import { useLocalStorage } from "react-use";

export const IndexPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [text, setText, remove] = useLocalStorage<string | undefined>(
    "text",
    ""
  );

  const handleOnTextReset = () => {
    remove();
    setText("");
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const link = document.createElement("a");
      link.href = image;
      link.download = "qrcode.png";
      link.click();
    }
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center">
        <div className="grid gap-4 w-full max-w-lg">
          <div className="relative">
            <Textarea
              value={text}
              rows={5}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your content here..."
              id="message-2"
              className="p-4 rounded border focus:outline-none focus:border-blue-500"
            />
            <Button
              onClick={handleOnTextReset}
              className="absolute bottom-2 right-2 hover:bg-red-500"
              variant={"ghost"}
            >
              <ResetIcon />
            </Button>
          </div>
          <Card className="border rounded">
            <CardHeader className="items-center">
              <CardTitle>QR Code Generator</CardTitle>
              <CardDescription>
                Your unique code is displayed below
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white p-2 inline-block">
                  <QRCodeCanvas
                    ref={canvasRef}
                    size={256}
                    value={text ? text : ""}
                  />
                </div>
                <Button className="w-50" onClick={handleDownload}>
                  <Download />
                  Download QR Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
};
