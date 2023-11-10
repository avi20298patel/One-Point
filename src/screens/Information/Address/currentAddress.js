import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DynamicButton from '../../../components/Global/Form/DynamicButton'
import DropDown from '../../../components/Global/Form/DropDown'


const data1 = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
    { label: 'Others', value: '3' },
];


const data2 = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
    { label: 'Others', value: '3' },
];


export default function CurrentAddress({ setIndex, address, setAddress }) {

    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const handleTabChange = () => {
        setIndex(1)
    }
    return (
        <View className="flex flex-col justify-between content-between  p-6  h-full w-full">
            <View>
                <TextInput value={address?.address1} onChangeText={(value) => setAddress({ ...address, address1: value })} textAlign='center' placeholder='First Address Line' className="p-3 m-2 rounded-lg border border-gray-300" />
                <TextInput value={address?.address2} onChangeText={(value) => setAddress({ ...address, address2: value })} textAlign='center' placeholder='Second Address Line' className="p-3 m-2 rounded-lg border border-gray-300" />
                <TextInput value={address?.landmark} onChangeText={(value) => setAddress({ ...address, landmark: value })} textAlign='center' placeholder='Landmark' className="p-3 m-2 rounded-lg border border-gray-300" />
                <DropDown
                    textAlign='center'
                    placeholder='City'
                    value={address?.city}
                    setValue={(value) => setAddress({ ...address, city: value })}
                    // setValue={setCity}
                    values={data1}
                    dropdownStyle="p-5 py-6 m-2 rounded-lg border border-gray-300"
                />
                <DropDown
                    textAlign='center'
                    placeholder='State'
                    value={address?.state}
                    setValue={(value) => setAddress({ ...address, state: value })}
                    // setValue={setState}
                    values={data2}
                    dropdownStyle="p-5 py-6 m-2 rounded-lg border border-gray-300"
                />
                <TextInput value={address?.pincode} onChangeText={(value) => setAddress({ ...address, pincode: value })} textAlign='center' placeholder='Pin Code' className="p-3 m-2 rounded-lg border border-gray-300" keyboardType='numeric' maxLength={4} />
            </View>
            <View>
                <TouchableOpacity className="bg-primary p-2 rounded-lg" onPress={() => handleTabChange()}>
                    <Text className="text-white text-2xl text-center">Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}