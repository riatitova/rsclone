import React, { FunctionComponent } from 'react';

import WomanIcon2 from '@/assets/images/woman4.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const WomanFooterIcon2: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <WomanIcon2 />
  </BaseIcon>
);

export default WomanFooterIcon2;
