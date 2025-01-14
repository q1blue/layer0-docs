import cn from 'classnames';
import * as React from 'react';

export const IconBrunch = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg
      className={cn('inline', className)}
      baseProfile="tiny-ps"
      viewBox="0 0 75 75">
      <style />
      <path
        id="brunch_svg__Layer"
        d="M24.98 56.04L6.13 37.19 37.51 5.81l31.38 31.38-16.8 16.8c.02-.77.05-1.49.09-2.13.03-.41.13-.82.2-1.25.22-1.23 1.74-2.24 2.63-3.13 1.71-1.72 2.82-4.61 2.82-7.88 0-5.3-2.94-12-6.56-12-3.62 0-6.56 6.71-6.56 12 0 3.26 1.1 6.15 2.82 7.88.88.89 2.41 1.9 2.63 3.13.08.43.18.85.2 1.25.07 1.06.1 2.33.12 3.74L38.45 67.63c.04-4.12.18-8.05.37-10.96.08-1.2.28-2.55 1.73-3.71.16-.13.32-.25.51-.37.47-.38.76-.78.76-1.11 0-1.56.68-23.51-1.75-29.68-2.42-6.17-5.05-4.84-5.05-2.03v32.97c0 .24.19.51.25.81.18.94.33 2.11.4 3.12.17 2.71.18 6.3.06 10.1L27 58.04c-.01-2.31.05-4.36.17-5.96.08-1 .35-2.1 1.46-3.11.04-.04.09-.08.14-.12.01 0 .01-.01.02-.01 1.53-1.4 2.84-4.09 2.76-6.94-.31-11.32-1.61-15.29-1.99-15.29-.3 0-.3 6.04-.21 10.34.07 3.52-.23 5.11-1.23 5.11-.95 0-1.23-3.43-1.35-7.56-.1-3.33-.4-7.89-.76-7.89-.23.02-.52 4.62-.62 7.93-.12 4.03-.3 7.62-1.43 7.62-.85 0-1.38-1.4-1.24-4.97.2-5.13.19-10.59-.11-10.59-.38 0-2.14 11.31-2.14 15.29 0 2.85 1.22 5.54 2.76 6.94 0 0 .01.01.02.01.05.04.09.08.14.12 1.11 1.01 1.39 2.11 1.46 3.11.08 1.12.14 2.46.16 3.96z"
        fill="#3f894a"
      />
    </svg>
  )
);

IconBrunch.displayName = 'IconBrunch';
