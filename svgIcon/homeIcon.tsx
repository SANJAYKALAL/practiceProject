import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = (props: { size?: number; color?: string }) => {
  const { size = 22, color = '#A3A8AD', ...rest } = props;

  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 22 22" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.268 2.603 3.328 6.453c-.825.642-1.495 2.008-1.495 3.044v6.792c0 2.127 1.733 3.868 3.86 3.868h10.614a3.871 3.871 0 0 0 3.86-3.859V9.625c0-1.11-.743-2.53-1.65-3.162l-5.665-3.97c-1.284-.898-3.346-.852-4.584.11ZM11 16.49v-2.75"
      />
    </Svg>
  );
};

export default HomeIcon;
