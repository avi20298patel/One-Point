import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import * as Icon from 'react-native-feather'

export default function DropDown({ values, value, setValue }) {
    // const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View>
            {/* {renderLabel()} */}
            <Dropdown
                className="border-none w-20 border-r-4 border-gray-light"
                // style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={values}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                // placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            // renderLeftIcon={() => (
            //     <Icon.Share stroke="text-gray" />
            //     // <AntDesign
            //     //   style={styles.icon}
            //     //   color={isFocus ? 'blue' : 'black'}
            //     //   name="Safety"
            //     //   size={20}
            //     // />
            // )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        // width: 100,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});