import React, {useRef} from 'react';

export function useFormScrollToError() {
    
    
    const ref = useRef([])
    const addPosition = (position, key) => {
        if (ref?.current) {
            ref.current = [...ref?.current, {formikKey: key, position}]
        }
    }
    const scrollToError = (formikRef, scrollViewRef) => {
        const sortedArray = ref?.current?.sort((a, b) => (a?.position > b?.position) ? 1 : -1)
        for (const element of sortedArray) {
            if (formikRef.current?.errors[element?.formikKey]) {
                scrollViewRef?.current?.scrollTo({
                    x: 0,
                    y: element?.position,
                    animated: true
                })
                break
            }
        }
    }
    
    return {addPosition, scrollToError}
}
