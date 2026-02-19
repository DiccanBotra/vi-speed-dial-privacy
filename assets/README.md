# Assets folder - Slike i ikonice

## 📁 Potrebni fajlovi

Expo zahteva sledeće fajlove za ikonice:

### 1. icon.png
- **Dimenzije**: 1024x1024 px
- **Format**: PNG
- **Svrha**: Glavna ikonica aplikacije
- **Dizajn**: Preporučujemo jednostavan dizajn sa velikim jarkim brojem ili telefonom

### 2. adaptive-icon.png (samo Android)
- **Dimenzije**: 1024x1024 px
- **Format**: PNG
- **Svrha**: Adaptivna ikonica za Android 8.0+
- **Dizajn**: Isti kao icon.png, ali glavni element mora biti u centralnoj bezbedonoj zoni

### 3. splash.png
- **Dimenzije**: 1242x2436 px (minimalno)
- **Format**: PNG
- **Svrha**: Splash screen koji se prikazuje pri pokretanju
- **Background boja**: #FFD700 (žuta - definisana u app.json)
- **Dizajn**: Može biti logo ili naziv aplikacije

### 4. favicon.png (za web verziju)
- **Dimenzije**: 48x48 px
- **Format**: PNG
- **Svrha**: Favicon za web verziju

## 🎨 Preporuke za dizajn

### Koncept ikonice
Ideje za dizajn:
1. **Broj + telefon**: Veliki broj sa slušalicom
2. **Boje**: 4 kvadrata u 4 boje (bela, crvena, zelena, plava)
3. **Dostupnost**: Simbol za pristupačnost + telefon
4. **Jednostavno**: Samo veliki žuti kvadrat sa brojem "4" ili "6"

### Boje
- **Primarna**: #FFD700 (Žuta - žuta traka)
- **Sekundarna**: #000000 (Crna - kontrast)
- **Akcenat**: Bilo koja od 6 boja iz aplikacije

### Stil
- **Jednostavan**: Lako prepoznatljiv na malom ekranu
- **Visok kontrast**: Za slabovide korisnike
- **Bez sitnih detalja**: Mora biti čitljiv i na 48x48px

## 🛠 Kako kreirati ikonice

### Opcija 1: Online alati (najlakše)
1. Otvorite **Canva** (canva.com)
2. Kreirajte novi dizajn 1024x1024px
3. Dodajte jarke boje i jednostavan dizajn
4. Eksportujte kao PNG

### Opcija 2: Adobe Illustrator / Photoshop
1. Kreirajte novi document 1024x1024px
2. Dizajnirajte ikonicu
3. Eksportujte u različitim dimenzijama

### Opcija 3: Figma (besplatno)
1. Otvorite Figma (figma.com)
2. Kreirajte frame 1024x1024px
3. Dizajnirajte
4. Eksportujte kao PNG

### Opcija 4: Generisanje placeholder-a
Za brzo testiranje, možete koristiti:
```bash
# Instalirajte ImageMagick
# Na macOS: brew install imagemagick
# Na Ubuntu: sudo apt-get install imagemagick

# Kreirajte jednostavnu žutu ikonicu sa tekstom
convert -size 1024x1024 xc:#FFD700 -pointsize 200 -fill black -gravity center -annotate +0+0 "SD" icon.png
```

## 📦 Trenutno stanje

Expo će raditi i bez ovih fajlova, ali će koristiti default plave ikonice. Za produkcijsku verziju, **obavezno** kreirajte custom ikonice.

## ✅ Checklist pre objave

- [ ] icon.png kreirana i dodata
- [ ] adaptive-icon.png kreirana i dodata (Android)
- [ ] splash.png kreirana i dodata
- [ ] favicon.png kreirana i dodata (za web)
- [ ] Sve ikonice testirane u Expo Go
- [ ] Ikonice prepoznatljive i jasne
- [ ] Visok kontrast za slabovide osobe

## 🎯 Primer jednostavnog dizajna

```
┌────────────────────┐
│                    │
│   #FFD700 boja     │
│                    │
│        [4]         │  ← Veliki broj
│       ☎           │  ← Simbol telefona
│                    │
│   Speed Dial       │  ← Naziv app
│                    │
└────────────────────┘
```

## 📞 Dodatni resursi

- **Expo Icon Guidelines**: https://docs.expo.dev/guides/app-icons/
- **Material Design Icons**: https://materialdesignicons.com/
- **Accessibility Icons**: https://www.flaticon.com/packs/accessibility-15

---

**Napomena**: Trenutno možete testirati aplikaciju i bez custom ikonica. Dodajte ih pre kreiranja produkcijske verzije.
