import React from 'react';
import Button from '../elements/Button';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
export default function Contacs({ contacsRef }) {
  return (
    <section
      ref={contacsRef}
      id='contact'
      className='container-contact'>
      <div className='container-md'>
        <div className='row'>
          <div className='col-12 heading-konten'>
            <h2 className='text-center fs-1 font-weight-bold heading__tagline mt-2'>
              Get In Touch
            </h2>
            <hr />
          </div>
          <div
            className='col-12 section_head_contact text-start mt-5'
            data-aos-once='true'
            data-aos='fade-right'>
            <p className='title-contact font-weight-light'>
              <span>Contact</span> Information
            </p>
          </div>
        </div>
        <div className='row section__contact'>
          <div
            className='col-md d-flex mt-3'
            data-aos-once='true'
            data-aos='fade-up-right'>
            <div className='icon-contact'>
              <Button
                type='link'
                isExternal
                href='https://wa.me/+6289675293838'
                target='_blank'>
                <FaPhone />
              </Button>
            </div>
            <div className=' contact-text w-75 ml-2'>
              <p className='font-weight-normal fs-4 text-start title-contact'>
                Telephone
              </p>
              <p className='font-weight-light text-start'>+6289675293838</p>
            </div>
          </div>
          <div
            className='col-md d-flex mt-3'
            data-aos-once='true'
            data-aos='fade-up'>
            <div className='icon-contact'>
              <Button
                href='mailto:dulabdol1331@gmail.com'
                type='link'
                isExternal
                target='_blank'>
                <FaEnvelope />
              </Button>
            </div>
            <div className='contact-text w-75 ml-2'>
              <p className='font-weight-normal fs-4 text-start title-contact'>
                Email
              </p>
              <p className='font-weight-light text-start'>
                dulabdol331@gmail.com
              </p>
            </div>
          </div>
          <div
            className='col-md d-flex mt-3'
            data-aos-once='true'
            data-aos='fade-up-left'>
            <div className='icon-contact'>
              <FaMapMarkerAlt />
            </div>
            <div className='contact-text w-75 ml-2'>
              <p className='font-weight-normal fs-4 text-start title-contact'>
                Address
              </p>
              <p className='font-weight-light fs-6 text-start'>
                DKI Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-12 section_head_sosmed text-start'
            data-aos-once='true'
            data-aos='fade-right'>
            <p className='title-contact font-weight-italic'>
              <span>Sosial Media</span>Information
            </p>
          </div>
        </div>
        <div className='pt-30'>
          <div className='col-12 social-media-container mb-5 text-center shadow'>
            <ul className='social-media-link'>
              <li
                data-aos-once='true'
                data-aos='fade-up-right'>
                <Button
                  href='https://www.instagram.com/dul.abdul21/'
                  type='link'
                  isExternal
                  target='_blank'>
                  <FaInstagram />
                </Button>
              </li>
              <li
                data-aos-once='true'
                data-aos='fade-up'>
                <Button
                  href='https://www.linkedin.com/in/abdul-rahman-2737131a1/'
                  type='link'
                  isExternal
                  target='_blank'>
                  <FaLinkedin />
                </Button>
              </li>
              <li
                data-aos-once='true'
                data-aos='fade-up-left'>
                <Button
                  href='https://github.com/dulabdul'
                  target='_blank'
                  type='link'
                  isExternal>
                  <FaGithub />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
