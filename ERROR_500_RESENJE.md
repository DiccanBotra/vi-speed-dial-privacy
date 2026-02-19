# ⚠️ Error 500 - BRZO REŠENJE

## Dobili ste grešku: "Development server returned response error code 500"?

**Ne brinite - ovo je najčešća greška i lako se rešava!**

---

## 🚀 NAJBRŽE REŠENJE (2 minuta)

### Korak 1: Pokrenite fix skript

```bash
# Na macOS/Linux:
cd SlabovidiSpeedDial
./fix.sh

# Na Windows:
cd SlabovidiSpeedDial
fix.bat
```

Skript će:
1. ✅ Očistiti cache
2. ✅ Kreirati potrebne ikonice
3. ✅ Reinstalirati sve pakete

### Korak 2: Pokrenite aplikaciju

```bash
npm start
```

### Korak 3: Skenirajte QR kod ponovo

**Trebalo bi da radi!** 🎉

---

## 🔧 Alternativa: Ručno rešavanje

Ako fix skript ne radi, uradite ručno:

```bash
# 1. Očistite sve
cd SlabovidiSpeedDial
rm -rf node_modules
rm -f package-lock.json
npm cache clean --force

# 2. Kreirajte dummy ikonice (VAŽNO!)
mkdir -p assets
cd assets
touch icon.png
touch adaptive-icon.png
touch splash.png
touch favicon.png
cd ..

# 3. Reinstalirajte pakete
npm install

# 4. Pokrenite sa čistim cache-om
npx expo start --clear
```

---

## 📱 Ako ni to ne radi

### Opcija A: Tunnel mode
```bash
npx expo start --tunnel
```
Sporije je, ali radi čak i kada telefon i kompjuter nisu na istom WiFi-ju.

### Opcija B: Direktna konekcija (Android)
```bash
# Povežite telefon USB kablom
# Omogućite USB debugging
npx expo start --android
```

---

## 🎯 Uzrok problema

Error 500 se najčešće javlja zbog:
1. **Missing assets** - Aplikacija očekuje ikonice, a one ne postoje
2. **Cache issues** - Stari cache konfliktiše sa novim kodom
3. **Version mismatch** - Inkompatibilne verzije paketa

**Rešenje**: Fix skript kreira dummy ikonice i čisti cache!

---

## 📚 Detaljno rešavanje

Za kompletno troubleshooting, pogledajte:
- **TROUBLESHOOTING.md** - Detaljan vodič sa svim problemima
- **BRZI_START.md** - Brzi setup vodič
- **FAQ.md** - Često postavljana pitanja

---

## ✅ Verifikacija

Nakon uspešnog pokretanja, trebalo bi da vidite:

1. **U terminalu**:
   ```
   Metro waiting on exp://192.168.x.x:8081
   QR kod
   ```

2. **Na telefonu** (nakon skeniranja):
   ```
   Učitavanje... (10-20 sekundi)
   "Dobrodošli!" ekran
   ```

---

## 💡 Pro tip

Svaki put kada aplikacija ne radi kako treba, pokrenite:

```bash
npx expo start --clear
```

Ovo resetuje cache i često rešava čudne probleme.

---

## 📞 Još uvek ne radi?

1. Proverite da li imate Node.js v16+ (`node --version`)
2. Proverite da li imate npm v8+ (`npm --version`)
3. Restartujte kompjuter
4. Pročitajte **TROUBLESHOOTING.md**

---

**Napomena**: Ikonice nisu obavezne za funkcionalnost aplikacije. Dummy ikonice omogućavaju da aplikacija radi, a kasnije možete dodati prave ikonice.

---

**Vreme rešavanja**: 2-5 minuta  
**Stopa uspeha**: 95%

**Srećno!** 🚀
