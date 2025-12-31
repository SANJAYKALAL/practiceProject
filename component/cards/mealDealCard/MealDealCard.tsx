import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { color } from '@theme';
import { mealDealStyle } from '../../../screens/mealDeal/mealDeal.style';
import imageIndex from '@imageIndex';

const MealDealCard: React.FC<MealDealCardProps & { disabled?: boolean }> = ({
  item,
  index,
  toggleSelect,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[mealDealStyle.listContainer]}
      activeOpacity={disabled ? 1 : 0.9}
      onPress={() => !disabled && toggleSelect(item.id)}
      key={index}
    >
      <Image
        source={item.selected ? imageIndex.checkbox : imageIndex.unchecked}
        style={item.selected ? mealDealStyle.check : mealDealStyle.uncheck}
      />
      <Image source={item.image} style={mealDealStyle.mealsImage} />
      <View style={mealDealStyle.marginLeft}>
        <Text style={[mealDealStyle.text, disabled && { color: color.arrow }]}>
          {item.text}
        </Text>
        <Text
          style={[mealDealStyle.subText, disabled && { color: color.arrow }]}
        >
          {item.subText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MealDealCard;
