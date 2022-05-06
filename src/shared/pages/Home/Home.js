import React from 'react';
import { NavLink } from 'react-router-dom';
import { getSomeData } from '../../api';
import BackToHome from '../../components/BackToHome/BackToHome';
import Box from '../../components/Box/Box';
import useSsrData from '../../useSsrData';
import './home.scoped.scss';

export default function Home({ data }) {
  return (
    <>
      <h1 className="text-align-center">Contribute</h1>
      <BackToHome />

      <div className='home-box-container'>
        <NavLink to='/upload'>
          <Box elevation={2} hoverShadow className='home-box'>
            <h2>Upload a comic yourself</h2>
            <p>Add files yourself, in addition to specifying artist, tags, and more</p>
          </Box>
        </NavLink>

        <NavLink to='/suggest-comic'>
          <Box elevation={2} hoverShadow className='home-box'>
            <h2>Suggest a comic</h2>
            <p>Bla bla text. Bla bla text. Bla bla text. Bla bla text. </p>
          </Box>
        </NavLink>

        <NavLink to='/suggest-comic'>
          <Box elevation={2} hoverShadow className='home-box'>
            <h2>Your contributions</h2>
            <p>Bla bla text. Bla bla text. Bla bla text. Bla bla text. </p>
          </Box>
        </NavLink>

        <NavLink to='/etc'>
          <Box elevation={2} hoverShadow className='home-box'>
            <h2>Stuff</h2>
            <p>Bla bla text. Bla bla text. Bla bla text. Bla bla text. </p>
          </Box>
        </NavLink>
      </div>
    </>
  );
}