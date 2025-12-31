import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { styles } from '../../../screens/home/home.style';

const DealAndMenuCard: React.FC<DealAndMenuCardProps> = ({
  item,
  index,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.flexOne}
      activeOpacity={0.6}
      key={index}
    >
      <ImageBackground
        source={item.image}
        style={styles.dealImage}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overLayTextMenu}>
          <Text style={styles.dealTxt}>{item.text}</Text>
          <Text style={styles.varietiesTxt}>{item.subText}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default DealAndMenuCard;
