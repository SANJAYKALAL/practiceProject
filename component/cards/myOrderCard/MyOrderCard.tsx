import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { orderStyle } from '../../../screens/myOrder/myOrder.style';
import { color } from '@theme';
import imageIndex from '@imageIndex';

const MyOrderCard: React.FC<MyOrderCardProps> = ({ item, index }) => {
  return (
    <View style={orderStyle.ListContainer} key={index}>
      <View style={orderStyle.upperContainer}>
        <View>
          <Text style={orderStyle.orderId}>{item.orderId}</Text>
          <Text style={orderStyle.address}>{item.add}</Text>
        </View>
        <View
          style={[
            orderStyle.orderStatusBack,
            {
              backgroundColor:
                item.status == 1
                  ? color.green
                  : item.status == 2
                  ? color.orange
                  : color.primary,
            },
          ]}
        >
          <Text style={orderStyle.status}>
            {item.status == 1
              ? 'Delivered'
              : item.status == 2
              ? 'Cancelled'
              : 'Preparing'}
          </Text>
        </View>
      </View>
      <View style={orderStyle.separator} />
      <View>
        {item.orderItem.map(data => (
          <View style={orderStyle.orderMenuContainer}>
            <Image source={data.image} style={orderStyle.menuIcon} />
            <Text style={orderStyle.menuText}>{data.Text}</Text>
          </View>
        ))}
      </View>
      <View style={orderStyle.separator} />
      <View style={orderStyle.bottomContainer}>
        <Text style={orderStyle.date}>{item.date}</Text>
        <TouchableOpacity style={orderStyle.directionRow} activeOpacity={0.6}>
          <Image
            source={imageIndex.reOrderIcon}
            style={orderStyle.reorderIcon}
          />
          <Text style={orderStyle.reorderText}>Re-order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyOrderCard;
