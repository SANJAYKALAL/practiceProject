import { View, FlatList, Text, Image } from 'react-native';
import React from 'react';
import useMyWishList from './useMyWishList';
import { style } from './myWishList.style';
import imageIndex from '@imageIndex';
import { CustomHeader } from '@components';
import { MyWishListCard } from '@card';

const MyWishlist: React.FC = () => {
  const { getWishListData, storeInCartData, toggleWish } = useMyWishList();

  const showEmptyListView = () => {
    return (
      <View style={style.listEmptyView}>
        <Image source={imageIndex.Validation} style={style.validationIcon} />
        <Text style={style.noDataFoundText}>No data found :(</Text>
      </View>
    );
  };

  return (
    <View style={style.mainContainer}>
      <CustomHeader title="My Wishlist" isBack={true} isCart={true} />
      <FlatList
        data={getWishListData}
        style={style.marginTop}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        ListEmptyComponent={showEmptyListView()}
        renderItem={({ item, index }) => (
          <MyWishListCard
            item={item}
            index={index}
            onPress={storeInCartData}
            heartPress={toggleWish}
            isWished={getWishListData.some(data => data.id === item.id)}
          />
        )}
      />
    </View>
  );
};

export default MyWishlist;
