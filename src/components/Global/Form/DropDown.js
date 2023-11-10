import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import * as Icon from 'react-native-feather'

export default function DropDown(props) {
    // const [isFocus, setIsFocus] = useState(false);
    const { values, value, setValue, dropdownStyle, isIcon, search, placeholder } = props
    return (
        <View>
            {/* {renderLabel()} */}
            <Dropdown
                className={`${dropdownStyle} h-10 `}
                placeholderStyle={{ fontSize: 18, textAlign: 'center' }}
                selectedTextStyle={{ fontSize: 18, textAlign: 'center' }}
                inputSearchStyle={{ fontSize: 18, height: 45 }}
                iconStyle={styles.iconStyle}
                data={values}
                search={search}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={placeholder}
                searchPlaceholder="Search..."
                value={value}
                // onFocus={() => setIsFocus(true)}
                // onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    // setIsFocus(false);
                }}
                renderRightIcon={() => (
                    <Icon.ChevronDown className={`${isIcon}`} stroke={'red'} fill="#fff" width={32} height={32} strokeWidth={2} />
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