import { FlatList, View } from 'react-native';
import React from 'react';
import { style } from './myPaymentCard.style';
import { data } from './myPaymentCard.const';
import { CustomHeader } from '@components';
import { MyPaymentCards } from '@card';

const MyPaymentCard: React.FC = () => {
  return (
    <View style={style.mainContainer}>
      <CustomHeader isBack={true} title="My Payment Card" />
      <FlatList
        data={data}
        style={style.listStyle}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <MyPaymentCards item={item} index={index} />
        )}
      />
    </View>
  );
};

export default MyPaymentCard;
