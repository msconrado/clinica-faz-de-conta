import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent } from "./ui/card";

const QRCode = () => {
  const currentUrl = window.location.href;

  return (
    <Card className="max-w-xs mx-auto mt-8">
      <CardContent className="p-6 text-center">
        <QRCodeSVG
          value={currentUrl}
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
      </CardContent>
    </Card>
  );
};

export default QRCode;