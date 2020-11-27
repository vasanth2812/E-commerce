import React, { useEffect, useState } from 'react';
import data from '../../../constant.json';
import BannerCarousel from '../../../shared/components/BannerCarousel';
import SkeletonCarousel from '../../../shared/components/Skeleton/SkeletonCarousel';

const Carousel = () => {
  const [carouseldata, setCarouseldata] = useState(null);

  useEffect(() => {
    const { carouselImage } = data;
    setTimeout(() => setCarouseldata(carouselImage), 5000);
  }, [carouseldata]);
  return (
    <>
      {carouseldata ? (
        <BannerCarousel items={carouseldata} />
      ) : (
        <SkeletonCarousel />
      )}
    </>
  );
};

export default Carousel;
