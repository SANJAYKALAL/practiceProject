import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import useMealDeal from './useMealDeal';
import { useAuthNavigation } from '@hooks/useAppNavigation';
import { mealDealStyle } from './mealDeal.style';
import LinearGradient from 'react-native-linear-gradient';
import imageIndex from '@imageIndex';
import SvgIconIndex from '@svgIndex';
import { color } from '@theme';
import { MealDealCard } from '@card';

const MealDeal: React.FC = () => {
  const {
    mealData,
    storeData,
    toggleSelect,
    createMealData,
    name,
    isSelectionFull,
  } = useMealDeal();

  const navigation = useAuthNavigation();

  if (!createMealData) {
    return (
      <View style={mealDealStyle.mainContainer}>
        <Text>No deal found</Text>
      </View>
    );
  }

  return (
    <View style={mealDealStyle.mainContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ImageBackground
        source={createMealData.backImage as any}
        style={mealDealStyle.headerBack}
        resizeMode="cover"
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[color.mealDealLinearColorA, color.mealDealLinearColorB]}
          style={mealDealStyle.linearGradient}
        >
          <View style={mealDealStyle.topDataContainer}>
            <View style={mealDealStyle.goBackView}>
              <TouchableOpacity
                style={mealDealStyle.backTouch}
                activeOpacity={0.9}
                onPress={() => navigation.goBack()}
              >
                <Image
                  source={imageIndex.arrowLeft}
                  style={mealDealStyle.icon}
                />
              </TouchableOpacity>
              <Text style={mealDealStyle.headerTitle}>{name}</Text>
            </View>
            <View style={mealDealStyle.alignSelf}>
              <TouchableOpacity
                style={mealDealStyle.backTouch}
                activeOpacity={0.9}
              >
                <Image
                  source={imageIndex.unFillHeart}
                  style={mealDealStyle.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={mealDealStyle.titleContainer}>
        <View style={mealDealStyle.titleView}>
          <Text style={mealDealStyle.title}>{createMealData?.title}</Text>
          <Text style={mealDealStyle.subtitle}>({createMealData.subText})</Text>
        </View>

        <TouchableOpacity
          style={mealDealStyle.allergyTouch}
          activeOpacity={0.6}
        >
          <SvgIconIndex.dangerIcon />
          <Text style={mealDealStyle.allergyText}>Allergen Information</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={mealDealStyle.flexGrow}
        style={mealDealStyle.marginBottom}
        showsVerticalScrollIndicator={false}
        data={mealData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => (
          <MealDealCard
            item={item}
            index={index}
            toggleSelect={toggleSelect}
            disabled={isSelectionFull && !item.selected}
          />
        )}
      />

      <View style={mealDealStyle.bottomContainer}>
        <TouchableOpacity
          style={mealDealStyle.bottomTouch}
          onPress={storeData}
          activeOpacity={0.6}
        >
          <Text style={mealDealStyle.addToText}>Add to deal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MealDeal;
