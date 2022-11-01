import React from 'react'
import './ReactPlayer.css'
import ReactPlayer from 'react-player'

export default function Section3() {
  return (
    <>
    <section className='container'>
        <div className='innerContainer'>
            <div className='player-wrapper'>
                <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=FsiGHpZ_F70&ab_channel=BrandOutlaw'
                width='100%'
                height='100%'
                controls={true}
                />
            </div>
        </div>
    </section>

    </>

  )
}
