import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className='flex items-center gap-5 bg-base-200 p-3'>
      <p className='text-base-100 bg-secondary p-2'>Latest</p>
      <Marquee className='space-x-15' pauseOnHover={true} speed={50}>
      <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... </p>
      <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;