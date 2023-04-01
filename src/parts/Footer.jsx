import React from 'react';
import { FaHeart } from 'react-icons/fa';
export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className='footer p-3'>
      <p className='text-center fw-light fs-6'>
        &copy;2021 - {year} Develop by abdulrahman <FaHeart />
      </p>
    </footer>
  );
}
