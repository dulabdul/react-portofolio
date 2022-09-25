import React from 'react';
import DetailProject from '../parts/DetailProject';
import Header from '../parts/Header';
import landingPage from '../json/landingPage.json';
import Footer from '../parts/Footer';

export default function DetailPages() {
  return (
    <>
      <header>
        <Header isCentered />
      </header>
      <main>
        <DetailProject data={landingPage.project} />
      </main>
      <Footer />
    </>
  );
}
