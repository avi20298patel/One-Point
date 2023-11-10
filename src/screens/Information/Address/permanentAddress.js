import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import DynamicButton from '../../../components/Global/Form/DynamicButton'
import DropDown from '../../../components/Global/Form/DropDown'
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'expo-checkbox';


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

export default function PermanentAddress({ navigation, address }) {

    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [perAddress, setPerAddress] = useState({
        "address1": "",
        "address2": "",
        "landmark": ""
    })

    const handleCheckSameAddress = (checked) => {
        setSelection(checked)
        if (checked) {
            setPerAddress(address)
        } else {
            setPerAddress({
                "address1": "",
                "address2": "",
                "landmark": "",
                "city": "",
                "state": "",
                "pincode": ""
            })
        }
    }
    return (
        <View className="flex flex-col justify-between content-between  p-6  h-full w-full">
            <View>
                <View className="flex flex-row mb-3 p-3">
                    <CheckBox
                        value={isSelected}
                        onValueChange={(e) => handleCheckSameAddress(e)}
                        className="align-middle"
                    />
                    <Text className="ml-2">Same as Current Address</Text>
                </View>
                <TextInput value={perAddress?.address1} textAlign='center' placeholder='First Address Line' className="p-3 m-2 rounded-lg border border-gray-300" />
                <TextInput value={perAddress?.address2} textAlign='center' placeholder='Second Address Line' className="p-3 m-2 rounded-lg border border-gray-300" />
                <TextInput value={perAddress?.landmark} textAlign='center' placeholder='Landmark' className="p-3 m-2 rounded-lg border border-gray-300" />
                <DropDown
                    textAlign='center'
                    placeholder='City'
                    value={perAddress?.city}
                    setValue={(value) => setPerAddress({ ...perAddress, city: value })}
                    values={data1}
                    dropdownStyle="p-5 py-6 m-2 rounded-lg border border-gray-300"
                />
                <DropDown
                    textAlign='center'
                    placeholder='State'
                    value={perAddress?.state}
                    setValue={(value) => setPerAddress({ ...perAddress, state: value })}
                    values={data2}
                    dropdownStyle="p-5 py-6 m-2 rounded-lg border border-gray-300"
                />
                <TextInput value={perAddress?.pincode} onChangeText={(value) => setPerAddress({ ...perAddress, pincode: value })} textAlign='center' placeholder='Pin Code' className="p-3 m-2 rounded-lg border border-gray-300" keyboardType='numeric' maxLength={4} />
            </View>
            <DynamicButton
                btnText="Next"
                navigation={navigation}
                navigatingText="kyc"
            />
        </View>
    )
}