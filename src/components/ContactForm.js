import React from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ id, className, style }) => (
  <div id={id} className={[className, 'contact-form'].filter((c) => c).join(' ')} style={style}>
    ContactForm
  </div>
);

ContactForm.propTypes = {
  /**
  * Unique id of the component
  */
  id: PropTypes.string,
  /**
  * Additional class name to be added
  */
  className: PropTypes.string,
  /**
   * Custom styles
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

ContactForm.defaultProps = {
  id: undefined,
  className: undefined,
  style: undefined,
};

export default ContactForm;
