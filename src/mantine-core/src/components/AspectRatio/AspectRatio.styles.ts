import { createStyles, MantineNumberSize } from '@mantine/styles';

interface AspectRatioStyles {
  ratio: number;
  maxWidth: MantineNumberSize;
}

const sizes = {
  xs: 480,
  sm: 800,
  md: 1024,
  lg: 1280,
  xl: 1920,
};

export default createStyles((theme, { ratio, maxWidth }: AspectRatioStyles) => ({
  root: {
    position: 'relative',
    maxWidth: theme.fn.size({ size: maxWidth, sizes }),

    '&::before': {
      content: '""',
      height: 0,
      display: 'block',
      paddingBottom: `${(1 / ratio) * 100}%`,
    },

    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both',
    },

    '& > *:not(style)': {
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },

    '& > img, & > video': {
      objectFit: 'cover',
    },
  },
}));
