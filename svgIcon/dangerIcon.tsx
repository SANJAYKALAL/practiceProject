import React from 'react';
import Svg, { Path } from 'react-native-svg';

const DangerIcon = (props: { size?: number; color?: string }) => {
  const { size = 18, color = '#A3A8AD', ...rest } = props;

  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 22 22" {...rest}>
      <Path
        stroke="#EF5A02"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 6.75v3.75M9 16.058H4.455c-2.603 0-3.69-1.86-2.43-4.133l2.34-4.215L6.57 3.75c1.335-2.408 3.525-2.408 4.86 0l2.205 3.967 2.34 4.215c1.26 2.273.165 4.133-2.43 4.133H9v-.008Z"
      />
      <Path
        stroke="#EF5A02"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.996 12.75h.007"
      />
    </Svg>
  );
};

export default DangerIcon;
