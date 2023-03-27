import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react"

function MyButton() {
  const [borderColor, setBorderColor] = useState("#000"); // Set initial color
  const colors = ["red", "blue", "purple"]; // Define array of colors
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Choose random color from array
      setBorderColor(randomColor);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  
  const boxShadow = `2px 2px 10px ${borderColor}`;

  return (
    <Button style={{border: `2px solid ${borderColor}`,
  backgroundColor: "transparent", boxShadow, color:"white"}} size={{
    base:"sm",
    md:"lg"}}>Learn More</Button>
  );
}

export default MyButton;