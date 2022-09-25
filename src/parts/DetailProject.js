import React from 'react';
import Button from '../elements/Button';
import parse from 'html-react-parser';

export default function DetailProject({ projectRef, data }) {
  return (
    <>
      {' '}
      <section id='project' className='container-project pb-5' ref={projectRef}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 heading-konten mt-5 mb-2'>
              <h2 className='text-center mt-2 font-weight-bold text-white heading__tagline'>
                Check Out
              </h2>
              <h2 className='text-center mb-3 font-weight-bold text-white heading__tagline'>
                My Recent Project
              </h2>
              <hr />
            </div>
          </div>
          <div className='row'>
            {data.map((project, index) => {
              return (
                <div
                  className='col-lg-4 mb-4 col-sm-12'
                  key={`project-${index}`}
                >
                  <div className='content'>
                    <Button
                      type='link'
                      isExternal
                      target='_blank'
                      href={`${project.urlDemo}`}
                    >
                      <div className='content-overlay'></div>
                      <img
                        className='content-image'
                        src={project.imageUrl}
                        alt={project.title}
                      />

                      <div className='content-details fadeIn-bottom'>
                        <h3 className='content-title text-capitalize'>
                          {project.title}
                        </h3>
                        <h4 className='h6 content-tag text-capitalize'>
                          {project.stack}
                        </h4>
                        <hr />
                        <hr className='ms-3' />
                        <hr className='ms-3 hr-tiga' />
                        {parse(project.description)}

                        <Button
                          className='btn'
                          type='link'
                          target='_blank'
                          isLight
                          isSmall
                          isExternal
                          href={`${project.urlDemo}`}
                        >
                          <i
                            className='fas fa-external-link-alt'
                            style={{ fontSize: '16px' }}
                          ></i>{' '}
                          Demo
                        </Button>
                        <Button
                          className='btn ms-2'
                          type='link'
                          target='_blank'
                          isLight
                          isExternal
                          isSmall
                          href={`${project.urlGithub}`}
                        >
                          <i
                            className='fab fa-github'
                            style={{ fontSize: '16px' }}
                          ></i>{' '}
                          Github
                        </Button>
                      </div>
                    </Button>
                    <span className='text-center title-content'>
                      {project.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
