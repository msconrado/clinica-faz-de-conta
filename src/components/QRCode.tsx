import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const QRCode = () => {
  const linktreeUrl = window.location.origin + "/linktree";

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    const qrCode = document.getElementById("qr-code");
    if (qrCode) {
      const svgData = new XMLSerializer().serializeToString(qrCode);
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
          
          // Add logo
          const logo = new Image();
          logo.onload = () => {
            const logoSize = 40;
            const logoX = (canvas.width - logoSize) / 2;
            const logoY = (canvas.height - logoSize) / 2;
            ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
            
            const link = document.createElement("a");
            link.download = "qrcode-clinica-faz-de-conta.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
          };
          logo.src = "/lovable-uploads/73603ab0-7e58-4602-aff0-f654a4fe2b8d.png";
        }
      };
      img.src = "data:image/svg+xml;base64," + btoa(svgData);
    }
  };

  return (
    <Card className="max-w-xs mx-auto mt-8">
      <CardContent className="p-6 text-center">
        <QRCodeSVG
          id="qr-code"
          value={linktreeUrl}
          size={200}
          level="H"
          imageSettings={{
            src: "/lovable-uploads/73603ab0-7e58-4602-aff0-f654a4fe2b8d.png",
            height: 40,
            width: 40,
            excavate: true,
          }}
        />
        <p className="mt-4 text-sm text-neutral-dark font-como">
          Escaneie para acessar nosso LinkTree
        </p>
        <Button
          onClick={handleDownload}
          className="mt-4 bg-primary hover:bg-primary-dark"
        >
          <Download className="w-4 h-4 mr-2" />
          Baixar QR Code
        </Button>
      </CardContent>
    </Card>
  );
};

export default QRCode;