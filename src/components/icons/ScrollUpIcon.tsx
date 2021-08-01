import * as React from 'react';
import classNames from 'classnames';

import { IconProps } from './props';

export function ScrollUpIcon({ className, ...rest }: IconProps) {
  return (
    <svg fill="none" height="38" viewBox="0 0 24 38" width="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9393 0.939339L1.3934 10.4853C0.80761 11.0711 0.80761 12.0208 1.3934 12.6066C1.97918 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 38L13.5 2L10.5 2L10.5 38L13.5 38Z"
        fill="currentColor"
      />
    </svg>
  );
}
