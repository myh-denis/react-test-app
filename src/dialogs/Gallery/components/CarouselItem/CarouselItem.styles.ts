import { createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useCarouselItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "600px",
      height: "600px",
    }
  }),
);
