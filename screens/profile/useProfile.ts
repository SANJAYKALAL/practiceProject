import { useAuthNavigation } from '@hooks/useAppNavigation';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../service/redux/rootReducer';

const useProfile = () => {
  const navigation = useAuthNavigation();
  const userData = useSelector(
    (state: RootState) => state.storeData.userData,
  ) as User | null;
  const [visible, setVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);

  return {
    navigation,
    userData,
    visible,
    setVisible,
    deleteVisible,
    setDeleteVisible,
  };
};

export default useProfile;
