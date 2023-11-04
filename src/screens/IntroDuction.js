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
        <Slick
            showsButtons={true}
            renderPagination={(index, total) => handlePage(index + 1, total)}
            nextButton={<Text className="text-lg font-bold" >Next</Text>}
            prevButton={<Text className="hidden">Prev</Text>}
            buttonWrapperStyle={{
                flexDirection: 'row', flex: 1, paddingHorizontal: 20, paddingVertical: 30, justifyContent: 'space-between', alignItems: 'flex-end'
            }}
            showsPagination
            dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
            activeDot={<View style={{ backgroundColor: '#007aff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
        // dotStyle=""
        // dotColor=''
        // activeDotColor=''
        // activeDotStyle=''
        >
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


