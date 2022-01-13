import React, { useEffect } from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import configuration from './configuration';

import Home from './pages/Home';
import Letter from './pages/Letter';
import Imprint from './pages/en/Imprint';
import Privacy from './pages/en/Privacy';
import Impressum from './pages/de/Impressum';
import Datenschutz from './pages/de/Datenschutz';
import NotFound from './pages/NotFound';

import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import { language, messages } from './i18n';

import './styles/base.scss';

function Routes() {
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (['Space', 'PageDown', 'PageUp'].indexOf(event.code) >= 0) {
        event.preventDefault();
      }
    });
  }, []);

  return (
    <IntlProvider locale={language} defaultLocale="en" messages={messages}>
      <GoogleReCaptchaProvider reCaptchaKey={configuration.RECAPTCHA_SITE_KEY}>
        <>
          <CookieConsent />
          <ReactRoutes>
            <Route path="/de/impressum" element={<Impressum />} />
            <Route path="/de/datenschutz" element={<Datenschutz />} />
            <Route path="/de/briefe" element={<Letter />} />
            <Route path="/de" element={<Home />} />
            <Route path="/en/imprint" element={<Imprint />} />
            <Route path="/en/privacy" element={<Privacy />} />
            <Route path="/en/letter" element={<Letter />} />
            <Route path="/en" element={<Home />} />
            <Route element={<NotFound />} />
          </ReactRoutes>
          <Footer />
        </>
      </GoogleReCaptchaProvider>
    </IntlProvider>
  );
}

export default Routes;