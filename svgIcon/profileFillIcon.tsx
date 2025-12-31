import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileFillIcon = (props: { size?: number; color?: string }) => {
  const { size = 22, color = '#A3A8AD', ...rest } = props;

  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 22 22" {...rest}>
      <Path
        fill="#FBB13F"
        fillRule="evenodd"
        d="M18.187 16.677c0 3.021-4.143 3.37-7.26 3.37h-.222c-1.985-.004-7.038-.13-7.038-3.388 0-2.96 3.977-3.355 7.069-3.37h.415c1.985.004 7.036.13 7.036 3.388Zm-7.26-14.844a4.872 4.872 0 0 1 4.867 4.868 4.871 4.871 0 0 1-4.866 4.866h-.03a4.858 4.858 0 0 1-4.839-4.87 4.873 4.873 0 0 1 4.869-4.864Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ProfileFillIcon;
