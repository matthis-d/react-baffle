import React from 'react';
import PropTypes from 'prop-types';
import baffle from 'baffle';

class BaffleText extends React.Component {
  constructor(props) {
    super(props);
    this.textElement = React.createRef();
  }

  componentDidMount() {
    const { text, duration, delay } = this.props;
    setTimeout(() => {
      const b = baffle(this.textElement.current).start();
      b.text(() => text).reveal(duration);
    }, delay);
  }

  render() {
    return <span ref={this.textElement} />;
  }
}

BaffleText.propTypes = {
  text: PropTypes.string.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

BaffleText.defaultProps = {
  duration: 3000,
  delay: 3000,
};

export default BaffleText;
