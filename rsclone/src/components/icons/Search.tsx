import React, { FunctionComponent } from 'react';

import SearchIcon from '@/assets/images/search.svg';
import BaseIcon from '@/components/icons/BaseIcon';
import type { BaseIconProps } from '@/components/icons/BaseIcon';

const SearchHeaderIcon: FunctionComponent<BaseIconProps> = ({ ...restProps }) => (
  <BaseIcon {...restProps}>
    <SearchIcon />
  </BaseIcon>
);

export default SearchHeaderIcon;
