import React, { useEffect, useRef } from 'react';
import HeroImg from '../assets/images/icons/coding1.png';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Button from '../elements/Button';
import Fade from 'react-reveal/Fade';
import {
  FaPhone,
  FaFileDownload,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
gsap.registerPlugin(TextPlugin);
export default function Hero({ contacsRef }) {
  const handlerScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 50,
      behavior: 'smooth',
    });
  };
  const haloRef = useRef();
  useEffect(() => {
    gsap.to(haloRef.current, { duration: 1.2, delay: 1, text: 'Hi,I am' });
  });
  const iam = useRef();
  useEffect(() => {
    gsap.to(iam.current, { duration: 1.2, delay: 1, text: 'I am ' });
  });

  const firstName = useRef();
  useEffect(() => {
    gsap.to(firstName.current, { duration: 1, delay: 2, text: 'Abdul' });
  });

  const lastName = useRef();
  useEffect(() => {
    gsap.to(lastName.current, { duration: 1, delay: 3, text: 'Rahman' });
  });
  const titleJob = useRef();
  useEffect(() => {
    gsap.to(titleJob.current, {
      duration: 1.2,
      delay: 4,
      text: 'Front-End Web Developer',
    });
  });
  const titleInfo = useRef();
  useEffect(() => {
    gsap.to(titleInfo.current, {
      duration: 3.5,
      delay: 5,
      text: 'Turning your idea into a cool produk with a good web developer. Iam here to help your to turning idea to amazing product',
    });
  });
  return (
    <div
      className='container home'
      id='home'>
      <div className='jumbotron bg-transparent'>
        <div className='row justify-content-evenly'>
          <div className='col-md-6 text-start'>
            <h1
              className='hallo fw-bold fs-1'
              ref={haloRef}></h1>

            <h2
              className='first-name fw-bold d-inline'
              ref={firstName}></h2>
            <h2
              className='last-name fw-bold d-inline'
              ref={lastName}></h2>
            <h3
              className='title-job fw-semibold fs-3'
              ref={titleJob}></h3>
            <p
              className='title-info text-capitalize'
              ref={titleInfo}></p>
          </div>
          <Fade
            right
            big
            delay={450}>
            <div className='col-md-6 mt-4'>
              <img
                src={HeroImg}
                alt='Hero'
                className='profile-img img-fluid'
              />
            </div>
          </Fade>
        </div>
      </div>
      <div className='support'>
        <div className='button-icons'>
          <Button
            type='button'
            className='btn'
            onClick={() => {
              handlerScroll(contacsRef.current);
            }}
            isTransparent
            hasShadow>
            <FaPhone style={{ fontSize: 24 }} />{' '}
            <span className='fw-semibold fs-6'>Contact Me</span>
          </Button>
          <Button
            className='btn ms-2'
            type='link'
            isExternal
            isPrimary
            target='_blank'
            href='https://drive.google.com/file/d/1g3n34nys_g7bdhCvznnvJqaDTa1s8lZ1/view?usp=share_link'>
            <FaFileDownload style={{ fontSize: 24 }} /> Get My CV
          </Button>
        </div>
        <div className='mb-3 pb-4 text-dark'>
          <div className='icon'>
            <Button
              className='active'
              type='link'
              isExternal
              target='_blank'
              href='https://www.instagram.com/dul.abdul21/'>
              <FaInstagram />
            </Button>
            <Button
              type='link'
              isExternal
              target='_blank'
              href='https://www.linkedin.com/in/abdul-rahman-2737131a1/'>
              <FaLinkedin />
            </Button>
            <Button
              type='link'
              isExternal
              target='_blank'
              href='https://github.com/dulabdul'>
              <FaGithub />
            </Button>
            <Button
              type='link'
              isExternal
              target='_blank'
              href='mailto:dulabdol1331@gmail.com'>
              <FaEnvelope />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
