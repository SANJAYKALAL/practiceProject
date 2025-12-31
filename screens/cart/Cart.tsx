import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import imageIndex from '@imageIndex';
import { styles } from './cart.style';
import { compYourMealData } from './cart.const';
import { color } from '@theme';
import useCart from './useCart';
import SwipeButton from 'rn-swipe-button';
import { CustomHeader } from '@components';
import { CartsCard, CompleteYourMealCard } from '@card';

const Cart: React.FC = () => {
  const {
    totalAmount,
    addToCart,
    updateQuantity,
    groupedData,
    cartData,
    subtotal,
    navigation,
  } = useCart();

  const ListEmpty = () => {
    return (
      <View style={styles.listEmptyView}>
        <Image source={imageIndex.Validation} style={styles.validationImage} />
        <Text style={styles.text}>Ohh No, Your Cart is Empty</Text>
        <Text style={styles.subText}>
          Your cart is waiting to be filled with delicious pizza and more. Start
          adding your favorites now!
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <CustomHeader title="Cart" isBack={true} />
      <ScrollView contentContainerStyle={styles.flexGrow}>
        <View
          style={[
            styles.listContainer,
            groupedData.length > 0 && styles.listContainerForBorder,
          ]}
        >
          <FlatList
            data={groupedData}
            keyExtractor={(item, index) => item.id.toString() + index}
            contentContainerStyle={styles.flexGrow}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <CartsCard
                  item={item}
                  index={index}
                  updateQuantity={(id, size, operation) =>
                    updateQuantity(id, size, operation)
                  }
                />
              );
            }}
            ListFooterComponent={() =>
              cartData?.length > 0 ? (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.listFooterTouch}
                  onPress={() =>
                    navigation.navigate('bottomTabs', { screen: 'menu' })
                  }
                >
                  <Image source={imageIndex.pencil} style={styles.editIcon} />
                  <Text style={styles.addMoreText}>Add more item</Text>
                </TouchableOpacity>
              ) : null
            }
            ListEmptyComponent={<ListEmpty />}
          />
        </View>

        {cartData?.length > 0 ? (
          <>
            <Text style={styles.compText}>Complete your meal</Text>
            <View>
              <FlatList
                data={compYourMealData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (
                    <CompleteYourMealCard item={item} onPress={addToCart} />
                  );
                }}
                style={styles.mealList}
              />
            </View>
          </>
        ) : null}
        {cartData?.length > 0 ? (
          <>
            <Text style={styles.compText}>Tip</Text>
            <View style={styles.tipView}>
              <View style={styles.inputView}>
                <Image source={imageIndex.moneys} style={styles.MoneyIcon} />
                <TextInput
                  placeholder="Please add your tip"
                  style={styles.tipInput}
                  keyboardType="numeric"
                  placeholderTextColor={color.heartBackground}
                />
              </View>
              <TouchableOpacity style={styles.add} activeOpacity={0.6}>
                <Text style={styles.addTipText}>Add tip</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : null}
        {cartData?.length > 0 ? (
          <View style={styles.addNoteView}>
            <TextInput multiline />

            <Text style={styles.addNoteText}>Add Your Note</Text>
          </View>
        ) : null}
        {cartData?.length > 0 ? (
          <View style={styles.totalView}>
            <View style={styles.subTotalView}>
              <Text style={styles.subTotalText}>
                Sub Total ({groupedData.length} items)
              </Text>
              <Text style={styles.totalText}>£ {subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.separatorView} />
            <View style={styles.subTotalView}>
              <Text style={styles.subTotalText}>Total Amount</Text>
              <Text style={styles.subTotalText}>
                £ {totalAmount.toFixed(2)}
              </Text>
            </View>
          </View>
        ) : null}
      </ScrollView>

      {cartData?.length > 0 ? (
        <View style={styles.swipeContainer}>
          <SwipeButton
            height={55}
            width={330}
            title="Swipe right to checkout"
            titleColor={color.white}
            titleFontSize={16}
            activeOpacity={1}
            onSwipeSuccess={() => Alert.alert('Submitted!')}
            railFillBackgroundColor={color.primary}
            railFillBorderColor={color.primary}
            railBackgroundColor={color.primary}
            railBorderColor={color.primary}
            thumbIconBackgroundColor={color.white}
            thumbIconBorderColor={color.white}
            railStyles={styles.railStyle}
            titleStyles={styles.titleStyle}
            thumbIconComponent={() => (
              <View style={styles.thumbView}>
                <Image
                  source={imageIndex.doubleRightArrow}
                  style={styles.thumbIcon}
                />
              </View>
            )}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
