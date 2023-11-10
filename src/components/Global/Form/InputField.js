import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function InputField(props) {
    const { containerClass, className, styles, onFocus, onChange, onChangeText, onKeyPress, onScroll, onSelectionChange, label, placeholder, value, keyboardType, editable, multiline, numberOfLines, maxLength,
        autoCapitalize, autoComplete, autoCorrect, autoFocus, caretHidden, clearButtonMode, clearTextOnFocus, contextMenuHidden,
        dataDetectorTypes, defaultValue, cursorColor, disableFullscreenUI, enablesReturnKeyAutomatically, enterKeyHint,
        inlineImageLeft, inlineImagePadding, inputMode, readOnly, textAlign } = props
    return (
        <View className={containerClass && "flex-row flex-1 items-center p-3 rounded-lg border border-gray-300"}>
            <TextInput
                className={className}
                editable={editable}
                multiline={multiline}
                numberOfLines={numberOfLines}
                maxLength={maxLength}
                style={styles}
                onChange={onChange}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onKeyPress={onKeyPress}
                onScroll={onScroll}
                onSelectionChange={onSelectionChange}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                autoComplete={autoComplete}
                autoCorrect={autoCorrect}
                autoFocus={autoFocus}
                caretHidden={caretHidden}
                clearButtonMode={clearButtonMode}
                clearTextOnFocus={clearTextOnFocus}
                contextMenuHidden={contextMenuHidden}
                dataDetectorTypes={dataDetectorTypes}
                defaultValue={defaultValue}
                cursorColor={cursorColor}
                disableFullscreenUI={disableFullscreenUI}
                enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
                enterKeyHint={enterKeyHint}
                inlineImageLeft={inlineImageLeft}
                inlineImagePadding={inlineImagePadding}
                inputMode={inputMode}
                readOnly={readOnly}
                textAlign={textAlign}
            />
        </View>
    )
}