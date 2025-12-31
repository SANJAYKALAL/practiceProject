import React from 'react';
import { View, Text, FlatList, ScrollView, Image } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import useCreateDeal from './useCreateDeals';
import { style } from './createDeals.style';
import imageIndex from '@imageIndex';
import { color } from '@theme';
import { CreateDealCard } from '@card';
import { CustomHeader } from '@components';

const CreateDeals: React.FC = () => {
  const {
    deals,
    anySelected,
    dealsData,
    StoreDATA,
    storeInCart,
    navigation,
    reset,
    setReset,
  } = useCreateDeal();

  const listEmpty = () => (
    <View style={style.listEmpty}>
      <Text style={style.listEmptyText}>Coming Soon</Text>
    </View>
  );

  return (
    <View style={style.mainView}>
      <CustomHeader title="Create Deals" isBack={true} isCart={true} />
      <ScrollView contentContainerStyle={style.flexGrow}>
        <View style={style.megaDealContainer}>
          <View style={style.megaDealTextContainer}>
            <Text style={style.megaDealText}>{dealsData.text}</Text>
            <View style={style.directionRow}>
              <Image source={imageIndex.moneys} style={style.moneyIcon} />
              <Text style={style.priceText}>{dealsData.subText}</Text>
            </View>
          </View>

          <Text style={style.detailText}>
            ( 2*16” Pizza, 14” Pizza, 1 Premium Garlic bread, any 1 Gusto's
            Special Chips, 2 Bottle of Drinks )
          </Text>

          <FlatList
            data={dealsData.createDealsData}
            keyExtractor={item => item.id.toString()}
            style={style.marginBottom}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={listEmpty()}
            renderItem={({ item, index }) => {
              const existingDeal = deals.find(d => d.id === item.id);
              const isSelected = existingDeal?.isSelected || false;

              return (
                <CreateDealCard
                  item={item}
                  index={index}
                  isSelected={isSelected}
                  onPress={StoreDATA}
                />
              );
            }}
          />
        </View>
      </ScrollView>

      <View style={style.swipeContainer}>
        <SwipeButton
          height={55}
          width={330}
          title="Swipe right to add to basket"
          titleColor={color.white}
          titleFontSize={14}
          activeOpacity={1}
          forceReset={() => reset}
          shouldResetAfterSuccess
          onSwipeSuccess={() => {
            deals.filter(d => d.isSelected).forEach(deal => storeInCart(deal));
            navigation.navigate('cart');
            setReset(false);
          }}
          disabled={!anySelected}
          railFillBackgroundColor={anySelected ? color.primary : undefined}
          railFillBorderColor={anySelected ? color.primary : undefined}
          railBackgroundColor={anySelected ? color.primary : undefined}
          railBorderColor={anySelected ? color.primary : color.darGray}
          thumbIconBackgroundColor={color.white}
          thumbIconBorderColor={color.white}
          railStyles={style.railStyle}
          titleStyles={style.titleStyle}
          thumbIconComponent={() => (
            <View style={style.thumbView}>
              <Image
                source={imageIndex.doubleRightArrow}
                style={style.thumbIcon}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default CreateDeals;
