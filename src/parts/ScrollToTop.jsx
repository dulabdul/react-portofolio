import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Button from '../elements/Button';
export default function ScrollToTop() {
  const [visible, setvisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setvisible(true);
    } else if (scrolled <= 300) {
      setvisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <Button
      onClick={scrollToTop}
      className='btn-scrollTop text-white'
      type='button'
      style={{ display: visible ? 'inline' : 'none' }}>
      <FaArrowUp />
    </Button>
  );
}
