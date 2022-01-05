import React from 'react';
import PropTypes from 'prop-types';

import './ApplicationHero.scss';

const appStoreButton = require('../assets/images/app_store_button.svg');
const appStoreButtonSoon = require('../assets/images/app_store_button_soon.svg');

function ApplicationHero({
  image, title, description, soon, link, appStoreLink,
}) {
  return (
    <div className="application-hero">
      <div className="application-hero-image"><img src={image} alt={title} /></div>
      <div className="application-hero-teaser">
        { link ? (<h1><a href={link}>{title}</a></h1>) : (<h1>{title}</h1>)}
        { link ? (<p><a href={link}>{description}</a></p>) : (<p>{description}</p>)}
        {soon ? (<img src={appStoreButtonSoon} alt="App Store" />) : (<a href={appStoreLink}><img src={appStoreButton} alt="App Store" /></a>) }
      </div>
    </div>
  );
}

ApplicationHero.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  soon: PropTypes.bool,
  link: PropTypes.string,
  appStoreLink: PropTypes.string,
};

ApplicationHero.defaultProps = {
  soon: false,
  link: undefined,
  appStoreLink: undefined,
};

export default ApplicationHero;
