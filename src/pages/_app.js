import Layout from "../components/Layout/Layout"
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css"

export default function App({
  Component, pageProps}) {
  return (
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
  );
}