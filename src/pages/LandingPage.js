import React, { Component } from 'react';
import Header from '../parts/Header';
import Project from '../parts/Project';
import Skills from '../parts/Skills';
import landingPage from '../json/landingPage.json';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Skills />
        <Project data={landingPage.project} />
      </>
    );
  }
}
