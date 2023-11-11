import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import DropDown from '../../../components/Global/Form/DropDown'
import { citiesData, statesData } from '../../../utils/data/helpers';

export default function CurrentAddress({ setIndex, address, setAddress }) {
    const handleTabChange = () => {
        setIndex(1)
    }
    return (
        <View className="flex flex-col justify-between content-between  p-6  h-full w-full">
            <View>
                <TextInput value={address?.address1} onChangeText={(value) => setAddress({ ...address, address1: value })} textAlign='center' placeholder='First Address Line' className="p-3 m-2 rounded-sm border border-gray" />
                <TextInput value={address?.address2} onChangeText={(value) => setAddress({ ...address, address2: value })} textAlign='center' placeholder='Second Address Line' className="p-3 m-2 rounded-sm border border-gray" />
                <TextInput value={address?.landmark} onChangeText={(value) => setAddress({ ...address, landmark: value })} textAlign='center' placeholder='Landmark' className="p-3 m-2 rounded-sm border border-gray" />
                <DropDown
                    textAlign='center'
                    placeholder='City'
                    placeholderStyle={{ textAlign: 'center' }}
                    value={address?.city}
                    setValue={(value) => setAddress({ ...address, city: value })}
                    values={citiesData}
                    dropdownStyle="p-5 py-6 m-2 rounded-sm border border-gray"
                />
                <DropDown
                    textAlign='center'
                    placeholder='State'
                    placeholderStyle={{ textAlign: 'center' }}
                    value={address?.state}
                    setValue={(value) => setAddress({ ...address, state: value })}
                    values={statesData}
                    dropdownStyle="p-5 py-6 m-2 rounded-sm border border-gray"
                />
                <TextInput value={address?.pincode} onChangeText={(value) => setAddress({ ...address, pincode: value })} textAlign='center' placeholder='Pin Code' className="p-3 m-2 rounded-sm border border-gray" keyboardType='numeric' maxLength={4} />
            </View>
            <View>
                <TouchableOpacity className="bg-primary p-2 rounded-sm" onPress={() => handleTabChange()}>
                    <Text className="text-white text-2xl text-center">Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}