# Korisničko uputstvo - Detaljno

## 🎯 Svrha aplikacije

Aplikacija je dizajnirana tako da slabovida osoba **prepoznaje kontakt po boji** dugmeta, a ne po čitanju teksta. Veliki obojeni dugmići omogućavaju lako pozivanje bez potrebe za detaljnim gledanjem ekrana.

## 👥 Uloge

### Za slabovidu osobu (korisnik)
- **Jednostavno korišćenje**: Samo dodirnite boju osobe koju želite da pozovete
- **Bez čitanja**: Nema potrebe za čitanjem teksta
- **Velike mete**: Teško je promašiti dugme

### Za pomoćnika (administrator)
- **Podešavanje**: Dodirnite žutu traku na vrhu
- **Održavanje**: Lako ažurirajte kontakte i boje

## 📐 Dizajn ekrana

```
┌─────────────────────────────────┐
│   ŽUTA TRAKA (100px)            │ ← Dodir za podešavanja
│   ⚙ PODEŠAVANJA                 │
├─────────────────┬───────────────┤
│                 │               │
│   BOJA 1        │   BOJA 2      │
│   Ime           │   Ime         │
│   Broj          │   Broj        │
│                 │               │
├─────────────────┼───────────────┤
│                 │               │
│   BOJA 3        │   BOJA 4      │
│   Ime           │   Ime         │
│   Broj          │   Broj        │
│                 │               │
└─────────────────┴───────────────┘

(Za 6 kontakata dodaje se još jedan red)
```

## 🎨 Strategija boja

### Za 4 kontakta (preporučeno za početnike)
1. **Bela** - Najčešće korišćen kontakt (npr. dete)
2. **Crvena** - Hitna pomoć ili doktor
3. **Fluozelena** - Član porodice
4. **Plava** - Prijatelj ili komšija

### Za 6 kontakata (za iskusnije korisnike)
1. **Bela** - Dete 1
2. **Crvena** - Hitna pomoć
3. **Fluozelena** - Dete 2
4. **Plava** - Komšija
5. **Narandžasta** - Doktor
6. **Ljubičasta** - Prijatelj

## 📱 Proces podešavanja - korak po korak

### Prvi put (onboarding)
1. Otvorite aplikaciju
2. Pojaviće se poruka "Dobrodošli!"
3. Izaberite "4 broja" ili "6 brojeva"
4. Aplikacija automatski kreira prazne kontakte sa default bojama

### Dodavanje prvog kontakta
1. **Dodirnite žutu traku** na vrhu
2. Pojaviće se lista kontakata
3. Kod prvog kontakta:
   - Dodirnite **📱 ikonu** za izbor iz imenika
   - ILI dodirnite **✎ ikonu** za ručni unos

#### Izbor iz imenika
1. Pojaviće se lista svih kontakata iz telefona
2. Skrolujte i pronađite željenu osobu
3. Dodirnite ime osobe
4. Kontakt će biti automatski dodat

#### Ručni unos
1. Upišite ime (npr. "Marija")
2. Upišite broj (npr. "0641234567")
3. Dodirnite "Sačuvaj"

### Promena boje kontakta
1. U listi kontakata, dodirnite **🎨 ikonu**
2. Pojaviće se 6 boja
3. Dodirnite željenu boju
4. Boja se automatski čuva

### Završetak podešavanja
1. Dodirnite žutu traku ponovo (ili "✕ ZATVORI PODEŠAVANJA")
2. Pojaviće se glavni ekran sa velikim obojenim dugmićima

## 💡 Saveti za najbolje iskustvo

### Izbor boja
- **Kontrast je ključan**: Koristite boje koje se maksimalno razlikuju
- **Pozicija + boja**: Naučite slabovidu osobu da zapamti "gore levo je bela (sin)"
- **Logički izbor**: Crvena za hitne slučajeve, bela za najvažniju osobu

### Pozicioniranje telefona
- **Fiksirana orijentacija**: Aplikacija je uvek u portrait modu
- **Ista pozicija**: Držite telefon uvek na istom mestu
- **Lakša navigacija**: "Gore levo", "dole desno" postaju intuitivni

