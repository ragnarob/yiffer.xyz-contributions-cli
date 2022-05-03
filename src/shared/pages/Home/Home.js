import React from 'react';
import { NavLink } from 'react-router-dom';
import { getSomeData } from '../../api';
import BackToHome from '../../components/BackToHome/BackToHome';
import Box from '../../components/Box/Box';
import useSsrData from '../../useSsrData';
import './styles.css';

export default function Home({ data }) {
  return (
    <>
      <h1>Contribute</h1>
      <BackToHome />

      <div className='home-box-container'>
        <NavLink to='/upload'>
          <Box elevation={1} hoverShadow className='home-box'>
            <h2>Upload a comic yourself</h2>
            <p>Add files yourself, in addition to specifying artist, tags, and more</p>
          </Box>
        </NavLink>

        <div className='home-box'>
          <h2>Suggest a comic</h2>
          <p>Add files yourself, in addition to specifying artist, tags, and more</p>
        </div>

        <div className='home-box'>
          <h2>Your contributions</h2>
          <p>Add files yourself, in addition to specifying artist, tags, and more</p>
        </div>
      </div>
    </>
  );
}