import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { orderStyle } from './myOrder.style';
import imageIndex from '@imageIndex';
import { myOrderData } from './myOrder.cont';
import { CustomHeader } from '@components';
import { MyOrderCard } from '@card';

const MyOrder: React.FC = () => {
  const listEmpty = () => {
    return (
      <View style={orderStyle.listEmptyView}>
        <Image
          source={imageIndex.Validation}
          style={orderStyle.validationImage}
        />
        <Text style={orderStyle.text}>Ohh No, No order history Found</Text>
        <Text style={orderStyle.subText}>
          It looks like you haven’t placed any orders yet. Start exploring our
          delicious menu and place your first order today!
        </Text>
      </View>
    );
  };

  return (
    <View style={orderStyle.flex}>
      <CustomHeader title="My Order" isBack={true} />
      <FlatList
        data={myOrderData}
        style={orderStyle.marginHori}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={listEmpty()}
        renderItem={({ item, index }) => (
          <MyOrderCard item={item} index={index} />
        )}
      />
    </View>
  );
};

export default MyOrder;
