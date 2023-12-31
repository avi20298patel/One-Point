import { View, Text } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import DynamicButton from '../components/Global/Form/DynamicButton'
import InputField from '../components/Global/Form/InputField'

export default function Otp({ navigation }) {
    return (
        <View className="flex flex-col justify-between content-between  p-6 pt-14  h-full w-full">
            <View>
                <Text className="text-primary uppercase mt-6   font-bold heading text-4xl">SIGN IN</Text>
                <View className="my-5 flex flex-row items-center">
                    <Text className="font-normal text-4xl flex-1 tracking-widest">8700 98 2628</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()} className="flex-shrink">
                        <Icon.PenTool stroke={'blue'} />
                    </TouchableOpacity>
                </View>

                <View className="flex-row flex content-between items-center gap-12 mt-1 mb-10">
                    {/* <InputField containerClass={true} keyboardType="numeric" />
                    <InputField containerClass={true} keyboardType="numeric" />
                    <InputField containerClass={true} keyboardType="numeric" />
                    <InputField containerClass={true} keyboardType="numeric" /> */}
                    <TextInput className="border border-gray-400 rounded text-center h-[50px] text-2xl focus:outline-none w-[50px]" keyboardType='numeric' maxLength={1} />
                    <TextInput className="border border-gray-400 rounded text-center h-[50px] text-2xl focus:outline-none w-[50px]" keyboardType='numeric' maxLength={1} />
                    <TextInput className="border border-gray-400 rounded text-center h-[50px] text-2xl focus:outline-none w-[50px]" keyboardType='numeric' maxLength={1} />
                    <TextInput className="border border-gray-400 rounded text-center h-[50px] text-2xl focus:outline-none w-[50px]" keyboardType='numeric' maxLength={1} />
                </View>
                <Text className="text-center text-lg">Didn’t Reveived OTP? <Text className="font-bold text-primary">Resend Now</Text></Text>

            </View>
            <DynamicButton
                btnText="Start Earning Now!"
                navigation={navigation}
                navigatingText="basic-info"
                isHelp={true}
            />
        </View>
    )
}