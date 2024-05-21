import { Helmet } from "react-helmet";

const centeredStyle = {
  textAlign: 'center',
  margin: '10px 0'
}

const NoPage = () => {
  return (
    <main>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <h1 style={centeredStyle}>Error</h1>
      <p style={centeredStyle}>Page not found</p>
    </main>
  );
};

export default NoPage;
