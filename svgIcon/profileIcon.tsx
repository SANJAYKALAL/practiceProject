import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = (props: { size?: number; color?: string }) => {
  const { size = 22, color = '#A3A8AD', ...rest } = props;

  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 22 22" {...rest}>
      <Path
        fill="#7B838A"
        fillOpacity={0.7}
        fillRule="evenodd"
        d="M18.187 16.677c0 3.021-4.144 3.37-7.26 3.37h-.222c-1.986-.005-7.038-.13-7.038-3.388 0-2.96 3.976-3.356 7.069-3.37h.414c1.986.004 7.037.13 7.037 3.388Zm-7.26-2.014c-3.905 0-5.885.671-5.885 1.996 0 1.336 1.98 2.014 5.886 2.014 3.904 0 5.884-.671 5.884-1.996 0-1.336-1.98-2.014-5.885-2.014Zm0-12.83a4.872 4.872 0 0 1 4.867 4.868 4.871 4.871 0 0 1-4.867 4.866h-.029a4.858 4.858 0 0 1-4.839-4.87 4.873 4.873 0 0 1 4.869-4.864Zm0 1.309a3.563 3.563 0 0 0-3.559 3.559 3.55 3.55 0 0 0 3.533 3.558l.027.655v-.655a3.562 3.562 0 0 0 3.557-3.558 3.562 3.562 0 0 0-3.557-3.559Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ProfileIcon;
