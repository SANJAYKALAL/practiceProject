import { useState } from 'react';
import { useSelector } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import { useAuthNavigation } from '@hooks/useAppNavigation';
import { useAppDispatch } from '@hooks/useRedux';
import { RootState } from '../../service/redux/rootReducer';
import { storeUserData } from '../../service/redux/storeData/storeDataSlice';

const useEditProfile = () => {
  const navigation = useAuthNavigation();
  const dispatch = useAppDispatch();
  const userData = useSelector((state: RootState) => state.storeData.userData);
  const [name, setName] = useState(userData?.name || '');
  const [mobile, setMobile] = useState(userData?.mobile || '');
  const [email, setEmail] = useState(
    userData?.email || 'stephanieshark@example.com',
  );
  const [visible, setVisible] = useState(false);

  const storeData = () => {
    const request: EditUser = {
      name,
      mobile,
      email,
    };
    dispatch(storeUserData(request));
    navigation.goBack();
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
      }
    });
  };

  return {
    openGallery,
    storeData,
    mobile,
    name,
    email,
    userData,
    setName,
    setEmail,
    setMobile,
    setVisible,
    visible,
  };
};

export default useEditProfile;
