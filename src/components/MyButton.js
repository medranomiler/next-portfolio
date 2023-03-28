import { Button } from "@chakra-ui/react"

function MyButton() {
  return (
    <Button style={{
  backgroundColor: "transparent", color:"white", animation: "glow 2s ease-in-out infinite"}} size={{
    base:"sm",
    md:"lg"}} transisition="all 0.3s ease" _hover={{  transform: "translate3d(0, -10px, 22px)" }}>Learn More</Button>
  );
}

export default MyButton;