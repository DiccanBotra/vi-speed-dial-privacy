# Speed Dial za slabovide osobe

## 📱 O aplikaciji

Aplikacija namenjena slabovdim osobama sa jednostavnim interfejsom za brzo pozivanje. Koristi jarke boje i velike dugmiće za lakše korišćenje.

## ✨ Funkcionalnosti

- **4 ili 6 brzih brojeva** - Izbor pri prvom pokretanju
- **Jarke boje** - Bela, Crvena, Fluozelena, Plava, Narandžasta, Ljubičasta
- **2 kolone** - Dugmići raspoređeni u 2 kolone × 2-3 reda
- **Gornja žuta traka** - Za pristup podešavanjima (100px)
- **Izbor iz telefonskog imenika** - Jednostavno dodavanje postojećih kontakata
- **Ručni unos** - Mogućnost ručnog unosa imena i broja
- **Dodela boja** - Svaki kontakt dobija svoju jarku boju
- **Direktno pozivanje** - Klik na dugme odmah poziva broj

## 🚀 Instalacija i pokretanje

### Preduslov
```bash
# Instalirajte Node.js (v16 ili noviji)
# Instalirajte Expo CLI
npm install -g expo-cli
```

### Instalacija projekta
```bash
cd SlabovidiSpeedDial
npm install
```

### Pokretanje aplikacije

#### Testiranje na fizičkom telefonu (preporučeno)
1. Instalirajte **Expo Go** aplikaciju na telefonu:
   - Android: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Pokrenite aplikaciju:
```bash
npm start
```

3. Skenirajte QR kod:
   - **Android**: Koristite Expo Go aplikaciju
   - **iOS**: Koristite kameru telefona

#### Testiranje na emulatoru
```bash
# Android emulator
npm run android

# iOS simulator (samo na macOS)
npm run ios
```

## 📖 Kako koristiti

### Prvo pokretanje
1. Aplikacija će pitati da li želite **4 ili 6 brzih brojeva**
2. Izaberite željeni broj

### Dodavanje kontakata
1. **Dodirnite žutu traku** na vrhu ekrana
2. Za svaki kontakt možete:
   - **✎** - Ručno unesite ime i broj
   - **📱** - Izaberite iz telefonskog imenika
   - **🎨** - Promenite boju dugmeta

### Pozivanje
1. Jednostavno **dodirnite obojeni dugme** kontakta koga želite pozvati
2. Telefon će odmah pokrenuti poziv

### Resetovanje
1. Dodirnite žutu traku
2. Skrolujte dole i kliknite **"🔄 RESETUJ APLIKACIJU"**
3. Aplikacija će se vratiti na početno stanje

## 🎨 Dostupne boje

- **Bela** (#FFFFFF)
- **Crvena** (#FF0000)
- **Fluozelena** (#00FF00)
- **Plava** (#0000FF)
- **Narandžasta** (#FF6600)
- **Ljubičasta** (#9933FF)

## 🔒 Dozvole

Aplikacija zahteva sledeće dozvole:
- **Kontakti** - Za čitanje kontakata iz telefonskog imenika
- **Telefonski pozivi** - Za pokretanje poziva

## 📱 Kreiranje APK fajla (Android)

```bash
# Build za Android
eas build --platform android

# Ili klasičan Expo build
expo build:android
```

## 💡 Saveti

- **Za slabovide osobe**: Dugmići su veliki i jasno obojeni
- **Za pomoćnike**: Žuta traka omogućava brzo ažuriranje kontakata
- **Raspored**: 2 kolone omogućavaju lakše snalaženje
- **Kontrast**: Svaka boja ima odgovarajuću boju teksta za maksimalnu čitljivost

## 🛠 Tehnologije

- **React Native** - Framework za mobilne aplikacije
- **Expo** - Razvojno okruženje i alati
- **AsyncStorage** - Lokalno čuvanje podataka
- **Expo Contacts** - Pristup telefonskom imeniku
- **Expo Linking** - Pokretanje telefonskih poziva

## 📝 Struktura projekta

```
SlabovidiSpeedDial/
├── App.js              # Glavni fajl aplikacije
├── app.json            # Expo konfiguracija
├── package.json        # NPM zavisnosti
├── babel.config.js     # Babel konfiguracija
└── README.md           # Dokumentacija
```

## 🐛 Poznati problemi

- **iOS**: Kod pozivanja može se pojaviti dodatni dijalog za potvrdu
- **Android**: Potrebna je dozvola za pozive u podešavanjima telefona

## 📄 Licenca

MIT License - Slobodno za upotrebu i modifikaciju

## 👨‍💻 Razvoj

Razvijeno za pomoć slabovim osobama u lakšem korišćenju telefona.

---

**Napomena**: Testirajte aplikaciju pre davanja slabovdim osobama kako biste se uverili da sve funkcioniše kako treba.
