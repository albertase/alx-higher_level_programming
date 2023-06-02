import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://twitter.com/UkaegbuAlbert" target="_blank" rel="noreferrer">
      <BsTwitter />
      </a>
    </div>
    <div>
    <a href="https://web.facebook.com/" target="_blank" rel="noreferrer">
      <FaFacebookF />
      </a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/ukaegbu-albert-86b221208/" target="_blank" rel="noreferrer">
      <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;