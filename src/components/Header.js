import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaDribbble, FaLinkedin } from 'react-icons/fa';
import { fadeIn } from '../variants';


const Header = () => {
  return(
<header className='py-8'>
<div className='container mx-auto'>

<div className='flex justify-end items-center'>

<motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
     
    </div>
{/* <button className='btn btn-sm'>Work with me</button> */}

</div>


</header>);
};

export default Header;
