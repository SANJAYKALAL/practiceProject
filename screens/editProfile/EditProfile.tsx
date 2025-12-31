import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import useEditProfile from './useEditProfile';
import { profileStyles } from './editProfile.style';
import { styles } from '@screens/home/home.style';
import imageIndex from '@imageIndex';
import { CustomHeader } from '@components';
import { color } from '@theme';

const EditProfile: React.FC = () => {
  const {
    openGallery,
    storeData,
    name,
    setName,
    setEmail,
    setMobile,
    email,
    setVisible,
    mobile,
  } = useEditProfile();

  return (
    <View style={profileStyles.mainView}>
      <CustomHeader title="Edit Profile" isBack={true} />
      <ScrollView contentContainerStyle={styles.flexGrow}>
        <Image
          source={imageIndex.profilePicture}
          style={profileStyles.profileImage}
        />
        <TouchableOpacity activeOpacity={0.6} onPress={() => openGallery()}>
          <Text style={profileStyles.editProfileText}>
            Edit Profile Picture
          </Text>
        </TouchableOpacity>
        <View style={profileStyles.separator} />
        <View>
          <TextInput
            style={profileStyles.textInput}
            keyboardType="default"
            value={name}
            onChangeText={setName}
            placeholder="Enter Your Name"
            placeholderTextColor={color.editText}
          />
          <View style={profileStyles.yourNameView}>
            <Text style={profileStyles.text}>Your name</Text>
          </View>
        </View>
        <View>
          <TextInput
            style={profileStyles.textInput}
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
            maxLength={10}
            placeholder="Enter Your Mobile Number"
            placeholderTextColor={color.editText}
          />
          <View style={profileStyles.yourNameView}>
            <Text style={profileStyles.text}>Your Mobile Number</Text>
          </View>
        </View>
        <TouchableOpacity
          style={profileStyles.dateTouchContainer}
          activeOpacity={0.6}
          onPress={() => setVisible(true)}
        >
          <View style={profileStyles.dateContainer}>
            <Text style={profileStyles.DOB}>01/10/2000</Text>
            <View style={profileStyles.dateLabel}>
              <Text style={profileStyles.text}>Your Date of birth</Text>
            </View>
            <View style={profileStyles.dateIconView}>
              <Image
                source={imageIndex.calender}
                style={profileStyles.dateIcon}
              />
            </View>
          </View>
        </TouchableOpacity>

        <View>
          <TextInput
            style={[
              profileStyles.textInput,
              { backgroundColor: color.backGroundColor },
            ]}
            value={email}
            onChangeText={setEmail}
            editable={false}
          />
          <View style={profileStyles.yourNameView}>
            <Text style={profileStyles.text}>Your email address</Text>
          </View>
        </View>
        <Text style={profileStyles.staticText}>
          * You can not edit your email address
        </Text>
        <View style={profileStyles.bottomContainer}>
          <TouchableOpacity
            style={profileStyles.saveTouch}
            onPress={() => storeData()}
            activeOpacity={0.6}
          >
            <Text style={profileStyles.saveText}>Save details</Text>
          </TouchableOpacity>
        </View>
        {/* <CustomDatePicker visible={visible} onClose={() => setVisible(false)} /> */}
      </ScrollView>
    </View>
  );
};

export default EditProfile;
