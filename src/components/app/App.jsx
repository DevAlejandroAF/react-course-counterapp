import PropTypes from 'prop-types';

const App = function({ title }) {
  return (
    <>
      <h1>{ title }</h1>
    </>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
}

App.defaultProps = {
  title: "There's no title",
}

export default App;
