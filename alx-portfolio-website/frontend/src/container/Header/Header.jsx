import React from 'react';
import { motion } from 'framer-motion';

import  AppWrap  from '../../Wrapper/AppWrap';
// import profile from '../../assets/profile.png'
import profile from '../../assets/portfolio.jpeg'
import circle from '../../assets/circle.svg'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import sass from '../../assets/sass.png'
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 0.5],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Albert</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Frontend Developer</p>
          {/* <p className="p-text">Freelancer</p> */}
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 6] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <div className="app__image">
         <img src={profile} alt="profile_bg" />
      </div>
      <motion.img
        whileInView={{ scale: [0, 1.4] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[react, redux, sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');