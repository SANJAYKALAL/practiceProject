import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import useDeal from './useDeal';
import { dealStyles } from './deal.style';
import { color } from '@theme';
import { CustomHeader } from '@components';
import { DealsCard, MinimumOfferCard } from '@card';
import { dealsData, offerData } from './deals.const';

const Deals: React.FC = () => {
  const { storedata } = useDeal();
  return (
    <View style={dealStyles.mainView}>
      <CustomHeader
        title="Home"
        home={true}
        isCart={true}
        address={'1406 Mattson Street, Astoria....'}
        isDropdown={true}
      />
      <ScrollView contentContainerStyle={dealStyles.flexGrow}>
        <View style={dealStyles.appIntroView}>
          <AppIntroSlider
            data={offerData}
            renderItem={({ item }) => <MinimumOfferCard item={item} />}
            showSkipButton={false}
            showNextButton={false}
            showDoneButton={false}
            bottomButton={true}
            renderPagination={activeIndex => (
              <View style={dealStyles.paginationContainer}>
                {offerData.map((_, i) => (
                  <View
                    key={i}
                    style={[
                      dealStyles.offerDataStyle,
                      {
                        backgroundColor:
                          i === activeIndex ? color.white : color.dotColor,
                      },
                    ]}
                  />
                ))}
              </View>
            )}
          />
        </View>
        <View style={dealStyles.marginBottom}>
          <FlatList
            data={dealsData}
            style={dealStyles.paddingTen}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <DealsCard item={item} index={index} onPress={storedata} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Deals;
