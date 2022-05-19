import React from 'react';
import { NavLink } from 'react-router-dom';
import BackToHome from '../../components/BackToHome/BackToHome';
import Box from '../../components/Box/Box';
import './home.scoped.scss';

export default function Home({ data }) {
  return (
    <>
      <h1 className="text-align-center">Contribute</h1>
      <BackToHome marginTop="0.5rem" />

      <div className="home-box-container">
        <NavLink to="/upload">
          <Box elevation={2} hoverShadow className="home-box">
            <h2>Upload a comic yourself</h2>
            <p>Add files yourself, in addition to specifying artist, tags, and more</p>
          </Box>
        </NavLink>

        <NavLink to="/suggest-comic">
          <Box elevation={2} hoverShadow className="home-box">
            <h2>Suggest a comic</h2>
            <p>Bla bla text. Bla bla text. Bla bla text. Bla bla text. </p>
          </Box>
        </NavLink>

        <NavLink to="/scoreboard">
          <Box elevation={2} hoverShadow className="home-box">
            <h2>Contributions scoreboard</h2>
            <p>Bla bla text. Bla bla text. Bla bla text. Bla bla text. </p>
          </Box>
        </NavLink>

        <NavLink to="/become-a-mod">
          <Box elevation={2} hoverShadow className="home-box">
            <h2>Become a mod</h2>
            <p>Bla bla text. Bla bla text. Bla bla text. Bla bla text. </p>
          </Box>
        </NavLink>

        <NavLink to="/feedback">
          <Box elevation={2} hoverShadow className="home-box">
            <h2>Submit feedback</h2>
            <p>Bla bla text. Bla bla text. Bla bla text. Bla bla text. </p>
          </Box>
        </NavLink>

        <NavLink to="/demo-data-fetch/Cats Can Fetch">
          <Box elevation={2} hoverShadow className="home-box">
            <h2 style={{ color: 'red' }}>Demo to illustrate data fetching</h2>
            <p>Comic name Cats Can Fetch</p>
          </Box>
        </NavLink>

        <NavLink to="/demo-data-fetch/Comic Relief">
          <Box elevation={2} hoverShadow className="home-box">
            <h2 style={{ color: 'red' }}>Demo to illustrate data fetching</h2>
            <p>Comic name Comic Relief</p>
          </Box>
        </NavLink>
      </div>
    </>
  );
}
