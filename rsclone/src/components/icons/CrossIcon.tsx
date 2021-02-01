import React, { FunctionComponent } from 'react';

import Cross from '@/assets/images/cross-symbol_icon-icons.com_74149.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const CrossIcon: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <Cross />
  </BaseIcon>
);

export default CrossIcon;
