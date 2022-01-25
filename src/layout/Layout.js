// components
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

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
