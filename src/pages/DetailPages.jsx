import React, { useEffect } from 'react';
import DetailProject from '../parts/DetailProject';
import Header from '../parts/Header';
import landingPage from '../json/landingPage.json';
import Footer from '../parts/Footer';
import ScrollToTop from '../parts/ScrollToTop';
export default function DetailPages() {
  useEffect(() => {
    document.title = 'Portofolio | Detail';
  });
  return (
    <>
      <header>
        <Header
          isCentered
          data={landingPage.hero}
        />
      </header>
      <main>
        <DetailProject data={landingPage.categories} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
