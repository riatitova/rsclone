import React, { FunctionComponent } from 'react';

import ManIcon2 from '@/assets/images/man2.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const ManFooterIcon: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <ManIcon2 />
  </BaseIcon>
);

export default ManFooterIcon;
