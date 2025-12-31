import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import imageIndex from '@imageIndex';
import { styles } from '../../../screens/cart/cart.style';

const CompleteYourMealCard: React.FC<CompleteYourMealCardProps> = ({
  item,
  onPress,
}) => {
  return (
    <View style={styles.mealDataView}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.nameView}>
        <Text>{item.name}</Text>
        <Text>Price : {item.price}</Text>
      </View>
      <TouchableOpacity style={styles.addTouch} onPress={() => onPress(item)}>
        <Image source={imageIndex.addIcon} style={styles.addIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default CompleteYourMealCard;
