import imageIndex from '@imageIndex';
import { styles } from '../../../screens/menuDetail/menuDetail.style';
import { color } from '@theme';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const MenuDetailCard: React.FC<MenuDetailCardProps> = ({
  item,
  index,
  selectedSizes,
  openPopupId,
  togglePopup,
  setSelectedSizes,
  setOpenPopupId,
  getWishListData,
  addToWish,
  storeCartData,
}) => {
  const defaultSize = item?.size?.[0]?.size ?? 'Small 9"';
  const defaultPrice = item?.size?.[0]?.price ?? item?.price ?? '£ 7.99';

  const displayedSize = selectedSizes[item.id]?.size ?? defaultSize;
  const displayedPrice = selectedSizes[item.id]?.price ?? defaultPrice;

  return (
    <View style={styles.listContainer} key={index}>
      <View style={styles.directionRow}>
        <View>
          <Image source={item.image} style={styles.pizzaImage} />
          <TouchableOpacity
            style={styles.heartContainer}
            onPress={() => addToWish(item)}
            activeOpacity={0.6}
          >
            <Image
              source={
                getWishListData.some(data => data.id === item.id)
                  ? imageIndex.heart
                  : imageIndex.unFillHeart
              }
              style={[
                styles.heartIcon,
                {
                  tintColor: getWishListData.some(data => data.id === item.id)
                    ? color.red
                    : color.white,
                },
              ]}
            />
          </TouchableOpacity>
          {item.new ? (
            <View style={styles.newContainer}>
              <Text style={styles.newText}>New</Text>
            </View>
          ) : null}
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.pizzaNametext}>{item.pizzaName}</Text>
          <Text style={styles.pizzaDetailText} numberOfLines={3}>
            {item.detail}
          </Text>
          <View style={styles.textAndAdd}>
            {item.size?.length > 0 ? (
              <TouchableOpacity
                style={styles.sizeContainer}
                onPress={() => togglePopup(item.id)}
                activeOpacity={0.6}
              >
                <Image
                  source={imageIndex.pizzaSlice}
                  style={styles.pizzaSliceIcon}
                />
                <Text style={styles.size}>Size: {displayedSize}</Text>
                <Image
                  source={imageIndex.arrowRight}
                  style={styles.rightArrow}
                />
              </TouchableOpacity>
            ) : (
              <View style={styles.moneyDisplayView}>
                <Image
                  source={imageIndex.moneys}
                  style={styles.pizzaSliceIcon}
                />
                <Text style={styles.size}>Price: {displayedPrice}</Text>
              </View>
            )}
            <View style={styles.rightContainer}>
              <TouchableOpacity
                onPress={() => storeCartData(item)}
                activeOpacity={0.6}
              >
                <Image source={imageIndex.addIcon} style={styles.addIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View>
        {openPopupId === item.id && (
          <View style={styles.popupWrapper}>
            <View style={styles.arrowUp} />
            <View style={styles.popupBox}>
              {item?.size?.map((sizeItem: any) => (
                <TouchableOpacity
                  key={sizeItem.id ?? sizeItem.size}
                  style={styles.optionRow}
                  activeOpacity={0.6}
                  onPress={() => {
                    setSelectedSizes(prev => ({
                      ...prev,
                      [item.id]: { size: sizeItem.size, price: sizeItem.price },
                    }));
                    setOpenPopupId(null);
                  }}
                >
                  <Text style={styles.optionLabel}>{sizeItem.size}</Text>
                  <Text style={styles.optionPrice}>{sizeItem.price}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default MenuDetailCard;
