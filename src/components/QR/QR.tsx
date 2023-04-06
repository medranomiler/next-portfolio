import QRCode from "react-qr-code";
import styles from "../QR/qr.module.css"


interface QRProps {
  value: string;
}

const QR = ({ value }: QRProps) => {
  return (

    <div className={styles.qr}>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: "90%",
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          style={{
            height: "auto",
            maxWidth: "100%",
            width: "100%",
            border: "1px solid white",
            borderRadius: "10px",
          }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
};

export default QR;
