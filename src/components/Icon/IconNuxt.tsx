import cn from 'classnames';
import * as React from 'react';

export const IconNuxt = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg
      className={cn('inline', className)}
      xmlns="http://www.w3.org/2000/svg"
      width="124"
      height="124"
      viewBox="0 0 124 124"
      fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.7498 27.1551C52.5277 21.615 44.4723 21.6149 41.2502 27.1551L6.13404 87.5346C2.91191 93.0748 6.93956 100 13.3838 100H40.7975C38.0438 97.5934 37.0241 93.4303 39.1079 89.8584L65.7033 44.2694L55.7498 27.1551Z"
        fill="#80EEC0"
      />
      <path
        d="M78.0002 40.3997C80.6668 35.8668 87.3332 35.8668 89.9998 40.3997L119.061 89.801C121.728 94.3339 118.395 100 113.062 100H54.9383C49.6052 100 46.2719 94.3339 48.9385 89.801L78.0002 40.3997Z"
        fill="#00DC82"
      />
    </svg>
  )
);

IconNuxt.displayName = 'IconNuxt';
