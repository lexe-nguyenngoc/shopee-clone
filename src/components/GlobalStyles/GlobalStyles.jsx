import PropTypes from 'prop-types';

import './Reset.scss';
import './Variables.scss';
import './GlobalStyles.scss';

const GlobalStyles = ({ children }) => {
  return children;
};

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
