import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import * as Icon from 'react-native-feather'

export default function DropDown({ values, value, setValue, dropdownStyle, isIcon }) {
    // const [isFocus, setIsFocus] = useState(false);

    return (
        <View>
            {/* {renderLabel()} */}
            <Dropdown
                className={`${dropdownStyle} h-10`}
                placeholderStyle={{ fontSize: 18 }}
                selectedTextStyle={{ fontSize: 18 }}
                inputSearchStyle={{ fontSize: 18, height: 45 }}
                iconStyle={styles.iconStyle}
                data={values}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={'Select item'}
                searchPlaceholder="Search..."
                value={value}
                // onFocus={() => setIsFocus(true)}
                // onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    // setIsFocus(false);
                }}
                renderRightIcon={() => (
                    <Icon.ChevronDown className={`${isIcon}`} stroke={'gray'} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 5,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
});