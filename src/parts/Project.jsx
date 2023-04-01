import React, { useEffect, useState, useMemo } from 'react';
import Button from '../elements/Button';
import parse from 'html-react-parser';
import Fade from 'react-reveal/Fade';
export default function Project({ projectRef, data }) {
  const [projectList, setProjectList] = useState();
  const [selectedCategory, setSelectedCategory] = useState('allWork');
  useEffect(() => {
    setProjectList(data);
  }, [data]);

  function filteredProject() {
    if (!selectedCategory) {
      return projectList;
    }
    return projectList?.filter((item) => item.name === selectedCategory);
  }

  let filterList = useMemo(filteredProject, [selectedCategory, projectList]);

  function handleChangeCategory(e) {
    setSelectedCategory(e.target.value);
  }

  let filterMap = filterList?.map((item) =>
    item?.projects.sort((a, b) => b.isTop - a.isTop)
  );
  let filterAllWorks = projectList?.map((item) =>
    item?.projects.sort((a, b) => b.isTop - a.isTop)
  );

  return (
    <>
      {' '}
      <section
        id='project'
        className='container-project pb-5'
        ref={projectRef}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-6 heading-konten mb-2'>
              <h2 className='text-start mt-2 font-weight-bold heading__tagline'>
                Check Out
              </h2>
              <h2 className='text-start mb-3 font-weight-bold heading__tagline'>
                My Recent Project
              </h2>
            </div>
            <div className='col-6 d-flex justify-content-end mb-2'>
              <div className='row project_categories text-center'>
                <button
                  onClick={handleChangeCategory}
                  value='allWork'
                  className={`btn select_categories col text-capitalize ${
                    selectedCategory === 'allWork' ? 'active text-white' : ''
                  }`}>
                  All Works
                </button>
                {data?.map((item, index) => {
                  return (
                    <button
                      key={index}
                      onClick={handleChangeCategory}
                      value={item.name}
                      className={`btn select_categories col text-capitalize ${
                        selectedCategory === item.name
                          ? 'active text-white'
                          : ''
                      }`}>
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='row'>
            {selectedCategory === 'allWork'
              ? filterAllWorks?.slice(0, 2).map((item) => {
                  return item?.slice(0, 6).map((project, index) => {
                    return (
                      <div
                        className='col-lg-4 mb-4 col-sm-12'
                        key={`project-${project.id}`}>
                        <Fade
                          bottom
                          delay={300 * index}>
                          <div className='content'>
                            <Button
                              type='link'
                              isExternal
                              target='_blank'
                              href={`${project.urlDemo}`}>
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
                                <div>
                                  <Button
                                    className='btn'
                                    type='link'
                                    target='_blank'
                                    isLight
                                    isSmall
                                    isExternal
                                    href={`${project.urlDemo}`}>
                                    <i
                                      className='fas fa-external-link-alt'
                                      style={{ fontSize: '16px' }}></i>{' '}
                                    Demo
                                  </Button>
                                  {project.urlGithub === null ? (
                                    ''
                                  ) : (
                                    <Button
                                      className='btn ms-2'
                                      type='link'
                                      target='_blank'
                                      isLight
                                      isExternal
                                      isSmall
                                      href={`${project.urlGithub}`}>
                                      <i
                                        className='fab fa-github'
                                        style={{ fontSize: '16px' }}></i>{' '}
                                      Github
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </Button>
                            <span className='text-center title-content'>
                              {project.title}
                            </span>
                          </div>
                        </Fade>
                      </div>
                    );
                  });
                })
              : filterList?.map((item, index) => {
                  return item?.projects?.length === 0 ? (
                    <div className='project_notfound'>
                      <h1 className='text-center my-4'>Not Found Projects!</h1>
                    </div>
                  ) : (
                    filterMap.map((item) =>
                      item.slice(0, 9).map((project, index) => {
                        return (
                          <div
                            className='col-lg-4 mb-4 col-sm-12'
                            key={`project-${project.id}`}>
                            <Fade
                              bottom
                              delay={300 * index}>
                              <div className='content'>
                                <Button
                                  type='link'
                                  isExternal
                                  target='_blank'
                                  href={`${project.urlDemo}`}>
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
                                      href={`${project.urlDemo}`}>
                                      <i
                                        className='fas fa-external-link-alt'
                                        style={{ fontSize: '16px' }}></i>{' '}
                                      Demo
                                    </Button>
                                    {project.urlGithub === null ? (
                                      ''
                                    ) : (
                                      <Button
                                        className='btn ms-2'
                                        type='link'
                                        target='_blank'
                                        isLight
                                        isExternal
                                        isSmall
                                        href={`${project.urlGithub}`}>
                                        <i
                                          className='fab fa-github'
                                          style={{ fontSize: '16px' }}></i>{' '}
                                        Github
                                      </Button>
                                    )}
                                  </div>
                                </Button>
                                <span className='text-center title-content'>
                                  {project.title}
                                </span>
                              </div>
                            </Fade>
                          </div>
                        );
                      })
                    )
                  );
                })}

            <div className='col-12 m-auto text-center'>
              <Button
                className='btn'
                isTransparent
                isExternal
                type='link'
                isLarge
                href='/detail'
                target='_blank'>
                Show All
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
