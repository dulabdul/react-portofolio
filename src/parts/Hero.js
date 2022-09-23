import React, { useEffect, useRef } from 'react';
import HeroImg from '../assets/images/icons/coding1.png';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Button from '../elements/Button';
import {
  FaPhone,
  FaFileDownload,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
gsap.registerPlugin(TextPlugin);
export default function Hero() {
  const haloRef = useRef();
  useEffect(() => {
    gsap.to(haloRef.current, { duration: 1.2, delay: 1, text: 'Hi,Iam' });
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
    <div className='container home' id='home'>
      <div className='jumbotron bg-transparent'>
        <div className='row justify-content-evenly'>
          <div className='col-md-6 text-start'>
            <h1
              className='hallo text-white font-weight-bold'
              ref={haloRef}
            ></h1>
            <span
              className='first-name font-weight-bold'
              ref={firstName}
            ></span>
            <p className='last-name font-weight-bold' ref={lastName}></p>
            <h2
              className='title-job text-white font-weight-normal mt-2'
              ref={titleJob}
            ></h2>
            <p className='title-info text-capitalize' ref={titleInfo}></p>
          </div>
          <div className='col-md-6 mt-4'>
            <img src={HeroImg} alt='Hero' className='profile-img img-fluid' />
          </div>
        </div>
      </div>
      <div className='support'>
        <div className='button-icons'>
          <Button className='btn' type='link' isTransparent hasShadow href='/'>
            <FaPhone style={{ fontSize: 24 }} /> Contact Me
          </Button>
          <Button
            className='btn ms-2'
            type='link'
            isExternal
            isPrimary
            target='_blank'
            href='https://www.youtube.com/'
          >
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
              href='https://www.instagram.com/ar.dev21__/'
            >
              <FaInstagram />
            </Button>
            <Button
              type='link'
              isExternal
              target='_blank'
              href='https://www.linkedin.com/in/abdul-rahman-2737131a1/'
            >
              <FaLinkedin />
            </Button>
            <Button
              type='link'
              isExternal
              target='_blank'
              href='https://github.com/dulabdul'
            >
              <FaGithub />
            </Button>
            <Button
              type='link'
              isExternal
              target='_blank'
              href='mailto:dulabdol1331@gmail.com'
            >
              <FaEnvelope />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
