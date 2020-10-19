import { createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useLoaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: 9999,
      backgroundColor: `rgba(255, 255, 255, .6)`,
    },
    grid: {
      height: "100%"
    },
    content: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }),
);
