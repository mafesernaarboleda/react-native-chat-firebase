# React Native Chat + Backend Firebase
An example of React Native project with Backand Inetgartion and workflow based on
[react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html)

# Prerequisites 
1. Install latest nodeJs https://nodejs.org/

2. Install React Native CLI(This is global Dependency). [react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html)

```bash
$ npm install -g react-native-cli
```

Read more [react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html)

# Getting started
1. Clone Project
```bash
 $ git clone https://github.com//mafesernaarboleda/react-native-chat-firebase.git
 $ cd react-native-chat-firebase
```    
2. Go to project folder and install dependencies:
 ```bash
 $ npm install
 ```
 
3. Set up Firebase

Firebase is a real-time cloud database that helps you build apps without building the backend. You can save and retrieve JSON objects, build user authentication, and get data updates in real-time. All we need for a chat app

Create a new Firebase app on [your Firebase console](https://console.firebase.google.com/). You’ll need a Google Account.

Rename file from `firebase.exmaple.js` to `firebase.js` that can be found by the path: *app/configs/firebase.js* the config from your Firebase account and paste it to firebase.js

```js
export const firebaseConfig = {
    apiKey: "apikey",
    authDomain: "name.firebaseapp.com",
    databaseURL: "https://name.firebaseio.com/"
}
```
  
# Set up your emulator

## iOS

*Before running iOS build, Install [Xcode](https://developer.apple.com/xcode/download/)*

### Launch App

```shell
$ react-native run-ios
```

## Android

*Before run android build, setup [Android Studio](https://facebook.github.io/react-native/docs/android-setup.html)*

### Launch App

```shell
$ react-native run-android
```

- ENJOY! :smile:

## Author

* **Maria Fernanda Serna Arboleda** - *FullStack JavaScript Developer* - [Github](https://github.com/mafesernaarboleda)

See also the list of [contributors](https://github.com/mafesernaarboleda/react-native-chat-firebase/contributors) who participated in this project.

## License

This project is licensed under MIT - see the [LICENSE](LICENSE) file for details
