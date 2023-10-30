import { View, Text, TextInput, Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import manFull from '../../assets/images/man-full.png'
// import * as Icon from 'react-native-feather'
import Carousel from 'react-native-reanimated-carousel';

const IntroDuction = () => {
    const width = Dimensions.get('window').width;
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content " />
            <Carousel
                loop
                width={width}
                // height={width}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={500}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View className="item text-center ">
                        <Image
                            className="rounded-2xl"
                            source={manFull}
                        />

                        <Text className="text-primary my-4  block text-4xl">
                            <Text className="uppercase space-x-3 font-extralight tracking-widest">Are You a</Text>
                            <Text className="uppercase italic font-bold"> Technician?</Text>
                        </Text>

                        <Text className="text-neutral-600 font-thin">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </Text>
                    </View>
                )}
            />
            {/* <View className="owl-carousel p-4  ">
                <View className="item text-center ">
                    <Image
                        className="rounded-2xl"
                        source={manFull}
                    />

                    <Text className="text-primary my-4  block text-4xl">
                        <Text className="uppercase space-x-3 font-extralight tracking-widest">Are You a</Text>
                        <Text className="uppercase italic font-bold"> Technician?</Text>
                    </Text>

                    <Text className="text-neutral-600 font-thin">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
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

                    <Text className="text-neutral-600 font-thin">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
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

                    <Text className="text-neutral-600 font-thin">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
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

                    <Text className="text-neutral-600 font-thin">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </Text>
                </View>
            </View> */}
        </SafeAreaView>
    )
}

export default IntroDuction