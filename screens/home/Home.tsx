import React from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './home.style';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  menuAndDealsData,
  mindMenu,
  offerAndBenefit,
  offerData,
} from './home.const';
import useHome from './useHome';
import { color } from '@theme';
import { CustomHeader } from '@components';
import {
  DealAndMenuCard,
  MindMenuCard,
  MinimumOfferCard,
  OfferAndBenefitCard,
} from '@card';

const Home: React.FC = () => {
  const { navigation } = useHome();
  return (
    <View style={styles.flex}>
      <StatusBar
        animated={true}
        backgroundColor={color.white}
        barStyle={'dark-content'}
        translucent={true}
      />
      <CustomHeader
        title="Home"
        home={true}
        isCart={true}
        address={'1406 Mattson Street, Astoria....'}
        isDropdown={true}
      />
      <ScrollView contentContainerStyle={styles.flexGrow}>
        <View style={styles.container}>
          <View style={styles.appIntraView}>
            <AppIntroSlider
              data={offerData}
              renderItem={({ item, index }) => <MinimumOfferCard item={item} />}
              showSkipButton={false}
              showNextButton={false}
              showDoneButton={false}
              bottomButton={true}
              renderPagination={activeIndex => (
                <View style={styles.appIntroPaginationContainer}>
                  {offerData.map((_, i) => (
                    <View
                      key={i}
                      style={[
                        styles.appIntroPagination,
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
          <View>
            <FlatList
              data={menuAndDealsData}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <DealAndMenuCard
                  item={item}
                  index={index}
                  onPress={() => navigation.navigate(item.screen)}
                />
              )}
            />
          </View>
          <Text style={styles.offerText}>Offers & benefits</Text>
          <View>
            <FlatList
              data={offerAndBenefit}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <OfferAndBenefitCard item={item} index={index} />
              )}
            />
          </View>
          <View style={styles.whatsYourMindContainer}>
            <Text style={styles.yourMindLabel}>What’s on your mind</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('menuScreen' as never)}
              activeOpacity={0.6}
            >
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={mindMenu}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.marginBottom}
              renderItem={({ item, index }) => (
                <MindMenuCard item={item} index={index} />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
