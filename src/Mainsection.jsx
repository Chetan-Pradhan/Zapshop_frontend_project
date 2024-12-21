import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import styles from "./Mainsection.module.css";

export default function Mainsection() {
  const [data, setData] = useState([]);

  // fetching api data for displaying the products
  useEffect(() => {
    try {
      async function getData() {
        const data = await fetch("https://fakestoreapi.com/products");
        const jdata = await data.json();
        setData(jdata);
      }
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Container>
        {/* using Bootstrap Row for displaying the api data products */}

        <Row style={{ margin: 0 }}>
          {data.map((value, index) => (
            // Card images for product images

            <Card className={styles.card} key={index}>
              <Card.Img
                variant="top"
                src={value.image}
                className={styles.cardImage}
                key={1000}
              />
              <Card.Body>
                <Card.Title
                  className={styles.font}
                  style={{ fontWeight: "bolder" }}
                >
                  {value.title}
                </Card.Title>
                {/* <Card.Text
                  style={{ fontSize: "0.6rem" }}
                  className={styles.font}
                >
                  {value.description}
                </Card.Text> */}
                <Card.Title>${value.price}</Card.Title>
                <Button variant="primary">Shop now!</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
}
