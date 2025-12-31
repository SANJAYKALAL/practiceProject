import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { gustoPizza, legal } from './profile.const';
import useProfile from './useProfile';
import { styles } from './profile.style';
import imageIndex from '@imageIndex';
import { CustomHeader, ModalComponent } from '@components';
import { GustoPizzaCard, LegalCard } from '@card';

const Profile: React.FC = () => {
  const {
    navigation,
    userData,
    visible,
    setVisible,
    deleteVisible,
    setDeleteVisible,
  } = useProfile();

  return (
    <View style={styles.mainContainer}>
      <CustomHeader title="My Profile" isCart={true} />
      <ScrollView contentContainerStyle={styles.flexGrow}>
        <View>
          <View style={styles.userProfileContainer}>
            <Image
              source={imageIndex.profilePicture}
              style={styles.userProfile}
            />
            <View style={styles.userTextContainer}>
              <Text
                style={styles.userNameText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {userData?.name && userData.name.length > 0
                  ? userData.name
                  : 'Test'}
              </Text>
              <Text style={styles.userEmail}>@stephanie_shark_007</Text>
              <View style={styles.orderContainer}>
                <View style={styles.numView}>
                  <Text style={styles.number}>27</Text>
                  <Text style={styles.orderText}> Orders</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.numView}>
                  <Text style={styles.number}>267</Text>
                  <Text style={styles.orderText}> Reward Points</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.topSeparator} />

        <Text style={styles.label}>GUSTO'S PIZZA</Text>
        <View style={styles.paddingTen}>
          <FlatList
            data={gustoPizza}
            style={styles.gustoList}
            renderItem={({ item, index }) => (
              <GustoPizzaCard
                item={item}
                index={index}
                isLastItem={index === gustoPizza.length - 1}
              />
            )}
          />
        </View>
        <Text style={styles.label}>ACCOUNT</Text>
        <View style={styles.accountContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('editProfile')}
            activeOpacity={0.8}
            style={styles.touch}
          >
            <Text style={styles.listText}>Edit Profile</Text>
            <Image source={imageIndex.arrowRight} style={styles.rightIcon} />
          </TouchableOpacity>
          <View style={styles.accountSeparator} />

          <TouchableOpacity
            onPress={() => setVisible(true)}
            activeOpacity={0.8}
            style={styles.touch}
          >
            <Text style={styles.listText}>Logout Account</Text>
            <Image source={imageIndex.arrowRight} style={styles.rightIcon} />
          </TouchableOpacity>
          <View style={styles.accountSeparator} />

          <TouchableOpacity
            onPress={() => setDeleteVisible(true)}
            activeOpacity={0.8}
            style={styles.touch}
          >
            <Text style={styles.listText}>Delete Account</Text>
            <Image source={imageIndex.arrowRight} style={styles.rightIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>LEGAL</Text>
        <View style={styles.paddingTen}>
          <FlatList
            data={legal}
            style={styles.gustoList}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <LegalCard
                item={item}
                index={index}
                isLastItem={index === legal.length - 1}
              />
            )}
          />
        </View>
      </ScrollView>
      <ModalComponent
        visible={visible}
        onClose={() => setVisible(false)}
        title="Are You Sure You Want to Logout?"
        buttonText="Logout"
        description=" Logging out will end your current session. You will need to log in
          again to place orders and track your deliveries."
      />

      <ModalComponent
        visible={deleteVisible}
        onClose={() => setDeleteVisible(false)}
        title="Are You Sure You Want Delete Account?"
        buttonText="Delete account"
        description="Deleting your account is permanent and cannot be undone. You will lose all your order history, saved addresses, and account data."
      />
    </View>
  );
};

export default Profile;
