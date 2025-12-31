import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import imageIndex from '@imageIndex';
import { styles } from '../../../screens/cart/cart.style';

const CartsCard: React.FC<CartsCardProps> = ({ item, updateQuantity }) => {
  return (
    <View>
      <View style={styles.listView}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <View style={styles.flexView}>
          <Text style={styles.title}>{item.pizzaName}</Text>
          {item.selectedSize?.length! > 0 && (
            <Text style={styles.size}>{item.selectedSize}</Text>
          )}
          <View style={styles.priceView}>
            <Image source={imageIndex.moneys} style={styles.moneyIcon} />
            <Text style={styles.priceText}>Price : {item.price}</Text>
          </View>
        </View>
        <View style={styles.quantityView}>
          <TouchableOpacity
            onPress={() =>
              updateQuantity(item.pizzaName, item.selectedSize!, 'decrease')
            }
          >
            <Text style={styles.minusText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.numberText}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() =>
              updateQuantity(item.pizzaName, item.selectedSize!, 'increase')
            }
          >
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separatorView} />
    </View>
  );
};

export default CartsCard;
