import React, { FunctionComponent } from 'react';

import CardIcon from '@/assets/images/cardMenu.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const CardMenuIcon: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <CardIcon />
  </BaseIcon>
);

export default CardMenuIcon;
