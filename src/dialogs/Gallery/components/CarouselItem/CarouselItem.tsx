import React, { FC, useEffect } from 'react';
import Image from 'material-ui-image'
import { apiUrls } from '../../../../constants/api-urls';
import { AxiosMethod } from '../../../../constants/axios-mothod';
import { useCustomAxios } from '../../../../utils/CustomAxiosHook/useCustomAxios';
import { useCarouselItemStyles } from './CarouselItem.styles';

interface CarouselItemProps {
  isCurrent: boolean;
  pictureId: string;
}

export const CarouselItem: FC<CarouselItemProps> = ({ pictureId, isCurrent }) => {
  const classes = useCarouselItemStyles();
  const [{ data }, fetchPicture] = useCustomAxios({
    method: AxiosMethod.GET,
    url: `${apiUrls.IMAGES}/${pictureId}`
  });

  useEffect(() => {
    if (!isCurrent || data) {
      return
    }

    fetchPicture();
  }, [isCurrent]);

  return (
    <div className={classes.container}>
      {
        data && (
          <Image src={data.full_picture} />
        )
      }
    </div>
  )
}
