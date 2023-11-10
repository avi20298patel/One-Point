import { Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { TabBar, TabView } from 'react-native-tab-view';
import CurrentAddress from './currentAddress';
import PermanentAddress from './permanentAddress';


const renderTabBar = props => (
    <TabBar
        {...props}
        gap={5}
        indicatorStyle={{ backgroundColor: 'white', display: 'none' }}
        style={{ backgroundColor: 'lightgray', borderRadius: 10 }}
        renderLabel={({ route, focused, color }) => (
            <Text
                style={{ paddingHorizontal: 10, paddingVertical: 10, fontSize: 15, fontWeight: 600 }}
                className={focused ? "bg-white" : "text-gray"}
            >
                {route.title}
            </Text>
        )}
    />
);

export default function Address({ navigation }) {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Current Address' },
        { key: 'second', title: 'Permanent Address' },
    ]);

    const [address, setAddress] = useState({
        "address1": "",
        "address2": "",
        "landmark": "",
        "city": "",
        "state": "",
        "pincode": ""
    })

    const renderScene = ({ route }) => {
        switch (route.key) {
            case "first":
                return <CurrentAddress address={address} setAddress={setAddress} setIndex={setIndex} />;
            case "second":
                return <PermanentAddress address={address} navigation={navigation} />;
            default:
                <CurrentAddress setAddress={setAddress} setIndex={setIndex} />;
        }
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={{ marginTop: 80 }}
        />
    )
}