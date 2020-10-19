import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import { useLoaderStyles } from './Loader.styles';

export function Loader(): React.ReactElement {
  const classes = useLoaderStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.content} item md={12} lg={12}>
          <CircularProgress />
        </Grid>
      </Grid>
    </div>
  );
}
