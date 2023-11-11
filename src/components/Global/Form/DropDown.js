import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import * as Icon from 'react-native-feather'

export default function DropDown(props) {
    const { placeholderStyle, values, value, setValue, dropdownStyle, isIcon, search, placeholder } = props
    const phStyle1 = { fontWeight: 300 }
    const phStyle = { ...placeholderStyle, ...phStyle1 }
    return (
        <View>
            <Dropdown
                className={`${dropdownStyle} h-10 `}
                placeholderStyle={phStyle}
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
                onChange={item => {
                    setValue(item.value);
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