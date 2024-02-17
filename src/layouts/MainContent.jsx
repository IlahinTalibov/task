import Container from "../components/customContainer";
import Header from "./header";
import Footer from "./footer";

const MainContent = ({ children }) => {
  return (
    <Container margin="0 auto" >
      {/* Height: 80px */}
      <Header />

      {/* Container: 1fr */}
      <main>{children}</main>

      {/* Height: 369px */}
      <Footer />
    </Container>
  );
};

export default MainContent;
