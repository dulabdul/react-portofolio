import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import Button from '../elements/Button';
import 'react-image-lightbox/style.css';
export default function Cert({ data, certRef, hideNavRef }) {
  const [indexOfImages, setIndexOfImages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const openModalAndSetIndex = (index) => {
    setIndexOfImages(index);
    setShowModal(true);
    const ref = hideNavRef.current;
    ref.style.display = 'none';
    return;
  };
  const modalOpenHandler = () => {
    setShowModal(true);
    const ref = hideNavRef.current;
    ref.style.display = 'none';
  };
  useEffect(() => {
    if (showModal === false) {
      const ref = hideNavRef.current;
      ref.style.display = 'block';
      return;
    }
  }, [showModal, hideNavRef]);

  return (
    <section id='project' ref={certRef} className='container-project pb-5'>
      <div className='container cert-section'>
        <div className='row'>
          <div className='col-12 heading-konten mb-2'>
            <h2 className='text-center mt-2 font-weight-bold text-white heading__tagline'>
              Certificate
            </h2>
            <hr />
          </div>
          <div className='row'>
            {data.map((cert, index) => {
              return (
                <div className='col-md-4 mb-3' key={`certificate-${index}`}>
                  <div>
                    <Button
                      isExternal
                      type='link'
                      href={cert.credentialUrl}
                      target='_blank'
                    >
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        onClick={() => openModalAndSetIndex(index)}
                        className='project-img img-fluid'
                      />
                    </Button>
                  </div>
                  <p className='font-weight-bold cert-section__title text-capitalize'>
                    {cert.title}
                    <span className='d-block font-weight-light text-white text-capitalize'>
                      {cert.platform}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <button
              type='button'
              onClick={() => {
                modalOpenHandler();
              }}
            >
              Show Lightbox
            </button>
          </div>
        </div>
        {showModal && (
          <Lightbox
            mainSrc={data[indexOfImages].imageUrl}
            nextSrc={data[(indexOfImages + 1) % data.length].imageUrl}
            prevSrc={
              data[(indexOfImages + data.length - 1) % data.length].imageUrl
            }
            onCloseRequest={() => setShowModal(false)}
            onMovePrevRequest={() =>
              setIndexOfImages((indexOfImages + data.length - 1) % data.length)
            }
            onMoveNextRequest={() =>
              setIndexOfImages((indexOfImages + data.length + 1) % data.length)
            }
          />
        )}
      </div>
    </section>
  );
}
