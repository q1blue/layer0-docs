import cn from 'classnames';
import * as React from 'react';

export const IconRemix = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg className={cn('inline', className)} viewBox="0 0 800 800" fill="none">
      <path
        d="M700 0H100C44.772 0 0 44.772 0 100v600c0 55.228 44.772 100 100 100h600c55.228 0 100-44.772 100-100V100C800 44.772 755.228 0 700 0z"
        fill="#212121"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M587.947 527.768c4.254 54.65 4.254 80.268 4.254 108.232H465.756c0-6.091.109-11.663.219-17.313.342-17.564.699-35.88-2.147-72.868-3.761-54.152-27.08-66.185-69.957-66.185H195v-98.525h204.889c54.16 0 81.241-16.476 81.241-60.098 0-38.357-27.081-61.601-81.241-61.601H195V163h227.456C545.069 163 606 220.912 606 313.42c0 69.193-42.877 114.319-100.799 121.84 48.895 9.777 77.48 37.605 82.746 92.508z"
        fill="#fff"
      />
      <path
        d="M195 636v-73.447h133.697c22.332 0 27.181 16.563 27.181 26.441V636H195z"
        fill="#fff"
      />
      <path
        d="M194.5 636v.5h161.878v-47.506c0-5.006-1.226-11.734-5.315-17.224-4.108-5.515-11.059-9.717-22.366-9.717H194.5V636z"
        stroke="#fff"
        strokeOpacity="0.8"
      />
    </svg>
  )
);

export const IconRemixDark = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg
      className={cn('inline', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.9615 0.77417C18.3315 0.77417 21 3.41243 21 7.62677C21 10.779 19.1222 12.8347 16.5854 13.1773C18.7268 13.6228 19.9786 14.8905 20.2093 17.3917L20.2427 17.8517L20.2718 18.2817L20.297 18.6839L20.3145 18.9872L20.3333 19.345L20.343 19.5493L20.3569 19.8737L20.3681 20.1801L20.3736 20.3562L20.3811 20.6385L20.3876 20.9612L20.39 21.1171L20.3942 21.5689L20.3956 22.0405L20.3956 22.3224H14.8579L14.8582 22.2048L14.8602 21.9764L14.8635 21.754L14.8731 21.2152L14.8755 21.0345L14.8774 20.7513L14.8771 20.5701L14.8755 20.3802L14.8733 20.2311L14.8687 20.0223L14.8622 19.801L14.8533 19.5656L14.842 19.3149L14.8354 19.1833L14.8241 18.9777L14.811 18.7617L14.7908 18.4565L14.7734 18.214C14.7685 18.1392 14.7627 18.0661 14.7561 17.9948L14.7419 17.8545C14.559 16.1976 13.9224 15.5204 12.832 15.2946L12.7401 15.2768C12.6781 15.2656 12.6147 15.2558 12.55 15.2472L12.4517 15.2353C12.4352 15.2335 12.4186 15.2317 12.4018 15.23L12.3005 15.2208L12.197 15.2133L12.0914 15.2074L11.9849 15.2032L11.8764 15.2004L11.7657 15.199L3 15.1989V10.7105H11.9732C12.12 10.7105 12.2621 10.7076 12.3998 10.7017L12.5359 10.6949L12.669 10.686L12.7991 10.6751C12.8205 10.6731 12.8418 10.671 12.863 10.6689L12.9885 10.6548C13.0712 10.6448 13.1519 10.6333 13.2306 10.6204L13.347 10.6C14.8031 10.3275 15.5311 9.52961 15.5311 7.97259C15.5311 6.22523 14.3452 5.16623 11.9732 5.16623H3V0.77417H12.9615ZM8.85536 18.9763C9.58191 18.9763 9.8859 19.3928 9.99419 19.7914L10.0085 19.8487L10.0202 19.9054L10.0278 19.9503L10.0311 19.9725L10.0366 20.0162L10.0407 20.0591L10.0423 20.0802L10.0445 20.1214L10.0452 20.1416L10.0457 20.1808V22.3224H3V18.9763H8.85536Z"
        fill="white"
      />
    </svg>
  )
);

IconRemix.displayName = 'IconRemix';
IconRemixDark.displayName = 'IconRemixDark';
