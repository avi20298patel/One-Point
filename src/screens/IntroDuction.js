import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import manFull from '../assets/images/man-full.png'
// import * as Icon from 'react-native-feather'
import Slick from 'react-native-slick';

const IntroDuction = ({ navigation }) => {
    const [page, setPage] = useState(0)
    const handlePage = (value, total) => {
        setPage(value)
        if (value == total) {
            navigation.navigate('city-select')
        }
    }
    return (

        <Slick showsButtons={true} renderPagination={(index, total) => handlePage(index + 1, total)}>
            <View className="item text-center ">
                <Image
                    className="rounded-2xl"
                    source={manFull}
                />

                <Text className="text-primary my-4  block text-4xl">
                    <Text className="uppercase space-x-3 font-extralight tracking-widest">Are You a</Text>
                    <Text className="uppercase italic font-bold"> Technician?</Text>
                </Text>

                <Text className=" text-red-600 font-bold">
                    {page}
                </Text>
            </View>
            <View className="item text-center ">
                <Image
                    className="rounded-2xl"
                    source={manFull}
                />

                <Text className="text-primary my-4  block text-4xl">
                    <Text className="uppercase space-x-3 font-extralight tracking-widest">Are You a</Text>
                    <Text className="uppercase italic font-bold"> Technician?</Text>
                </Text>

                <Text className=" text-red-600 font-bold">
                    {page}
                </Text>
            </View>
            <View className="item text-center ">
                <Image
                    className="rounded-2xl"
                    source={manFull}
                />

                <Text className="text-primary my-4  block text-4xl">
                    <Text className="uppercase space-x-3 font-extralight tracking-widest">Are You a</Text>
                    <Text className="uppercase italic font-bold"> Technician?</Text>
                </Text>

                <Text className=" text-red-600 font-bold">
                    {page}
                </Text>
            </View>
        </Slick>
    )
}

export default IntroDuction


