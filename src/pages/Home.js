import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { Media } from 'reactstrap';
import { translate } from 'react-i18next';

import Content from '../components/Content';
import Navigation from '../components/Navigation';
import NavigationItem from '../components/NavigationItem';

import ApplicationCarousel from '../components/ApplicationCarousel';
import ApplicationHero from '../components/ApplicationHero';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import About from '../components/About';

const letterCarouselImage = require('../assets/images/letter_carousel.png');
const videoPartyCarouselImage = require('../assets/images/video_party_carousel.png');
const heroBackground = require('../assets/images/bg-6.jpg');
const letterIcon = require('../assets/images/letter_icon.svg');
const videoPartyIcon = require('../assets/images/video_party_icon.svg');

@translate()
export default class Home extends Component {
  static propTypes = {
    t: PropTypes.func,
  };

  constructor() {
    super();
    this.state = { navigationOpen: false };
    this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({ navigationOpen: !this.state.navigationOpen });
  }

  renderNavigation() {
    const { t } = this.props;
    return (
      <Navigation>
        <NavigationItem to="apps" offset={-85}>{t('navigation.apps')}</NavigationItem>
        <NavigationItem to="about" offset={-5}>{t('navigation.about')}</NavigationItem>
        <NavigationItem to="contact" offset={-85}>{t('navigation.contact')}</NavigationItem>
      </Navigation>
    );
  }

  render() {
    const { t } = this.props;

    return (
      <Content>
        {this.renderNavigation()}
        <Parallax
          bgImage={heroBackground }
          strength={500}>
          <ApplicationCarousel>
            <ApplicationHero
              image={letterCarouselImage}
              title={t('home.letter')}
              appStoreLink="http://itunes.apple.com/app/letter/id498506154"
              description={t('home.letter_teaser')}/>
            <ApplicationHero
              image={videoPartyCarouselImage}
              title={t('home.video_party')}
              description={t('home.video_party_teaser')}
              soon />
          </ApplicationCarousel>
        </Parallax>
        <Section
          id="apps"
          title={t('home.apps_title')}
          subtitle={t('home.apps_subtitle')}
        >
          <Media>
            <Media body>
              <h4>{t('home.letter')}</h4>
              <p>{t('home.letter_teaser')} <a href={t('home.letter_link')}>{t('common.more')}...</a></p>
            </Media>
            <Media right className="ml-3">
              <img src={letterIcon} style={ { width: '100px', height: '100px' } }/>
            </Media>
          </Media>
          <Media className="mt-3">
            <Media body>
              <h4>{t('home.video_party')}</h4>
              <p>{t('home.video_party_teaser')}</p>
            </Media>
            <Media right className="ml-3">
              <img src={videoPartyIcon} style={ { width: '100px', height: '100px' } }/>
            </Media>
          </Media>
        </Section>
        <About/>
        <ContactForm/>
      </Content>
    );
  }
}
