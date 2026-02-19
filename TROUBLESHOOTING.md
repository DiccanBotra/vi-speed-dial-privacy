# 🔧 Troubleshooting - Rešavanje Error 500

## ❌ Greška: "Development server returned response error code 500"

Ova greška se javlja kada Metro bundler ne može da kompajlira aplikaciju. Evo **step-by-step** rešenja:

---

## 🚀 Brzo rešenje (90% slučajeva)

### Korak 1: Kompletno čišćenje
```bash
cd SlabovidiSpeedDial

# Obrišite node_modules i lock fajlove
rm -rf node_modules
rm package-lock.json
rm yarn.lock

# Očistite npm cache
npm cache clean --force

# Očistite Expo cache
npx expo start -c
```

### Korak 2: Reinstalacija
```bash
# Instalirajte sve iznova
npm install

# Ili ako koristite yarn
yarn install
```

### Korak 3: Pokretanje sa čistim cache-om
```bash
# Pokrenite sa --clear opcijom
npx expo start --clear

# ILI
npm start -- --clear
```

### Korak 4: Skenirajte QR kod ponovo
Trebalo bi da radi! 🎉

---

## 🔍 Detaljno rešenje (ako brzo ne radi)

### Problem 1: Missing assets (ikonice)

**Simptom**: Greška kaže nešto o "assets" ili "icon.png"

**Rešenje**: Kreirajte dummy ikonice:

```bash
cd SlabovidiSpeedDial/assets

# Kreirajte jednostavne placeholder ikonice
# Na macOS/Linux sa ImageMagick:
convert -size 1024x1024 xc:#FFD700 -pointsize 200 -fill black -gravity center -annotate +0+0 "SD" icon.png
convert -size 1024x1024 xc:#FFD700 -pointsize 200 -fill black -gravity center -annotate +0+0 "SD" adaptive-icon.png
convert -size 1242x2436 xc:#FFD700 -pointsize 300 -fill black -gravity center -annotate +0+0 "Speed Dial" splash.png
convert -size 48x48 xc:#FFD700 favicon.png

# Ako nemate ImageMagick, samo kreirajte prazne fajlove:
touch icon.png adaptive-icon.png splash.png favicon.png
```

**ILI** preuzmite bilo koje PNG slike sa interneta i preimenujte ih.

---

### Problem 2: Expo verzija

**Simptom**: "SDK version mismatch" ili slične greške

**Rešenje**: Ažurirajte Expo SDK

```bash
# Proverite trenutnu verziju
npx expo --version

# Ako je starija od 50, ažurirajte:
npm install -g expo-cli@latest

# Ažurirajte projekat
cd SlabovidiSpeedDial
npx expo install --fix
```

---

### Problem 3: Metro bundler port zauzet

**Simptom**: "Port 8081 already in use"

**Rešenje**: 

```bash
# Na macOS/Linux:
lsof -ti:8081 | xargs kill -9

# Na Windows (PowerShell):
Get-Process -Id (Get-NetTCPConnection -LocalPort 8081).OwningProcess | Stop-Process

# Ili pokrenite na drugom portu:
npx expo start --port 8082
```

---

### Problem 4: Node verzija

**Simptom**: Čudne greške pri instalaciji

**Rešenje**: Proverite Node verziju

```bash
node --version
# Trebalo bi da je v16.x, v18.x, ili v20.x

# Ako nije, instalirajte noviju verziju
# Sa nvm (preporučeno):
nvm install 18
nvm use 18

# Ili preuzmite sa https://nodejs.org
```

---

### Problem 5: Watchman problemi (macOS/Linux)

**Simptom**: "Watchman crawl failed"

**Rešenje**:

```bash
# Instalirajte watchman
# macOS:
brew install watchman

# Linux:
# Preuzmite sa https://facebook.github.io/watchman/docs/install.html

# Resetujte watchman
watchman watch-del-all
```

---

## 🆘 Nuklearna opcija (kada ništa ne radi)

Ako apsolutno ništa ne radi, resetujte SVE:

```bash
# 1. Obrišite projekat
rm -rf SlabovidiSpeedDial

# 2. Otpakujte ZIP ponovo
unzip SlabovidiSpeedDial.zip

# 3. Uđite u folder
cd SlabovidiSpeedDial

# 4. Kreirajte dummy ikonice (obavezno!)
mkdir -p assets
cd assets

# VAŽNO: Kreirajte makar prazne fajlove
touch icon.png
touch adaptive-icon.png  
touch splash.png
touch favicon.png

# Vratite se u root
cd ..

# 5. Instalirajte čisto
npm install

# 6. Pokrenite sa čistim cache-om
npx expo start --clear --tunnel

# 7. Skenirajte QR kod
```

