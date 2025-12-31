import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { style } from './myWallet.style';
import imageIndex from '@imageIndex';
import { data } from './myWallet.const';
import { color } from '@theme';
import { CustomHeader } from '@components';
import { MyWalletCard } from '@card';

const MyWallet: React.FC = () => {
  return (
    <View style={style.flex}>
      <CustomHeader title="My Wallet" isBack={true} />
      <ScrollView contentContainerStyle={style.flexGrow}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[color.walletLinearA, color.walletLinearB]}
          style={style.linearGradient}
        >
          <Text style={style.accountBalance}>Account balance</Text>
          <Text style={style.balanceText}>£ 72.50</Text>
          <View style={style.separatorA} />
          <Text style={style.walletBalanceText}>
            Wallet balance can be used for all your orders across categories.
          </Text>
        </LinearGradient>

        <Text style={style.label}>Have a gift voucher?</Text>
        <Text style={style.redeemTextTagline}>
          Redeem your gift voucher by entering code below.
        </Text>
        <View style={style.inputContainer}>
          <View style={style.textInputContainer}>
            <View style={style.inputDirection}>
              <Image source={imageIndex.gift} style={style.giftIcon} />
              <TextInput
                placeholder="Please add voucher code"
                style={style.width}
                placeholderTextColor={color.border}
              />
            </View>
          </View>
          <TouchableOpacity style={style.touchContainer} activeOpacity={0.6}>
            <Text style={style.inputRedeemText}>Redeem</Text>
          </TouchableOpacity>
        </View>
        <Text style={style.label}>My Earned vouchers</Text>

        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <MyWalletCard item={item} index={index} />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default MyWallet;
