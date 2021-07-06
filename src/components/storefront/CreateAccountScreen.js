import React, { useState } from 'react';
import { SafeAreaView, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import tailwind from '../../tailwind';

const StorefrontCreateAccountScreen = ({ navigation, route }) => {
    const { info, key } = route.params;

    return (
        <SafeAreaView style={tailwind('bg-white')}>
            <View style={tailwind('w-full h-full bg-white relative')}>
                <View style={tailwind('flex flex-row items-center p-4')}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={tailwind('mr-4')}>
                        <View style={tailwind('rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center')}>
                            <FontAwesomeIcon icon={faTimes} />
                        </View>
                    </TouchableOpacity>
                    <Text style={tailwind('text-xl font-semibold')}>Create Account</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default StorefrontCreateAccountScreen;
