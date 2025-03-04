'use client'
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const SlickCarousel = ({ happyClients }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (happyClients && happyClients.length !== 0 &&
    <div className=' rounded-md'>
      <Slider {...settings}>
        {happyClients.map((happyClient) => (
          <div key={happyClient._id} className='p-1 sm:p-2'>
            <div className='relative p-1 sm:p-2 bg-white shadow-md rounded-md ' key={happyClient._id}>
              <Image src={happyClient.image} alt='image' width={900} height={1200} className='rounded-md' />
            </div>
          </div>
        ))}
      </Slider>
    </div>

  );
};

export default SlickCarousel;
