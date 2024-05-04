import { Helmet } from "react-helmet";

const NoPage = () => {
  return (
    <main>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <h1>Error</h1>
      <p>Page not found</p>
    </main>
  );
};

export default NoPage;
