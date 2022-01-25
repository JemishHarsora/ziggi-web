// components
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import bgImage from "../assets/images/bgImage.png";
const Layout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
};

export default Layout;
