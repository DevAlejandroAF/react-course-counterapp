import PropTypes from 'prop-types';

const CounterApp = function({ value }) {
  return (
    <>
      <h1>Counter App</h1>
      <h2>{ value }</h2>
      <button>
        +1
      </button>
    </>
  );
}

CounterApp.propsTypes = {
  value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
  value: 0
}

export default CounterApp;