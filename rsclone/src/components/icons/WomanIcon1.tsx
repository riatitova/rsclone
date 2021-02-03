import React, { FunctionComponent } from 'react';

import WomanIcon1 from '@/assets/images/woman5.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const WomanFooterIcon1: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <WomanIcon1 />
  </BaseIcon>
);

export default WomanFooterIcon1;
