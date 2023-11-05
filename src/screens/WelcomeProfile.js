import { View, Text, Image } from 'react-native'
import React from 'react'

export default function WelcomeProfile({ navigation }) {
    return (
        <View className="w-[428px] h-[926px] bg-white">
            <Image className="w-[338px] h-[375px] mt-10 mx-auto" source={require('../assets/images/namaste.png')} />
            <View className="w-[296px] h-[159px] flex flex-col items-center">
                <Text className="text-primary text-[26px] font-bold">Welcome Back! </Text>
                <Text className="text-yellow text-[46px] font-bold">Ramesh Shah </Text>
                <Text className="text-xl text-accent font-light ">You are now </Text>
                <Text className="text-gray text-xl font-bold ">Premium member </Text>
                <Text className="text-accent text-xl font-normal ">on
                    <Text className="text-primary text-xl font-bold "> One Point. </Text>
                </Text>
                <Text className="text-accent text-xl font-normal"> You will get additonal Beneifts & offers now</Text>
            </View>
        </View>
    )
}