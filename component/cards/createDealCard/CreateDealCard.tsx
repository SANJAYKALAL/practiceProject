import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { style } from '../../../screens/createDeals/createDeals.style';
import { color } from '@theme';
import imageIndex from '@imageIndex';

const CreateDealCard: React.FC<CreateDealCardProps> = ({
  item,
  index,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={style.listContainer}
      onPress={() => onPress(item)}
      activeOpacity={0.7}
      key={index}
    >
      <View style={style.view}>
        <View style={style.iconContainer}>
          <Image source={item.image} style={style.icon} />
        </View>
        <View style={style.textView}>
          <Text style={[style.text, isSelected && { color: color.primary }]}>
            {item.text}
          </Text>
          <Text style={style.subText}>{item.subText}</Text>
        </View>
      </View>
      <View>
        <Image source={imageIndex.arrowRight} style={style.rightArrow} />
      </View>
    </TouchableOpacity>
  );
};

export default CreateDealCard;
