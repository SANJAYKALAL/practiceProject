import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from '../../../screens/myPaymentCard/myPaymentCard.style';
import imageIndex from '@imageIndex';

const MyPaymentCards: React.FC<MyPaymentCardProps> = ({ item, index }) => {
  return (
    <View style={style.listContainer} key={index}>
      <View style={style.directionRow}>
        <Image source={item.image} style={style.Image} />
        <View style={style.textContainer}>
          <Text style={style.text}>{item.text}</Text>
          <Text style={style.subText}>{item.subText}</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.6}>
        <Image source={imageIndex.deleteIcon} style={style.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default MyPaymentCards;
