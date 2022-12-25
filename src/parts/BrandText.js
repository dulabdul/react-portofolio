import React from 'react';
import Button from '../elements/Button';
export default function BrandText({ firstName, lastName }) {
  return (
    <Button
      className='brand-icon-text fw-bold text-capitalize'
      type='link'
      href='/'>
      {firstName}
      <span className='text-gray-900'> {lastName}.</span>
    </Button>
  );
}
