import React from 'react';
import notFound from '../assets/images/notfound.jpg';
import Button from '../elements/Button';

export default function NotFound() {
  return (
    <section className='container mx-auto py-5 px-2 notfound'>
      <div className='d-grid col-12 justify-content-center align-items-center'>
        <div className='mx-auto d-flex justify-content-center'>
          <img
            className='w-full h-full mx-auto notfound-img'
            src={notFound}
            alt='Notfound images'
          />
        </div>
        <div className='grid grid-cols-1 text-center'>
          <h1 className='fs-1 fw-semibold mb-3'>
            Sorry, your destination not found
          </h1>

          <div>
            <Button
              type='link'
              href='/'
              hasShadow
              isPrimary
              className='btn'>
              Back To Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
