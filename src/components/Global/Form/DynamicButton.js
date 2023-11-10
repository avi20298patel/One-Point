import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function DynamicButton({ navigation, navigatingText, btnText, isHelp, wrapperClass }) {
    return (
        <View className={`${wrapperClass}`}>
            <TouchableOpacity className="bg-primary p-2 rounded-lg" onPress={() => navigation.navigate(navigatingText)}              >
                <Text className="text-white text-2xl text-center">{btnText}</Text>
            </TouchableOpacity>
            {isHelp && <Text className="text-center mt-4">Need Help?</Text>}
        </View>
    )
}