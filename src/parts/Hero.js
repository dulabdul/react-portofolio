import React, { useEffect, useRef } from 'react';
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
export default function Hero({ contacsRef, data }) {
  const { firstName, lastName, titleJob, description, CV, imageUrl } = data;
  const { instragam, linkedin, github, emailUrl } = data.contactsUrl;

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

  const gsapFirstName = useRef();
  useEffect(() => {
    gsap.to(gsapFirstName.current, { duration: 1, delay: 2, text: firstName });
  });

  const gsapLastName = useRef();
  useEffect(() => {
    gsap.to(gsapLastName.current, { duration: 1, delay: 3, text: lastName });
  });
  const gsapTitleJob = useRef();
  useEffect(() => {
    gsap.to(gsapTitleJob.current, {
      duration: 1.2,
      delay: 4,
      text: titleJob,
    });
  });
  const gsapTitleInfo = useRef();
  useEffect(() => {
    gsap.to(gsapTitleInfo.current, {
      duration: 3.5,
      delay: 5,
      text: description,
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
              className='first-name fw-bold d-inline text-capitalize'
              ref={gsapFirstName}></h2>{' '}
            <h2
              className='last-name fw-bold d-inline text-capitalize'
              ref={gsapLastName}></h2>
            <h3
              className='title-job fw-semibold fs-3 text-capitalize'
              ref={gsapTitleJob}></h3>
            <p
              className='title-info text-capitalize'
              ref={gsapTitleInfo}></p>
          </div>
          <Fade
            right
            big
            delay={450}>
            <div className='col-md-6 mt-4'>
              <img
                src={imageUrl}
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
            href={CV}>
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
              href={instragam}>
              <FaInstagram />
            </Button>
            <Button
              type='link'
              isExternal
              target='_blank'
              href={linkedin}>
              <FaLinkedin />
            </Button>
            <Button
              type='link'
              isExternal
              target='_blank'
              href={github}>
              <FaGithub />
            </Button>
            <Button
              type='link'
              isExternal
              target='_blank'
              href={emailUrl}>
              <FaEnvelope />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
