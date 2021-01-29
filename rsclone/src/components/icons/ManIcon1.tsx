import React, { FunctionComponent } from 'react';

import ManIcon1 from '@/assets/images/man1.svg';
import BaseIcon from '@/components/icons/BaseIcon';
// import type { BaseIconProps } from '@/components/icons/BaseIcon';

const ManFooterIcon: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <ManIcon1 />
  </BaseIcon>
);

export default ManFooterIcon;
