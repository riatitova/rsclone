import React, { FunctionComponent } from 'react';

import SchoolIcon from '@/assets/images/rsschool.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const RSSFooterIcon: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <SchoolIcon />
  </BaseIcon>
);

export default RSSFooterIcon;
