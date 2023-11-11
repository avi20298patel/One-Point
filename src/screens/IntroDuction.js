import { View, Text, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import manFull from '../assets/images/man-full.png'
import Slick from 'react-native-slick';
import { introCarousalData } from '../utils/data/helpers'

const IntroDuction = ({ navigation }) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const sliderRef = useRef()
    const handlePage = (value) => {
        setSlideIndex(value)
    }

    useEffect(() => {
        if ((sliderRef.current.state.index + 1) == sliderRef.current.state.total) {
            navigation.navigate('city-select')
        }
    }, [slideIndex]);

    return (
        <Slick
            ref={sliderRef}
            onIndexChanged={(index, total) => handlePage(index, total)}
            showsButtons={true}
            nextButton={<Text className="text-lg font-bold" >Next</Text>}
            prevButton={<Text className="hidden">Prev</Text>}
            buttonWrapperStyle={{
                flexDirection: 'row', flex: 1, paddingHorizontal: 20, paddingVertical: 30, justifyContent: 'space-between', alignItems: 'flex-end'
            }}
            index={slideIndex}
            showsPagination
            dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
            activeDot={<View style={{ backgroundColor: '#007aff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
        >
            {introCarousalData.map((item, index) => {
                return <View className="item text-center" key={index}>
                    <Image
                        className="rounded-2xl"
                        source={manFull}
                    />

                    <Text className="text-primary my-4 text-center block text-4xl">
                        <Text className="uppercase space-x-3 font-extralight tracking-widest">Are You a</Text>
                        <Text className="uppercase italic font-bold"> Technician?</Text>
                    </Text>

                    <Text className="text-center text-red-600 font-bold">
                        {index + 1}
                    </Text>
                </View>
            })}
        </Slick>
    )
}

export default IntroDuction


