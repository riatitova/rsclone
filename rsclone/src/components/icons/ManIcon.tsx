import React, { FunctionComponent } from 'react';

import ManIcon from '@/assets/images/man.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const ManFooterIcon: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <ManIcon />
  </BaseIcon>
);

export default ManFooterIcon;
