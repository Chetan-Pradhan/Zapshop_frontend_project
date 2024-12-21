import { Container, Navbar, Nav } from "react-bootstrap";
import "./ChatBot.css";
import { useState } from "react";
import ChatBox from "./ChatBox.jsx";

export default function ChatBot() {
  return (
    <div
      style={{ position: "fixed", bottom: "0px", right: "0px" }}
      className="botContain"
    >
      <Container>
        {/* Using Navbars component for responsive robot chat */}

        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="space"
          style={{
            padding: "0px 3rem 0px 3rem",
            borderRadius: "1rem",
          }}
        >
          <Navbar.Brand href="#" style={{ fontSize: "2rem" }}>
            ZapShop 🤖
          </Navbar.Brand>
        </Navbar>
        <Navbar>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* importing the component chatBot */}
            <div>
              <ChatBox />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
