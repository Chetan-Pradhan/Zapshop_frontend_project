import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#212529", height: "20rem", color: "white" }}
    >
      <Container
        style={{ display: "flex", justifyContent: "center" }}
        className={styles.links}
      >
        <div className={styles.boxes}>
          <h5>Get To Know Us</h5>
          <a href="#">About ZapShop</a>
          <br />
          <a href="#">Careers</a>
          <br />
          <a href="#">ZapShop Science</a>
          <br />
        </div>
        <div className={styles.boxes}>
          <h5>Connect With Us</h5>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/chetan-pradhan-2001-js?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            LinkedIn
          </a>
          <br />
          <a target="_blank" href="https://github.com/Chetan-Pradhan">
            GitHub
          </a>
          <br />
          <a href="#">Twitter - X</a>
          <br />
        </div>
        <div className={styles.boxes}>
          <h5>Let Us Help You</h5>
          <a href="#">Your account</a>
          <br />
          <a href="#">Return centre</a>
          <br />
          <a href="#">100% Purchase protection</a>
          <br />
          <a href="#">ZapShop app download</a>
        </div>
        <div className={styles.boxes}>
          <h5>Make Money With Us</h5>
          <a href="#">Sell on ZapShop</a>
          <br />
          <a href="#">Protect And Build Your Brand</a>
          <br />
          <a href="#">Supply to ZapShop</a>
          <br />
          <a href="#">Advertise Your Product</a>
        </div>
      </Container>
    </footer>
  );
}
