import Navbar from "./Navbar"
import Footer from "./Footer"
import { AuthProvider } from "./AuthContext";
import { ColorModeProvider } from "../../hooks/useColorMode"
import Head from "next/head"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ColorModeProvider>
      <AuthProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
      </AuthProvider>
      </ColorModeProvider>
    </>
  );
};

export default Layout;
      <Head>
      <title>Darren Medrano</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon"/>
      </Head>