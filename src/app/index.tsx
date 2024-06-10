/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { Header } from './features/Header';
import { Footer } from './features/Footer';
import { UsuariosPage } from './pages/UsuariosPage';
import { RamasPage } from './pages/RamasPage';
import BackgroundImg from './features/BackgroundImg';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Header />
      <BackgroundImg />
      <Routes>
        <Route path="/UsuariosPage" element={<UsuariosPage />} />
        <Route path="/RamasPage" element={<RamasPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}
