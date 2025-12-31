import { TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { style } from '../../../screens/menu/menu.style';

const MenuCard: React.FC<MenuCardProps> = ({ item, index, onPress }) => {
  return (
    <TouchableOpacity
      style={style.menuCardTouch}
      onPress={onPress}
      activeOpacity={0.6}
      key={index}
    >
      <Image source={item.image} style={style.Image} resizeMode="cover" />
    </TouchableOpacity>
  );
};

export default MenuCard;
