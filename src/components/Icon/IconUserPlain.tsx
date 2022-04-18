import cn from 'classnames';
import * as React from 'react';

export const IconUserPlain = React.memo<JSX.IntrinsicElements['svg']>(
  function IconUserPlain({className}) {
    return (
      <svg
        className={cn('inline', className)}
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.3 3.66667C6.3 5.13943 5.0464 6.33333 3.5 6.33333C1.9536 6.33333 0.7 5.13943 0.7 3.66667C0.7 2.19391 1.9536 1 3.5 1C5.0464 1 6.3 2.19391 6.3 3.66667ZM4.9 3.66667C4.9 2.93029 4.2732 2.33333 3.5 2.33333C2.7268 2.33333 2.1 2.93029 2.1 3.66667C2.1 4.40305 2.7268 5 3.5 5C4.2732 5 4.9 4.40305 4.9 3.66667Z"
          fill="#606060"
        />
        <path
          d="M13.3 6.66667C13.3 7.95533 12.2031 9 10.85 9C9.4969 9 8.4 7.95533 8.4 6.66667C8.4 5.378 9.4969 4.33333 10.85 4.33333C12.2031 4.33333 13.3 5.378 13.3 6.66667ZM11.9 6.66667C11.9 6.11438 11.4299 5.66667 10.85 5.66667C10.2701 5.66667 9.8 6.11438 9.8 6.66667C9.8 7.21895 10.2701 7.66667 10.85 7.66667C11.4299 7.66667 11.9 7.21895 11.9 6.66667Z"
          fill="#606060"
        />
        <path
          d="M5.6 13V10.3333C5.6 9.22876 4.6598 8.33333 3.5 8.33333C2.3402 8.33333 1.4 9.22876 1.4 10.3333V13H0V10.3333C0 8.49238 1.567 7 3.5 7C5.433 7 7 8.49238 7 10.3333V13H5.6Z"
          fill="#606060"
        />
        <path
          d="M12.6 12.6667V13H14V12.6667C14 11.0098 12.5897 9.66667 10.85 9.66667C9.1103 9.66667 7.7 11.0098 7.7 12.6667V13H9.1V12.6667C9.1 11.7462 9.8835 11 10.85 11C11.8165 11 12.6 11.7462 12.6 12.6667Z"
          fill="#606060"
        />
      </svg>
    );
  }
);

export const IconUserPlainDark = React.memo<JSX.IntrinsicElements['svg']>(
  function IconUserPlain({className}) {
    return (
      <svg
        className={cn('inline', className)}
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.3 3.66667C6.3 5.13943 5.0464 6.33333 3.5 6.33333C1.9536 6.33333 0.7 5.13943 0.7 3.66667C0.7 2.19391 1.9536 1 3.5 1C5.0464 1 6.3 2.19391 6.3 3.66667ZM4.9 3.66667C4.9 2.93029 4.2732 2.33333 3.5 2.33333C2.7268 2.33333 2.1 2.93029 2.1 3.66667C2.1 4.40305 2.7268 5 3.5 5C4.2732 5 4.9 4.40305 4.9 3.66667Z"
          fill="white"
        />
        <path
          d="M13.3 6.66667C13.3 7.95533 12.2031 9 10.85 9C9.4969 9 8.4 7.95533 8.4 6.66667C8.4 5.378 9.4969 4.33333 10.85 4.33333C12.2031 4.33333 13.3 5.378 13.3 6.66667ZM11.9 6.66667C11.9 6.11438 11.4299 5.66667 10.85 5.66667C10.2701 5.66667 9.8 6.11438 9.8 6.66667C9.8 7.21895 10.2701 7.66667 10.85 7.66667C11.4299 7.66667 11.9 7.21895 11.9 6.66667Z"
          fill="white"
        />
        <path
          d="M5.6 13V10.3333C5.6 9.22876 4.6598 8.33333 3.5 8.33333C2.3402 8.33333 1.4 9.22876 1.4 10.3333V13H0V10.3333C0 8.49238 1.567 7 3.5 7C5.433 7 7 8.49238 7 10.3333V13H5.6Z"
          fill="white"
        />
        <path
          d="M12.6 12.6667V13H14V12.6667C14 11.0098 12.5897 9.66667 10.85 9.66667C9.1103 9.66667 7.7 11.0098 7.7 12.6667V13H9.1V12.6667C9.1 11.7462 9.8835 11 10.85 11C11.8165 11 12.6 11.7462 12.6 12.6667Z"
          fill="white"
        />
      </svg>
    );
  }
);

IconUserPlain.displayName = 'IconUserPlain';
IconUserPlainDark.displayName = 'IconUserPlainDark';
