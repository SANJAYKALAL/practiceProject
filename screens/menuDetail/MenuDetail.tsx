import React from 'react';
import { FlatList, View } from 'react-native';
import useMenuDetail from './useMenuDetail';
import { styles } from './menuDetail.style';
import { topTabData } from './menuDetail.const';
import { MenuDetailCard, MenuDetailTopTabCard } from '@card';
import { CustomHeader } from '@components';

const MenuDetail: React.FC = () => {
  const {
    addToWish,
    storeInCartData,
    handleTabPress,
    togglePopup,
    openPopupId,
    setOpenPopupId,
    selectedSizes,
    setSelectedSizes,
    filteredData,
    selectedIndex,
    data,
    getWishListData,
  } = useMenuDetail();
  return (
    <View style={styles.mainView}>
      <CustomHeader title={data} isCart={true} isBack={true} />
      <View style={styles.topBarView}>
        <FlatList
          data={topTabData}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontal}
          contentContainerStyle={styles.alignSelf}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <MenuDetailTopTabCard
              item={item}
              index={index}
              isSelected={selectedIndex === index}
              onPress={handleTabPress}
            />
          )}
        />
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.paddingBottom}
        renderItem={({ item, index }) => (
          <MenuDetailCard
            item={item}
            index={index}
            selectedSizes={selectedSizes}
            openPopupId={openPopupId}
            togglePopup={togglePopup}
            setSelectedSizes={setSelectedSizes}
            setOpenPopupId={setOpenPopupId}
            getWishListData={getWishListData}
            addToWish={addToWish}
            storeCartData={storeInCartData}
          />
        )}
      />
    </View>
  );
};

export default MenuDetail;
