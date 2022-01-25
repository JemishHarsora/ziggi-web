import { Helmet } from "react-helmet";

const Meta = ({ metaData }) => {
  return (
    <Helmet>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
    </Helmet>
  );
};

export default Meta;
