import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeFillIcon = (props: { size?: number; color?: string }) => {
  const { size = 22, color = '#A3A8AD', ...rest } = props;

  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 22 22" {...rest}>
      <Path
        fill="#FBB13F"
        fillRule="evenodd"
        d="M16.754 20.63H14.99c-1.01-.024-1.79-.817-1.79-1.805v-2.82a.62.62 0 0 0-.626-.613H9.928a.62.62 0 0 0-.618.613v2.81c0 .07-.009.136-.028.198a1.824 1.824 0 0 1-1.814 1.617H5.704c-2.135 0-3.87-1.723-3.87-3.84V8.804a2.891 2.891 0 0 1 1.153-2.294L8.977 1.7a3.586 3.586 0 0 1 4.474-.002l6.034 4.812a2.894 2.894 0 0 1 1.14 2.273v8.007c0 2.116-1.736 3.839-3.871 3.839Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default HomeFillIcon;
