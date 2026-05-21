import React from 'react'
import spotify from '../assets/spotify.png'
import appleMusic from '../assets/appleMusic.png'

const StreamAdvert = () => {
  return (
    <div className='bg-[#ff9752] py-12'>
      <h1 className='tracking-widest text-3xl text-center font-light'>STREAM MUSIC</h1>

        <div className='flex justify-center mt-4 space-x-4'>
            <a href="https://open.spotify.com/search/team%20eternity%20ghana" target="_blank" rel="noopener noreferrer">
                <img src={spotify} alt="Spotify" className='w-30 md:w-40' />
            </a>
            <a href="https://www.apple.com/us/search/team-eternity?src=globalnav" target="_blank" rel="noopener noreferrer">
                <img src={appleMusic} alt="Apple Music" className='w-30 md:w-40' />
            </a>

        </div>
    </div>
  )
}

export default StreamAdvert
