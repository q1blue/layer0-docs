import * as React from 'react';

export const DarkMobileLogo = React.memo<JSX.IntrinsicElements['svg']>(() => (
  <svg
    width="27"
    height="26"
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <g clipPath="url(#clip0_344_903)">
      <rect
        x="-0.111328"
        y="-0.107178"
        width="27.2261"
        height="26.2177"
        fill="url(#patterndarkmobileedgiosquarelogo)"
      />
      <path
        d="M17.1234 9.07576L18.4255 6.81396H8.57471V19.1859H18.4255L17.1303 16.9241H11.1351V14.0787H15.4605L16.18 11.8151H11.1351V9.07576H17.1234Z"
        fill="white"
      />
    </g>
    <defs>
      <pattern
        id="patterndarkmobileedgiosquarelogo"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        <use xlinkHref="#image0_344_903" transform="scale(0.000371885)" />
      </pattern>
      <clipPath id="clip0_344_903">
        <rect width="27" height="26" fill="white" />
      </clipPath>
      <image
        id="image0_344_903"
        width="2689"
        height="2689"
      />
    </defs>
  </svg>
));

export const LightMobileLogo = React.memo<JSX.IntrinsicElements['svg']>(() => (
  <svg
    width="27"
    height="26"
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <g clipPath="url(#clip0_344_903)">
      <rect
        x="-0.111328"
        y="-0.107178"
        width="27.2261"
        height="26.2177"
        fill="url(#patternlightmobileedgiosquarelogo)"
      />
      <path
        d="M17.1234 9.07576L18.4255 6.81396H8.57471V19.1859H18.4255L17.1303 16.9241H11.1351V14.0787H15.4605L16.18 11.8151H11.1351V9.07576H17.1234Z"
        fill="white"
      />
    </g>
    <defs>
      <pattern
        id="patternlightmobileedgiosquarelogo"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        <use xlinkHref="#image0_344_903" transform="scale(0.000371885)" />
      </pattern>
      <clipPath id="clip0_344_903">
        <rect width="27" height="26" fill="white" />
      </clipPath>
      <image
        id="image0_344_903"
        width="2689"
        height="2689"
      />
    </defs>
  </svg>
));

DarkMobileLogo.displayName = 'DarkMobileLogo';
LightMobileLogo.displayName = 'LightMobileLogo';