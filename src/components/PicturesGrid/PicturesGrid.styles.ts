import { createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const usePicturesGridStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    pagination: {
      paddingTop: theme.spacing(3)
    },
    image: {
      borderRadius: "5px",
      cursor: "pointer",
      boxShadow: "1px 1px 5px #929292",
      width: "100%"
    }
  }),
);
