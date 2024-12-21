import { useEffect, useState } from "react";
import "./ChatBox.css";

export default function ChatBox() {
  // storing messages in state for displaying user and bot chat

  const [messages, setMessages] = useState([]);

  // input state for user input

  const [input, setInput] = useState("");

  // storing all the product data from api to products state

  const [products, setproducts] = useState([]);

  // storing all the messages data for future analysis

  const [compdata, setcompdata] = useState([]);

  // fetching api data for products details

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((value) => value.json())
        .then((data) => setproducts(data));
    } catch (err) {
      console.error(err);
    }
  }, []);

  // function to handle user's input data and creating the bot resopse for same
  // Also storing the user data in a state for future analysis

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = input.trim();
      setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
      setcompdata((prev) => [...prev, { sender: "user", text: userMessage }]);

      const response = generateResponse(userMessage);
      setMessages((prev) => [...prev, { sender: "assistant", text: response }]);
      setcompdata((prev) => [...prev, { sender: "assistant", text: response }]);

      setInput("");
    }
  };

  // generating bot's response from matching user input and creating a response of pruduct title, price, & category

  const generateResponse = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const matchingProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery) ||
        product.category.toLowerCase().includes(lowerCaseQuery)
    );

    if (matchingProducts.length > 0) {
      // using [0] index for getting the top matching product

      const product = matchingProducts[0];
      return `Here is a product related to your query: 
      - **${product.title}**
      - Price: $${product.price}
      - Category: ${product.category}`;
    } else if (query.toLowerCase() == "hello") {
      return "Hello! How may i help you?";
    } else {
      return "I couldn't find any products matching your query. Please try searching for something else!";
    }
  };

  // handling reset button

  function handleReset() {
    setMessages([]);
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${
              message.sender === "user" ? "user-message" : "assistant-message"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Hello! Trouble finding the right product."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
