import React from 'react';
import htmlIcons from '../assets/images/icons/html.svg';
import css3Icons from '../assets/images/icons/css3.svg';
import javascriptIcons from '../assets/images/icons/javascript.svg';
import phpIcons from '../assets/images/icons/php.svg';
import bootstrapIcons from '../assets/images/icons/bootstrap.svg';
import gitIcons from '../assets/images/icons/git.svg';
import sassIcons from '../assets/images/icons/sass.svg';
import webpackIcons from '../assets/images/icons/webpack.png';
import nodejsIcons from '../assets/images/icons/nodejs.png';
import pwaIcons from '../assets/images/icons/pwa1.png';
import wordpressIcons from '../assets/images/icons/wordpress.png';
import reactIcons from '../assets/images/icons/react.svg';
export default function Skills() {
  return (
    <section id='skills' className='container-skills'>
      <div className='heading-konten mt-3'>
        <h2 className='text-white text-center'>What Skill & Tools</h2>
        <h2 className='text-white text-center'>I Have for You</h2>
        <hr />
      </div>
      <div className='container'>
        <div className='card bg-skills'>
          <div className='card-body '>
            <div className='row justify-content-center align-items-center img-icons'>
              <div className='col-auto'>
                <img
                  src={htmlIcons}
                  className='img-fluid img-svg-html'
                  alt='HTML Icons'
                />
              </div>
              <div className='col-auto'>
                <img
                  src={css3Icons}
                  className='img-fluid img-svg-css'
                  alt='CSS Icons'
                />
              </div>
              <div className='col-auto'>
                <img
                  src={javascriptIcons}
                  className='img-fluid img-svg-js'
                  alt='Javascript Icons'
                />
              </div>
              <div className='col-auto'>
                <img
                  src={phpIcons}
                  className='img-fluid img-svg-php'
                  alt='PHP Icons'
                />
              </div>
              <div className='col-auto'>
                <img
                  src={bootstrapIcons}
                  className='img-fluid img-svg-bts'
                  alt='Bootstrap Icons'
                />
              </div>
              <div className='col-auto'>
                <img
                  src={gitIcons}
                  className='img-fluid img-svg-git'
                  alt='GIT Icons'
                />
              </div>
              <div className='col-auto'>
                <img
                  src={sassIcons}
                  className='img-fluid img-svg-sass'
                  alt='SASS Icons'
                />
              </div>
              <div className='col-auto'>
                <img
                  src={webpackIcons}
                  className='img-fluid'
                  alt='Webpack Icons'
                />
              </div>
              <div className='col-auto'>
                <img
                  src={nodejsIcons}
                  className='img-fluid'
                  alt='NodeJs Icons'
                />
              </div>
              <div className='col-auto'>
                <img
                  src={pwaIcons}
                  className='img-fluid'
                  alt='Progressive Web Apps Icons'
                />
              </div>
              <div className='col-auto'>
                <img
                  src={wordpressIcons}
                  className='img-fluid'
                  alt='Wordpress Icons'
                />
              </div>
              <div className='col-auto'>
                <img src={reactIcons} className='img-fluid' alt='React Icons' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}