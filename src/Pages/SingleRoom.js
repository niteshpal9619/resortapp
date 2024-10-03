import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RoomContext } from '../context';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

export default function SingleRoom() {
  const { slug } = useParams(); // Accessing the slug from the URL
  const { getRoom } = useContext(RoomContext); // Accessing RoomContext
  const room = getRoom(slug); // Getting the room data based on the slug

  if (!room) {
    return (
      <div className='error'>
        <h3>No such room could be found...</h3>
        <Link to='/rooms' className='btn-primary'>
          Back to rooms
        </Link>
      </div>
    );
  }

  const {name,description,capacity,size,price,extras,breakfast,pets,images}=room
  return <Hero hero='roomsHero'>
    <Banner title={`${name} room`}>
      <Link to="/rooms" className='btn-primary'>
        back to rooms
      </Link>
    </Banner>
  </Hero>
}
