import * as React from 'react';
import cn from 'classnames';

export const IconSvelte = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg
      className={cn('inline', className)}
      width="93"
      height="110"
      viewBox="0 0 93 120"
      fill="none">
      <path
        d="M87.23 14.39C76.83-.49 56.29-4.9 41.44 4.56L15.36 21.18a29.899 29.899 0 00-13.52 20 31.53 31.53 0 003.1 20.24A29.94 29.94 0 00.47 72.6a31.86 31.86 0 005.45 24.12c10.4 14.88 30.94 19.29 45.79 9.83L77.79 90a29.999 29.999 0 0013.52-20 31.52 31.52 0 00-3.11-20.23 30.13 30.13 0 004.48-11.18 31.9 31.9 0 00-5.45-24.12"
        fill="#FF3E00"
      />
      <path
        d="M38.89 98.16a20.73 20.73 0 01-22.24-8.25 19.14 19.14 0 01-3.27-14.5c.147-.817.355-1.623.62-2.41l.49-1.5 1.34 1A33.784 33.784 0 0026 77.56l1 .29-.09 1A5.9 5.9 0 0028 82.7a6.25 6.25 0 006.7 2.48 5.854 5.854 0 001.6-.7l26.04-16.62a5.422 5.422 0 002.45-3.64 5.769 5.769 0 00-1-4.37 6.25 6.25 0 00-6.7-2.48 5.717 5.717 0 00-1.6.7l-10 6.35a19.096 19.096 0 01-5.29 2.32A20.72 20.72 0 0118 58.5 19.161 19.161 0 0114.75 44a18.001 18.001 0 018.13-12.06L49 15.32A19.046 19.046 0 0154.26 13a20.71 20.71 0 0122.23 8.25 19.139 19.139 0 013.28 14.5 20.159 20.159 0 01-.62 2.43l-.5 1.5-1.33-1a33.778 33.778 0 00-10.2-5.1l-1-.29.09-1a5.86 5.86 0 00-1.06-3.88A6.23 6.23 0 0058.49 26a5.718 5.718 0 00-1.6.7L30.8 43.29a5.45 5.45 0 00-2.45 3.63 5.84 5.84 0 001 4.38A6.25 6.25 0 0036 53.78a5.998 5.998 0 001.6-.7l10-6.34a18.61 18.61 0 015.3-2.33 20.699 20.699 0 0122.23 8.24 19.158 19.158 0 013.28 14.5 18.001 18.001 0 01-8.13 12.06L44.19 95.83a19.184 19.184 0 01-5.3 2.33"
        fill="#fff"
      />
    </svg>
  )
);

IconSvelte.displayName = 'IconSvelte';