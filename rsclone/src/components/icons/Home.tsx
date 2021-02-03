import React, { FunctionComponent } from 'react';

import HomeIcon from '@/assets/images/main-48.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const HomeHeaderIcon: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <HomeIcon />
  </BaseIcon>
);

export default HomeHeaderIcon;
