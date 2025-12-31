import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from '../../../screens/profile/profile.style';
import imageIndex from '@imageIndex';
import { useAuthNavigation } from '@hooks/useAppNavigation';

const GustoPizzaCard: React.FC<GustoPizzaProps> = ({
  item,
  index,
  isLastItem,
}) => {
  const navigation = useAuthNavigation();
  return (
    <View style={styles.pizzaCard} key={index}>
      <TouchableOpacity
        onPress={() => navigation.navigate(item.screen as never)}
        activeOpacity={0.8}
        style={styles.touch}
      >
        <Text style={styles.listText}>{item.text}</Text>
        <Image source={imageIndex.arrowRight} style={styles.rightIcon} />
      </TouchableOpacity>
      {!isLastItem && <View style={styles.listSeparator} />}
    </View>
  );
};

export default GustoPizzaCard;
