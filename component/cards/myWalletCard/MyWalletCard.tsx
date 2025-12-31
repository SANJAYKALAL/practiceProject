import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from '../../../screens/myWallet/myWallet.style';

const MyWalletCard: React.FC<MyWalletCardProps> = ({ item, index }) => {
  return (
    <View style={style.listContainer} key={index}>
      <View style={style.leftContainer}>
        <Text style={style.offText}>{item.off}</Text>
      </View>
      <View style={style.rightContainer}>
        <Text style={style.title}>{item.text}</Text>
        <Text style={style.offerText}>{item.offer}</Text>
        <View style={style.separator} />
        <Text style={style.dateText}>
          <Text style={style.fontWeight}>Valid Till: </Text>
          {item.date}
        </Text>
        <TouchableOpacity style={style.redeemButtonInList} activeOpacity={0.6}>
          <Text style={style.redeemText}>Redeem</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyWalletCard;
