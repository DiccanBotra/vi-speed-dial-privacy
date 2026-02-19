# Speed Dial for Visually Impaired Persons

## 📱 About the App
An application designed for visually impaired persons with a simple interface for quick calling. Uses bright colors and large buttons for easier use.

## ✨ Features
- **4 or 6 speed dial slots** - Choose on first launch
- **Bright colors** - White, Red, Fluorescent Green, Blue, Orange, Purple
- **2 columns** - Buttons arranged in 2 columns × 2-3 rows
- **Top yellow bar** - For accessing settings (100px)
- **Phone book selection** - Easily add existing contacts
- **Manual entry** - Ability to manually enter name and number
- **Color assignment** - Each contact gets its own bright color
- **Direct calling** - Tap a button to immediately call the number

## 🚀 Installation and Setup

### Prerequisites
```bash
# Install Node.js (v16 or newer)
# Install Expo CLI
npm install -g expo-cli
```

### Project Installation
```bash
cd SlabovidiSpeedDial
npm install
```

### Running the App

#### Testing on a physical phone (recommended)
1. Install the **Expo Go** app on your phone:
   - Android: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Start the application:
```bash
npm start
```

3. Scan the QR code:
   - **Android**: Use the Expo Go app
   - **iOS**: Use your phone's camera

#### Testing on an emulator
```bash
# Android emulator
npm run android

# iOS simulator (macOS only)
npm run ios
```

## 📖 How to Use

### First Launch
1. The app will ask whether you want **4 or 6 speed dial slots**
2. Select your preferred number

### Adding Contacts
1. **Tap the yellow bar** at the top of the screen
2. For each contact you can:
   - **✎** - Manually enter name and number
   - **📱** - Select from the phone book
   - **🎨** - Change the button color

### Calling
1. Simply **tap the colored button** of the contact you want to call
2. The phone will immediately start the call

### Reset
1. Tap the yellow bar
2. Scroll down and click **"🔄 RESET APP"**
3. The app will return to its initial state

## 🎨 Available Colors

| Color | Hex |
|-------|-----|
| White | `#FFFFFF` |
| Red | `#FF0000` |
| Fluorescent Green | `#00FF00` |
| Blue | `#0000FF` |
| Orange | `#FF6600` |
| Purple | `#9933FF` |

## 🔒 Permissions

The application requires the following permissions:
- **Contacts** - For reading contacts from the phone book
- **Phone calls** - For initiating calls

## 📱 Creating an APK File (Android)

```bash
# Build for Android
eas build --platform android

# Or classic Expo build
expo build:android
```

## 💡 Tips

- **For visually impaired persons**: Buttons are large and clearly colored
- **For caregivers**: The yellow bar allows quick contact updates
- **Layout**: 2 columns make navigation easier
- **Contrast**: Each color has an appropriate text color for maximum readability

## 🛠 Technologies

| Technology | Purpose |
|------------|---------|
| [React Native](https://reactnative.dev/) | Mobile application framework |
| [Expo](https://expo.dev/) | Development environment and tools |
| [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) | Local data storage |
| [Expo Contacts](https://docs.expo.dev/versions/latest/sdk/contacts/) | Phone book access |
| [Expo Linking](https://docs.expo.dev/versions/latest/sdk/linking/) | Initiating phone calls |

## 📝 Project Structure

```
SlabovidiSpeedDial/
├── App.js              # Main application file
├── app.json            # Expo configuration
├── package.json        # NPM dependencies
├── babel.config.js     # Babel configuration
└── README.md           # Documentation
```

## 🐛 Known Issues

- **iOS**: An additional confirmation dialog may appear when calling
- **Android**: Call permission must be granted in phone settings

## 📄 License

This project is licensed under the [MIT License](LICENSE) - free to use and modify.

## 👨‍💻 Development

Developed to help visually impaired persons use their phone more easily.

---

> **Note:** Test the application before giving it to visually impaired persons to make sure everything works as intended.
