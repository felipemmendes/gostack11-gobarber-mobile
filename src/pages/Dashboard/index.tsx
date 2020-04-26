import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={signOut}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ff9000',
          width: '50%',
          padding: 16,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: '#fff', fontFamily: 'RobotoSlab-Medium' }}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
