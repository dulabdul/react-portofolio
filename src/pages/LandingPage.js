import React, { useRef } from 'react';
import Header from '../parts/Header';
import Project from '../parts/Project';
import Skills from '../parts/Skills';
import landingPage from '../json/landingPage.json';
import Cert from '../parts/Cert';

export default function LandingPage() {
  const projectRef = useRef(null);
  const certRef = useRef(null);
  const hideNavRef = useRef(null);
  return (
    <>
      <Header
        hideNavRef={hideNavRef}
        certRef={certRef}
        projectRef={projectRef}
      />
      <Skills />
      <Project projectRef={projectRef} data={landingPage.project} />
      <Cert
        hideNavRef={hideNavRef}
        certRef={certRef}
        data={landingPage.certificate}
      />
    </>
  );
}
