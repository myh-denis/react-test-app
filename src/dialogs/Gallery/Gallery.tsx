import { Dialog } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { CroppedPicture } from '../../models/CroppedPicture';
import { CarouselItem } from './components/CarouselItem';

interface GalleryProps {
  current: number;
  images: CroppedPicture[];
  onClose: () => void;
}


export const Gallery: FC<GalleryProps> = ({ current, images, onClose }) => {
  const [ carouselItem, setCarouselItem ] = useState(null);

  useEffect(() => {
    setCarouselItem(current);
  }, [current]);

  return (
    <Dialog
      open={current !== null}
      onClose={onClose}
    >
      {
        images && carouselItem !== null && (
          <Carousel startAt={current} onChange={(newIndex) => setCarouselItem(newIndex)} autoPlay={false}>
            {
              images.map( ({ id }, index) => <CarouselItem key={id} isCurrent={index === carouselItem} pictureId={id} />)
            }
          </Carousel>
        )
      }
    </Dialog>
  )
}
