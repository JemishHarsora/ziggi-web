import Meta from "../components/MetaComponent";
import { SeoContentsForPages } from "../utils/staticData";

const LandingScreen = () => {
  return (
    <div>
      <Meta metaData={SeoContentsForPages.landingScreen} />
      Home Page
    </div>
  );
};

export default LandingScreen;
