# Introduction
Introduction
This is a custom hook for scrolling to the first error in a form built with Formik, a popular library for handling forms in React. The hook makes it possible to automatically scroll to the first form field with an error, improving the user experience by directing their attention to the issue and making it easier to correct.
# Installation

Installation
To install this hook, simply copy the code in the `useFormScrollToError` function and paste it in your React project. You can then import it into the component where you want to use it.
### System Requirements

* Node and npm installed
* MacOS, Windows and Linux are supported

### Installation


## installation
1. To install, run:
   ```sh
   npm i @kabeerhaseja/react-native-essentials
   ```

#Usage
The hook provides two functions: `addPosition` and` scrollToError`.
1. Load the module in your component
```ssh
 const {addPosition, scrollToError} = useFormScrollToError();
```

The addPosition function takes two parameters: `position` and `key`. `position` is the position of the form field in the scroll view, and key is the formikKey that corresponds to the field in the Formik form. This function should be called for each form field, and the position and key values should be passed as arguments.

The `scrollToError` function takes two parameters: `formikRef` and `scrollViewRef`. `formikRef` is a reference to the Formik form, and `scrollViewRef` is a reference to the scroll view that contains the form fields. This function should be called when the form is submitted, and it will automatically scroll to the first form field with an error.

#### **Here's an example of how you might use this hook in a React component**

```
import React, {useRef} from 'react';
import {useFormScrollToError} from '@kabeerhaseja/react-native-essentials';

function MyForm() {
  const formikRef = useRef(null);
  const scrollViewRef = useRef(null);
  const {addPosition, scrollToError} = useFormScrollToError();

  const handleSubmit = () => {
    scrollToError(formikRef, scrollViewRef);
  };

  return (
    <ScrollView ref={scrollViewRef}>
      <Formik
        ref={formikRef}
        onSubmit={handleSubmit}
      >
        {({handleSubmit}) => (
          <View>
            <TextInput
              onLayout={(event) => {
                addPosition(event.nativeEvent.layout.y, 'email');
              }}
            />
            <TextInput
              onLayout={(event) => {
                addPosition(event.nativeEvent.layout.y, 'password');
              }}
            />
            <Button onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

```
# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you find a bug or would like to request a new feature, just open an issue. Your contributions are always welcome!

<p align="right">(<a href="#top">back to top</a>)</p>


## License

Distributed under the ISC License.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Kabeer Haseja -haseja45@gmail.com


