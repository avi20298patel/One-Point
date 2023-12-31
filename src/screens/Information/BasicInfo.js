import { View, Text, Image, TextInput } from 'react-native'
import React, { useCallback, useState } from 'react'
import DynamicButton from '../../components/Global/Form/DynamicButton'
import DropDown from '../../components/Global/Form/DropDown';
import * as Icon from 'react-native-feather'

const data = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
    { label: 'Others', value: '3' },
];
export default function BasicInfo({ navigation }) {

    const [value, setValue] = useState('');

    const handleDocumentSelection = useCallback(async () => {
    }, []);
    return (
        <View className="w-full h-full mt-20 p-6 bg-white flex flex-col justify-between ">
            <View>
                <View className="flex content-center items-center mb-7">
                    <View className="w-[180px] h-[180px] rounded-full relative mb-5" style={{ backgroundColor: '#D9D9D9' }}>
                        <View className="w-[45px] h-[45px] rounded-full items-center justify-center absolute left-16 -bottom-5" style={{ backgroundColor: 'red' }}>
                            <Icon.Camera stroke={'red'} fill="#fff" width={32} height={32} strokeWidth={2} />
                        </View>
                    </View>
                    <Text className='text-xl font-bold' >Upload Profile</Text>
                </View>
                <TextInput textAlign='center' placeholder='First Name' className="p-3 m-2 rounded-lg border border-gray-300" />
                <TextInput textAlign='center' placeholder='Last Name' className="p-3 m-2 rounded-lg border border-gray-300" />
                <TextInput textAlign='center' placeholder='Father’s Name' className="p-3 m-2 rounded-lg border border-gray-300" />
                <DropDown
                    textAlign='center'
                    placeholder='Gender'
                    value={value}
                    setValue={setValue}
                    values={data}
                    placeholderStyle={{ textAlign: 'center' }}
                    dropdownStyle="p-5 py-6 m-2 rounded-lg border border-gray-300"
                />
            </View>
            <DynamicButton
                btnText="Next"
                navigation={navigation}
                navigatingText="address"
                wrapperClass="mb-20"
            />
        </View>
    )
}