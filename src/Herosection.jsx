import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "./background01.png";

export default function Herosection() {
  return (
    <div>
      <Image src={background} fluid />
    </div>
  );
}
