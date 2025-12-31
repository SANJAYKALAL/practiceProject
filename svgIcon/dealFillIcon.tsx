import React from 'react';
import Svg, { Path } from 'react-native-svg';

const DealFillIcon = (props: { size?: number; color?: string }) => {
  const { size = 22, color = '#A3A8AD', ...rest } = props;

  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 22 22" {...rest}>
      <Path
        fill="#FBB13F"
        stroke="#FBB13F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.875 11.458a2.293 2.293 0 0 1 2.292-2.291V8.25c0-3.667-.917-4.583-4.584-4.583H6.417c-3.667 0-4.584.916-4.584 4.583v.458a2.293 2.293 0 0 1 0 4.584v.458c0 3.667.917 4.583 4.584 4.583h9.166c3.667 0 4.584-.916 4.584-4.583a2.293 2.293 0 0 1-2.292-2.292Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.25 13.52 5.5-5.5"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.745 13.52h.008M8.245 8.48h.008"
      />
    </Svg>
  );
};

export default DealFillIcon;
