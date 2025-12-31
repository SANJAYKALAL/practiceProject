import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { styles } from '../../../screens/home/home.style';

const MinimumOfferCard: React.FC<MinimumOfferCardProps> = ({ item }) => {
  return (
    <View style={styles.paddingTen}>
      <ImageBackground source={item.image} imageStyle={styles.radius}>
        <View style={styles.textViewContainer}>
          <View style={styles.marginTopFifteen}>
            <Text style={styles.getOffText}>{item.offerText}</Text>
            <Text style={styles.freeDeliveryText}>{item.freeText}</Text>
            <Text style={styles.yourOrderText}>{item.onYourOrder}</Text>
            <TouchableOpacity
              style={styles.orderNowContainer}
              activeOpacity={0.6}
            >
              <Text style={styles.orderNowText}>ORDER NOW</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image source={item.pizzaImage} style={styles.miniPizza} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MinimumOfferCard;
