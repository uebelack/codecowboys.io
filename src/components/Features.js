import React from 'react';
import PropTypes from 'prop-types';

function Features({ children }) {
  return (
    <div className="features">
      {children}
    </div>
  );
}

Features.propTypes = {
  children: PropTypes.node,
};

Features.defaultProps = {
  children: undefined,
};

export default Features;
