import React from 'react'
import { Button } from 'react-native'

export default function SubmitButton({ btnText, onPress }) {
    return (
        <Button
            title={btnText}
            className="mt-52 bg-secondary p-2 rounded-lg"
            onPress={onPress}
        />
    )
}