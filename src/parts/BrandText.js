import React from 'react';
import Button from '../elements/Button';
export default function BrandText(props) {
  return (
    <Button className='brand-icon-text fw-bold' type='link' href='/'>
      Abdul<span className='text-gray-900'> Rahman.</span>
    </Button>
  );
}
