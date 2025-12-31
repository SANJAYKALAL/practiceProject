import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from '../../../screens/profile/profile.style';
import imageIndex from '@imageIndex';

const LegalCard: React.FC<LegalCardProps> = ({ item, index, isLastItem }) => {
  return (
    <View style={styles.legalCart} key={index}>
      <TouchableOpacity activeOpacity={0.8} style={styles.touch}>
        <Text style={styles.listText}>{item.text}</Text>
        <Image source={imageIndex.arrowRight} style={styles.rightIcon} />
      </TouchableOpacity>
      {!isLastItem && <View style={styles.listSeparator} />}
    </View>
  );
};

export default LegalCard;
