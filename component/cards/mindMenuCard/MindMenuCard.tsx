import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from '../../../screens/home/home.style';

const MindMenuCard: React.FC<MindMenuCardProps> = ({ item, index }) => {
  return (
    <View style={styles.mindMenuContainer} key={index}>
      <Image source={item.image} style={styles.mindMenuImage} />
      <Text style={styles.mindText}>{item.title}</Text>
    </View>
  );
};

export default MindMenuCard;