---

## 📱 Alternativa: Direktan build bez QR koda

Ako QR kod nikako ne radi, možete direktno povezati telefon:

### Za Android:
```bash
# 1. Povežite telefon USB kablom
# 2. Omogućite USB debugging na telefonu
# 3. Pokrenite:
npx expo start --android
```

### Za iOS:
```bash
# Samo na macOS sa Xcode-om:
npx expo start --ios
```

---

## 🌐 Tunnel mode (ako ste na različitim mrežama)

```bash
# Pokrenite sa tunnel opcijom:
npx expo start --tunnel

# Ovo koristi ngrok za pristup
# Sporije je, ali radi čak i kada telefon i kompjuter nisu na istom WiFi-ju
```

---

## 📋 Checklist pre pokretanja

Proverite da li imate:

- [ ] Node.js verziju 16+ (`node --version`)
- [ ] npm verziju 8+ (`npm --version`)
- [ ] Expo CLI (`npx expo --version`)
- [ ] Expo Go aplikaciju na telefonu
- [ ] Telefon i kompjuter na istom WiFi-ju (ili koristite --tunnel)
- [ ] Port 8081 slobodan
- [ ] Ikonice u assets folderu (makar prazne)

---

## 🐛 Logovanje grešaka

Ako i dalje ne radi, pošaljite ove informacije:

```bash
# Verzije:
node --version
npm --version
npx expo --version

# OS:
# Na macOS/Linux:
uname -a
# Na Windows:
systeminfo | findstr /B /C:"OS Name" /C:"OS Version"

# Greška u terminalu:
# Kopirajte CELU grešku koju vidite u terminalu

# Log iz Metro bundlera:
# Kopirajte sve što piše u terminalu nakon "npm start"
```

---

## ✅ Verification steps

Nakon što sve radi, verifikujte:

1. **Terminal**: Vidite "Metro waiting on exp://..."
2. **QR kod**: Prikazuje se u terminalu
3. **Telefon**: Expo Go otvara app i vidite "Dobrodošli!"
4. **Funkcionalnost**: Možete izabrati 4 ili 6 brojeva

---

## 💡 Pro tips

### Tip 1: Uvek koristite --clear prvi put
```bash
npx expo start --clear
```

### Tip 2: Ako QR ne radi, probajte tunnel
```bash
npx expo start --tunnel
```

### Tip 3: Ako telefon ne skenira QR, ukucajte URL ručno
U Expo Go, kliknite "Enter URL manually" i ukucajte URL koji vidite u terminalu.

### Tip 4: Restartujte sve kad se zapne
```bash
# Ctrl+C da zaustavite Metro
# Zatvorite Expo Go na telefonu
# Pokrenite ponovo: npx expo start --clear
```

---

## 🎯 Najčešće greške i rešenja

| Greška | Uzrok | Rešenje |
|--------|-------|---------|
| Error 500 | Metro bundler crash | `npx expo start --clear` |
| Port in use | 8081 zauzet | Ubiti proces ili `--port 8082` |
| Asset missing | Nema ikonica | Kreirati dummy ikonice |
| Cannot connect | Različiti WiFi | `--tunnel` mode |
| Module not found | Nedostaju paketi | `rm -rf node_modules && npm install` |
| SDK mismatch | Expo verzija | `npx expo install --fix` |

---

## 📞 Još uvek ne radi?

Ako ste probali SVE gore i dalje ne radi:

1. **GitHub Issues**: Prijavite problem sa detaljnim logom
2. **Expo Discord**: https://discord.gg/expo
3. **Stack Overflow**: Tag: react-native, expo

**VAŽNO**: Priložite:
- Verzije (node, npm, expo)
- OS (Windows/Mac/Linux)
- Kompletan error log iz terminala
- Screenshot greške

---

## 🎉 Success!

Kada sve proradi, videćete:
1. ✅ Metro bundler running
2. ✅ QR kod u terminalu
3. ✅ "Dobrodošli!" ekran na telefonu

**Srećno!** 🚀

---

**Ažurirano**: Februar 2026  
**Verzija**: 1.0
