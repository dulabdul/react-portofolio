import React, { useRef, useEffect } from 'react';
import Header from '../parts/Header';
import Project from '../parts/Project';
import Skills from '../parts/Skills';
import landingPage from '../json/landingPage.json';
import Cert from '../parts/Cert';
import Contacs from '../parts/Contacs';
import Hero from '../parts/Hero';
import Footer from '../parts/Footer';
import ScrollToTop from '../parts/ScrollToTop';
export default function LandingPage() {
  useEffect(() => {
    document.title = 'Portofolio | Home';
  });
  const projectRef = useRef(null);
  const certRef = useRef(null);
  const hideNavRef = useRef(null);
  const contacsRef = useRef(null);
  return (
    <>
      <header>
        <Header
          hideNavRef={hideNavRef}
          certRef={certRef}
          projectRef={projectRef}
          contacsRef={contacsRef}
          data={landingPage.hero}
        />
        <Hero
          contacsRef={contacsRef}
          data={landingPage.hero}
        />
      </header>
      <main>
        <Skills data={landingPage.skills} />
        <Project
          projectRef={projectRef}
          data={landingPage.categories}
        />
        <Cert
          hideNavRef={hideNavRef}
          certRef={certRef}
          data={landingPage.certificate}
        />
        <Contacs
          contacsRef={contacsRef}
          data={landingPage.hero}
        />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
