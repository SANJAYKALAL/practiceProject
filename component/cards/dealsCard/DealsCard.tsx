import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { dealStyles } from '../../../screens/deals/deal.style';
import imageIndex from '@imageIndex';

const DealsCard: React.FC<DealsCardProps> = ({ item, index, onPress }) => {
  return (
    <TouchableOpacity
      style={dealStyles.touchableContainer}
      onPress={() => onPress(item)}
      activeOpacity={0.7}
      key={index}
    >
      <Image source={item.image} style={dealStyles.dealImage} />
      <View style={dealStyles.cardBottomContainer}>
        <View>
          <Text style={dealStyles.title}>{item.text}</Text>
          <View style={dealStyles.directionRow}>
            <Image source={imageIndex.moneys} style={dealStyles.moneyIcon} />
            <Text style={dealStyles.subTitle}>{item.subText}</Text>
          </View>
        </View>
        <TouchableOpacity style={dealStyles.frameIconContainer}>
          <Image source={imageIndex.frame} style={dealStyles.frameIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default DealsCard;
