import Meta from "../components/MetaComponent";
import { SeoContentsForPages } from "../utils/staticData";

const About = () => {
  return (
    <div>
      <Meta metaData={SeoContentsForPages.aboutScreen} />
      AboutScreen
    </div>
  );
};

export default About;
