import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuIcon = (props: { size?: number; color?: string }) => {
  const { size = 22, color = '#A3A8AD', ...rest } = props;

  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 22 22" {...rest}>
      <Path
        stroke="#A3A8AD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M19.25 6.417v9.166c0 2.75-1.375 4.584-4.583 4.584H7.333c-3.208 0-4.583-1.834-4.583-4.584V6.417c0-2.75 1.375-4.584 4.583-4.584h7.334c3.208 0 4.583 1.834 4.583 4.584Z"
      />
      <Path
        stroke="#A3A8AD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M13.292 4.125v1.833c0 1.009.825 1.834 1.833 1.834h1.833M7.333 11.917H11M7.333 15.583h7.334"
      />
    </Svg>
  );
};

export default MenuIcon;
