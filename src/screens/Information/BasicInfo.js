import { View, Text, Image, TextInput } from 'react-native'
import React, { useCallback, useState } from 'react'
import DynamicButton from '../../components/Global/DynamicButton'
// import DocumentPicker from "react-native-document-picker";

export default function BasicInfo({ navigation }) {
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {
        // try {
        //     const response = await DocumentPicker.pick({
        //         presentationStyle: 'fullScreen',
        //     });
        //     setFileResponse(response);
        // } catch (err) {
        //     console.warn(err);
        // }
    }, []);
    return (
        <View className="w-full mt-20 p-6 bg-white flex flex-col justify-between">
            <View>
                <View className="flex content-center items-center mb-4">
                    <View className="w-[180px] h-[180px] border rounded-full border-gray-300">
                        <Image source={require('../../assets/images/bikeGuy.png')} className="w-[180px] h-[180px] " />
                    </View>
                    {fileResponse.map((file, index) => (
                        <Text
                            key={index.toString()}
                            style={styles.uri}
                            numberOfLines={1}
                            ellipsizeMode={'middle'}>
                            {file?.uri}
                        </Text>
                    ))}
                    <Text className='text-xl font-bold' onPress={handleDocumentSelection}>Upload Profile</Text>
                </View>
                <TextInput placeholder='Enter Phone Number' keyboardType="numeric" className="p-3 m-2 rounded-lg border border-gray-300" />
                <TextInput placeholder='First Name' className="p-3 m-2 rounded-lg border border-gray-300" />
                <TextInput placeholder='Last Name' className="p-3 m-2 rounded-lg border border-gray-300" />
                <TextInput placeholder='Father’s Name' className="p-3 m-2 rounded-lg border border-gray-300" />
                <TextInput placeholder='Gender' className="p-3 m-2 rounded-lg border border-gray-300" />
            </View>
            <DynamicButton
                btnText="Next"
                navigation={navigation}
                navigatingText="service-list"
                wrapperClass="mt-10"
            />
        </View>
    )
}