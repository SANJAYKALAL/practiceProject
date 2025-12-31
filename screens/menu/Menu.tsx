import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import useMenu from './useMenu';
import { style } from './menu.style';
import { mealDealStyle } from '@screens/mealDeal/mealDeal.style';
import { menuData } from './menu.const';
import { CustomHeader } from '@components';
import { MenuCard } from '@card';

const Menu: React.FC = () => {
  const { storeInPizzaData } = useMenu();

  return (
    <View style={style.mainContainer}>
      <CustomHeader title="Gusto’s Menu" isCart={true} />
      <ScrollView contentContainerStyle={mealDealStyle.flexGrow}>
        <FlatList
          data={menuData}
          style={style.marginTop}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <MenuCard
              item={item}
              index={index}
              onPress={() => storeInPizzaData(item)}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Menu;
