import React from 'react';
import './ReactPlayer.css';
import ReactPlayer from 'react-player';

export const Section2 = () => {
  return (
    <>
      <section className="container">
        <div className="innerContainer">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=tC7WfWZ3ZMg&ab_channel=BrandOutlaw"
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      </section>
    </>
  );
};
