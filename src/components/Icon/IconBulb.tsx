import cn from 'classnames';
import * as React from 'react';

export const IconBulb = React.memo<JSX.IntrinsicElements['svg']>(
  function IconBulb({className}) {
    return (
      <svg
        className={cn('inline', className)}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.0002 14.6667H6.00016V13.3334H10.0002V14.6667ZM10.0002 12.6667H6.00016L5.8515 11.3334C5.77152 10.8923 5.63925 10.4624 5.4575 10.0527C5.2215 9.71937 4.9755 9.43471 4.7375 9.15671C3.86291 8.33691 3.3566 7.19856 3.3335 6.00004C3.3335 3.42271 5.42283 1.33337 8.00016 1.33337C10.5775 1.33337 12.6668 3.42271 12.6668 6.00004C12.6397 7.19124 12.1373 8.32211 11.2715 9.14071L11.2602 9.15404C11.0228 9.43204 10.7775 9.72004 10.5462 10.05C10.3646 10.4609 10.2319 10.8916 10.1508 11.3334L10.0002 12.6667ZM8.00016 2.66671C6.16013 2.66891 4.66903 4.16001 4.66683 6.00004C4.66683 7.02937 5.09616 7.52871 5.7455 8.28537C5.99216 8.57337 6.27216 8.89871 6.5455 9.27937C6.87721 9.92393 7.10384 10.6173 7.21683 11.3334H8.78416C8.90007 10.6194 9.12633 9.9278 9.45483 9.28337C9.7215 8.90271 10.0008 8.57537 10.2468 8.28737L10.2568 8.27537C10.9048 7.51537 11.3335 7.01337 11.3335 6.00004C11.3313 4.16001 9.8402 2.66891 8.00016 2.66671Z"
          fill="#606060"
        />
      </svg>
    );
  }
);

export const IconBulbDark = React.memo<JSX.IntrinsicElements['svg']>(
  function IconBulb({className}) {
    return (
      <svg
        className={cn('inline', className)}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.0002 14.6667H6.00016V13.3334H10.0002V14.6667ZM10.0002 12.6667H6.00016L5.8515 11.3334C5.77152 10.8923 5.63925 10.4624 5.4575 10.0527C5.2215 9.71937 4.9755 9.43471 4.7375 9.15671C3.86291 8.33691 3.3566 7.19856 3.3335 6.00004C3.3335 3.42271 5.42283 1.33337 8.00016 1.33337C10.5775 1.33337 12.6668 3.42271 12.6668 6.00004C12.6397 7.19124 12.1373 8.32211 11.2715 9.14071L11.2602 9.15404C11.0228 9.43204 10.7775 9.72004 10.5462 10.05C10.3646 10.4609 10.2319 10.8916 10.1508 11.3334L10.0002 12.6667ZM8.00016 2.66671C6.16013 2.66891 4.66903 4.16001 4.66683 6.00004C4.66683 7.02937 5.09616 7.52871 5.7455 8.28537C5.99216 8.57337 6.27216 8.89871 6.5455 9.27937C6.87721 9.92393 7.10384 10.6173 7.21683 11.3334H8.78416C8.90007 10.6194 9.12633 9.9278 9.45483 9.28337C9.7215 8.90271 10.0008 8.57537 10.2468 8.28737L10.2568 8.27537C10.9048 7.51537 11.3335 7.01337 11.3335 6.00004C11.3313 4.16001 9.8402 2.66891 8.00016 2.66671Z"
          fill="#ffffff"
        />
      </svg>
    );
  }
);

IconBulb.displayName = 'IconBulb';
IconBulbDark.displayName = 'IconBulbDark';
