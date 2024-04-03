import PropTypes from 'prop-types';

const App = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

App.defaultProps = {
  name: 'No name',
  //title: "There's no title",
  subTitle: "There's no subtitle"
}

export default App;