### Trening slabovide osobe
1. **Pokaži boje**: Neka osoba dodirne svaku boju i vidi ko se zove
2. **Vežbaj bez pozivanja**: Neka pokazuje "gde je sin", "gde je doktor"
3. **Prvi pravi poziv**: Asistujte kod prvog poziva
4. **Samostalnost**: Postepeno smanjujte pomoć

## 🔧 Održavanje

### Ažuriranje broja
1. Dodirnite žutu traku
2. Kod željenog kontakta dodirnite **✎**
3. Promenite broj
4. Dodirnite "Sačuvaj"

### Promena kontakta (npr. novi telefon osobe)
1. Dodirnite žutu traku
2. Dodirnite **✎** ili **📱**
3. Unesite nove podatke

### Kompletna reorganizacija
Ako želite da počnete ispočetka:
1. Dodirnite žutu traku
2. Skrolujte do dna
3. Dodirnite "🔄 RESETUJ APLIKACIJU"
4. Potvrdite
5. Aplikacija se vraća na početni ekran

## ⚠️ Česte greške i rešenja

### Problem: "Broj telefona nije unet"
- **Uzrok**: Kontakt nema sačuvan broj
- **Rešenje**: Uredite kontakt i dodajte broj

### Problem: "Ne može se pozivati sa ovog uređaja"
- **Uzrok**: Emulator ili tablet bez SIM kartice
- **Rešenje**: Koristite pravi telefon sa SIM karticom

### Problem: "Aplikacija nema dozvolu za pristup kontaktima"
- **Uzrok**: Niste dali dozvolu aplikaciji
- **Rešenje**: 
  1. Idite u Podešavanja telefona
  2. Aplikacije → Speed Dial
  3. Dozvole → Uključite Kontakte

### Problem: Boje nisu dovoljno jarke
- **Uzrok**: Brightness telefona je nizak
- **Rešenje**: Povećajte brightness na maksimum

## 🎓 Napredne opcije

### Eksportovanje podešavanja
Trenutno aplikacija čuva podatke lokalno. Za budućnost planiramo:
- Cloud backup
- QR kod za brzi prenos na novi telefon
- Glasovne komande

### Prilagođavanje veličine teksta
Veličina teksta se automatski prilagođava:
- **4 kontakta**: Veći tekst (32px)
- **6 kontakata**: Srednji tekst (24px)

## 📞 Primer scenarija korišćenja

### Jutarnji poziv sinu
1. **Slabovida osoba** uzme telefon
2. Otvori aplikaciju (ikona na početnom ekranu)
3. Vidi **4 velika obojenog dugmeta**
4. Seti se: "Sin je gore levo, **bela boja**"
5. Dodirne belo dugme
6. Telefon automatski poziva sina
7. Razgovor

### Hitna situacija
1. Potreban je doktor
2. Seti se: "Doktor je **crveno dugme**"
3. Brzo pronađe crveno
4. Dodirne
5. Poziv doktoru

## 🌟 Prednosti ove aplikacije

### Za slabovide osobe
- ✅ Nema čitanja sitnog teksta
- ✅ Jasne vizuelne oznake (boje)
- ✅ Veliki dugmići (teško je promašiti)
- ✅ Jednostavno korišćenje

### Za pomoćnike
- ✅ Brzo podešavanje
- ✅ Lako održavanje
- ✅ Sigurno (ne može se slučajno resetovati)
- ✅ Kompletna kontrola

### Tehnički
- ✅ Radi offline
- ✅ Brzo pokretanje
- ✅ Niska potrošnja baterije
- ✅ Funkcioniše na starijim telefonima

## 🔮 Buduća poboljšanja

Planirane funkcionalnosti:
- [ ] Glasovna potvrda nakon dodira ("Pozivate Mariju")
- [ ] Vibracija kada se dodirne dugme
- [ ] Notifikacija članovima porodice kada je poziv obavljen
- [ ] Jednostavniji režim sa samo 2 kontakta
- [ ] SOS dugme (automatski poziva više brojeva)
- [ ] Statistika poziva
- [ ] Podsećanje za pozive ("Svaki dan u 10h pozovi sina")

---

**Pitanja ili problemi?**
Kontaktirajte developera ili pogledajte README.md fajl za tehničke detalje.
