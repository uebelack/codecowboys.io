import React from 'react';
import PropTypes from 'prop-types';

function Feature({
  title, description, icon,
}) {
  return (
    <div className="feature">
      <div className="feature-wrapper">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="feature-icon">
        {icon}
      </div>
    </div>
  );
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default Feature;
