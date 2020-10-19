import { Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Image from 'material-ui-image';
import React, { FC } from 'react';
import { CroppedPicture } from '../../models/CroppedPicture';
import { usePicturesGridStyles } from './PicturesGrid.styles';

interface PicturesGridProps {
  images: CroppedPicture[],
  pages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onImgClick: (index: number) => void;
}

export const PicturesGrid: FC<PicturesGridProps> = ({ images, pages, currentPage, onPageChange, onImgClick }) => {
  const classes = usePicturesGridStyles();

  const ItemsRender = (images || []).map(({ cropped_picture, id }, index) => (
    <Grid key={id} item xs={6} sm={4}>
      <div>
        <Image onClick={() => onImgClick(index)} src={cropped_picture} className={classes.image} />
      </div>
    </Grid>
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {ItemsRender}
      </Grid>
      <Pagination
        className={classes.pagination}
        count={pages}
        page={currentPage}
        color="primary"
        onChange={(e, page) => onPageChange(page)} />
    </div>
  );
};
