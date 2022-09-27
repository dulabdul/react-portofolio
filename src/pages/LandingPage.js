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
    window.scrollTo(0, 0);
  });
  const projectRef = useRef(null);
  const certRef = useRef(null);
  const hideNavRef = useRef(null);
  const contacsRef = useRef(null);
  return (
    <>
      <ScrollToTop />
      <header>
        <Header
          hideNavRef={hideNavRef}
          certRef={certRef}
          projectRef={projectRef}
          contacsRef={contacsRef}
        />
        <Hero contacsRef={contacsRef} />
      </header>
      <main>
        <Skills />
        <Project projectRef={projectRef} data={landingPage.project} />
        <Cert
          hideNavRef={hideNavRef}
          certRef={certRef}
          data={landingPage.certificate}
        />
        <Contacs contacsRef={contacsRef} />
      </main>
      <Footer />
    </>
  );
}
