import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { rewardData, steps } from './rewardPoint.const';
import { style } from './rewardPoint.style';
import imageIndex from '@imageIndex';
import { color } from '@theme';
import { CustomHeader } from '@components';
import { RewardCard } from '@card';

const RewardPoint: React.FC = () => {
  const listFooter = () => {
    return (
      <TouchableOpacity style={style.listFooter} activeOpacity={0.6}>
        <Image source={imageIndex.information} style={style.infoImage} />
        <Text style={style.termsText}>Check Terms & Conditions</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={style.flex}>
      <CustomHeader isBack={true} title="My Reward" />

      <ScrollView contentContainerStyle={style.flexGrow}>
        <Text style={style.label}>Exclusive rewards for you</Text>

        <View style={style.rewardStep}>
          {steps.map((data, index) => {
            const firstIncompleteIndex = steps.findIndex(
              step => !step.completed,
            );

            return (
              <View key={index} style={style.rewardIconView}>
                <Image
                  source={require('../../assets/image/rewardIcon.png')}
                  style={[
                    style.rewardIconA,
                    { opacity: data.completed ? 1 : 0.2 },
                  ]}
                />

                {index < steps.length - 1 && (
                  <View
                    style={[
                      style.stepLine,
                      {
                        backgroundColor: data.completed
                          ? color.primary
                          : color.border,
                      },
                    ]}
                  />
                )}

                <View
                  style={[
                    style.stepContainer,
                    {
                      borderColor: data.completed
                        ? color.primary
                        : color.border,
                      backgroundColor: data.completed
                        ? color.primary
                        : color.border,
                    },
                  ]}
                >
                  {data.completed && <Text style={style.tickText}>✓</Text>}
                </View>

                {index === firstIncompleteIndex && (
                  <View style={style.rewardLabel}>
                    <View style={style.popUp} />

                    <Text style={style.rewardLabelText}>Reward for you</Text>
                    <Text style={style.orderText}>
                      Place 1 more order to unlock reward
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>

        <Text style={style.OrderPlaced}>Order placed for rewards</Text>
        <FlatList
          data={rewardData}
          style={style.listStyle}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <RewardCard item={item} index={index} />
          )}
          ListFooterComponent={listFooter()}
        />
      </ScrollView>
    </View>
  );
};

export default RewardPoint;
