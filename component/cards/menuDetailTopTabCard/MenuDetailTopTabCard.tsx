import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from '../../../screens/menuDetail/menuDetail.style';
import { color } from '@theme';

const MenuDetailTopTabCard: React.FC<MenuDetailTopTabCardProps> = ({
  item,
  index,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(index)}
      style={[
        styles.topTabContainer,
        { backgroundColor: isSelected ? color.primary : color.white },
      ]}
      activeOpacity={0.6}
    >
      <View style={styles.topTabView}>
        {item.icon ? (
          <Image
            source={item.icon}
            style={styles.topTabIcon}
            resizeMode="contain"
          />
        ) : null}
        <Text
          style={[
            styles.topTabText,
            { color: isSelected ? color.white : color.darkblue },
          ]}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuDetailTopTabCard;
