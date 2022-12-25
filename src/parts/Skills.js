import React from 'react';
export default function Skills({ data }) {
  return (
    <section
      id='skills'
      className='container-skills'>
      <div className='heading-konten mt-3'>
        <h2 className='text-center'>What Skill & Tools</h2>
        <h2 className='text-center'>I Have for You</h2>
        <hr />
      </div>
      <div className='container'>
        <div className='card bg-skills'>
          <div className='card-body shadow'>
            <div className='row align-items-center justify-content-center img-icons'>
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                    <img
                      src={item.imageUrl}
                      className={`img-fluid`}
                      alt={item.name}
                    />
                  </div>
                );
              })}
              {/* <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={htmlIcons}
                  className='img-fluid img-svg-html'
                  alt='HTML Icons'
                />
              </div>
              <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={css3Icons}
                  className='img-fluid img-svg-css'
                  alt='CSS Icons'
                />
              </div>
              <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={javascriptIcons}
                  className='img-fluid img-svg-js'
                  alt='Javascript Icons'
                />
              </div>
              <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={phpIcons}
                  className='img-fluid img-svg-php'
                  alt='PHP Icons'
                />
              </div>
              <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={bootstrapIcons}
                  className='img-fluid img-svg-bts'
                  alt='Bootstrap Icons'
                />
              </div>
              <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={gitIcons}
                  className='img-fluid img-svg-git'
                  alt='GIT Icons'
                />
              </div>
              <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={sassIcons}
                  className='img-fluid img-svg-sass'
                  alt='SASS Icons'
                />
              </div>
              <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={webpackIcons}
                  className='img-fluid'
                  alt='Webpack Icons'
                />
              </div>
              <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={nodejsIcons}
                  className='img-fluid'
                  alt='NodeJs Icons'
                />
              </div>
              <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={pwaIcons}
                  className='img-fluid'
                  alt='Progressive Web Apps Icons'
                />
              </div>
              <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={wordpressIcons}
                  className='img-fluid'
                  alt='Wordpress Icons'
                />
              </div>
              <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={reactIcons}
                  className='img-fluid'
                  alt='React Icons'
                />
              </div>
              <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={mongoIcons}
                  className='img-fluid'
                  alt='MongoDB Icons'
                />
              </div>
              <div className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                <img
                  src={tailwindIcon}
                  className='img-fluid'
                  alt='MongoDB Icons'
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
