# 🚀 Brzi Start - 5 minuta do testiranja

## Šta vam treba?
- ✅ Kompjuter sa Node.js (v16+)
- ✅ Android ili iOS telefon
- ✅ Internet konekcija
- ✅ 5 minuta vremena

## Korak 1: Instalirajte Expo CLI (jednom)
```bash
npm install -g expo-cli
```

## Korak 2: Preuzmite projekat
Ako dobijate projekat kao ZIP:
```bash
cd SlabovidiSpeedDial
```

Ako je na GitHubu:
```bash
git clone [URL_PROJEKTA]
cd SlabovidiSpeedDial
```

## Korak 3: Instalirajte zavisnosti
```bash
npm install
```

Ovo može trajati 2-3 minuta...

## Korak 4: Instalirajte Expo Go na telefonu

### Android
- Otvorite Google Play Store
- Tražite "Expo Go"
- Instalirajte

### iOS (iPhone)
- Otvorite App Store
- Tražite "Expo Go"
- Instalirajte

## Korak 5: Pokrenite aplikaciju
```bash
npm start
```

Pojaviće se QR kod u terminalu.

## Korak 6: Skenirajte QR kod

### Android
1. Otvorite **Expo Go** aplikaciju
2. Kliknite **Scan QR Code**
3. Skenirajte kod sa ekrana kompjutera

### iOS (iPhone)
1. Otvorite **Camera** aplikaciju (običnu kameru)
2. Uperite u QR kod
3. Kliknite na notifikaciju koja se pojavi
4. Otвориће se Expo Go sa aplikacijom

## 🎉 Gotovo!

Aplikacija se sada učitava na vašem telefonu. Prvo pokretanje može trajati 10-20 sekundi.

## Šta dalje?

1. **Testirajte funkcionalnosti**:
   - Izaberite 4 ili 6 brojeva
   - Dodajte kontakte
   - Promenite boje
   - Testirajte pozivanje (može biti fiktivni broj za test)

2. **Prilagodite**:
   - Editujte `App.js` za izmene
   - Sačuvajte fajl i aplikacija će se automatski osvežiti na telefonu

3. **Kreirajte APK** (za Android):
   ```bash
   expo build:android
   ```

## 🐛 Problemi?

### ⚠️ Error 500 (Development server error)

**Ovo je najčešći problem!** Brzo rešenje:

```bash
# Pokrenite fix skript:
# Na macOS/Linux:
./fix.sh

# Na Windows:
fix.bat
```

**Šta skript radi**:
1. Briše node_modules i cache
2. Kreira dummy ikonice (VAŽNO!)
3. Reinstalira sve pakete

**ILI ručno**:
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
mkdir -p assets && cd assets
touch icon.png adaptive-icon.png splash.png favicon.png
cd ..
npm install
npx expo start --clear
```

**Za detaljno rešavanje**, pogledajte **TROUBLESHOOTING.md**

---

### QR kod ne radi
- Proverite da li su telefon i kompjuter na istom WiFi-ju
- Pokušajte sa `expo start --tunnel`

### Aplikacija se ne učitava
- Sačekajte 30 sekundi
- Restartujte Expo Go aplikaciju
- Ponovo pokrenite `npm start`

### Metro bundler greška
```bash
# Resetujte cache
expo start -c
```

## 💡 Saveti za razvoj

### Automatsko osvežavanje
Kada editujete kod, aplikacija se automatski osvežava na telefonu. Nema potrebe da restartujete!

### Shake za dev menu
Protresite telefon da otvorite developer menu sa opcijama.

### Live reload
Omogućeno po defaultu - svaka izmena koda se odmah vidi.

## 📱 Testiranje specifičnih funkcija

### Test kontakti (bez pravog pozivanja)
Upišite fiktivne brojeve kao:
- 111-111-1111
- 222-222-2222

### Test boja
Probajte sve kombinacije boja da vidite kontrast.

### Test na raznim veličinama ekrana
Testirajte na manjim i većim telefonima.

## 🎯 Sledeći koraci

1. **Testiranje sa pravom slabovdom osobom**
   - Proverite da li su dugmići dovoljno veliki
   - Da li su boje dovoljno jarke
   - Da li je intuitivno

2. **Prikupljanje feedbacka**
   - Koje funkcije nedostaju?
   - Šta je konfuzno?
   - Šta radi odlično?

3. **Kreiranje produkcijskog APK-a**
   ```bash
   expo build:android --release-channel production
   ```

## 📞 Podrška

Ako imate problema:
1. Proverite README.md
2. Proverite KORISNICKO_UPUTSTVO.md
3. Kontaktirajte developera

---

**Vreme čitanja**: 2 minuta  
**Vreme implementacije**: 5 minuta  
**难度**: Početnik

Srećno testiranje! 🎉
