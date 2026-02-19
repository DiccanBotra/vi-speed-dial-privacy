# ❓ Često postavljena pitanja (FAQ)

## 📱 Opšta pitanja

### Pitanje: Da li aplikacija radi offline?
**Odgovor**: Da! Aplikacija ne zahteva internet konekciju nakon instalacije. Svi kontakti se čuvaju lokalno na telefonu.

### Pitanje: Da li aplikacija skuplja podatke korisnika?
**Odgovor**: Ne. Aplikacija NE šalje nikakve podatke na servere. Svi kontakti ostaju samo na vašem telefonu.

### Pitanje: Koje verzije Androida/iOS-a su podržane?
**Odgovor**: 
- **Android**: 5.0 (Lollipop) i noviji
- **iOS**: 11.0 i noviji

### Pitanje: Koliko prostora zauzima aplikacija?
**Odgovor**: Oko 10-15 MB nakon instalacije.

### Pitanje: Da li aplikacija troši mnogo baterije?
**Odgovor**: Ne. Aplikacija je vrlo jednostavna i ne radi u pozadini, pa minimalno utiče na bateriju.

---

## 🎨 Pitanja o dizajnu i funkcionalnostima

### Pitanje: Zašto baš 4 ili 6 brojeva, a ne više?
**Odgovor**: Iz nekoliko razloga:
1. **Veličina dugmića** - Sa 4 ili 6 brojeva, svako dugme je dovoljno veliko da se lako dodirne
2. **Preopterećenje** - Previše opcija može zbuniti slabovide osobe
3. **Najčešće potrebe** - Većina ljudi ima 4-6 najvažnijih kontakata

### Pitanje: Mogu li dodati više od 6 brojeva?
**Odgovor**: Trenutno ne, ali možete resetovati aplikaciju i promeniti kontakte kada god želite. U budućim verzijama planiramo dodati "više strana" sa dodatnim kontaktima.

### Pitanje: Zašto je žuta traka baš 100px?
**Odgovor**: To je optimalna visina koja:
- Ne zauzima previše prostora
- Dovoljno je vidljiva da se lako dodirne
- Zadržava maksimalan prostor za glavne dugmiće

### Pitanje: Mogu li promeniti boje?
**Odgovor**: Trenutno su dostupne 6 predefinisanih boja odabranih zbog maksimalnog kontrasta i prepoznatljivosti za slabovide osobe. U budućim verzijama planiramo custom boje.

### Pitanje: Zašto aplikacija ne podržava horizontalnu orijentaciju?
**Odgovor**: Da bi slabovida osoba uvek držala telefon na isti način i lakše zapamtila pozicije kontakata (npr. "gore levo je sin").

---

## 🔧 Tehnička pitanja

### Pitanje: Kako da prebacim kontakte na novi telefon?
**Odgovor**: Trenutno:
1. Na novom telefonu instalirajte aplikaciju
2. Ručno podesite kontakte
U budućim verzijama planiramo QR kod za prenos.

### Pitanje: Šta ako izgubim podešavanja?
**Odgovor**: Ako deinstalirate aplikaciju, podešavanja će biti izgubljena. Saveti:
- Ne deinstalirajte aplikaciju
- Napravite listu kontakata na papiru kao backup
- Napravite screenshot podešavanja

### Pitanje: Mogu li koristiti aplikaciju na tabletu?
**Odgovor**: Da, ali tablet mora imati funkciju pozivanja (SIM karticu). Dugmići će biti još veći na tabletu što je odlično za slabovide osobe!

### Pitanje: Aplikacija ne može da pristupi kontaktima, šta da radim?
**Odgovor**: 
1. Idite u **Podešavanja telefona**
2. **Aplikacije** → **Speed Dial**
3. **Dozvole** → Uključite **Kontakte**

### Pitanje: Kako da kreiram APK fajl?
**Odgovor**: 
```bash
# Instalirajte EAS CLI
npm install -g eas-cli

# Kreirajte APK
eas build --platform android --profile preview
```

Ili klasičnim Expo buildom:
```bash
expo build:android
```

---

## 🎯 Pitanja o korišćenju

### Pitanje: Slabovida osoba slučajno otvori podešavanja, šta sada?
**Odgovor**: Nema problema! Samo ponovo dodirnite žutu traku sa tekstom "✕ ZATVORI PODEŠAVANJA" i vratićete se na glavni ekran.

### Pitanje: Osoba dodirne pogrešno dugme i pozove nekog greškom, šta da radim?
**Odgovor**: Jednostavno prekinite poziv. Možda je dobro vežbati sa osobom nekoliko puta pre nego što počne samostalno da koristi aplikaciju.

### Pitanje: Da li mogu testirati bez pozivanja?
**Odgovor**: Da! Upišite fiktivne brojeve (npr. 111-111-1111). Aplikacija će pokušati poziv, ali poziv neće proći jer broj nije ispravan - ali videćete da dugme radi.

### Pitanje: Kako naučiti slabovidu osobu da koristi aplikaciju?
**Odgovor**: 
1. **Dan 1**: Pokažite boje - "Ovo je crveno, to je tvoj sin"
2. **Dan 2**: Neka vežba pokazivanje - "Pokaži mi gde je sin"
3. **Dan 3**: Neka pozove dok vi gledate
4. **Dan 4+**: Samostalno korišćenje uz povremenu pomoć

---

## ⚠️ Rešavanje problema

### Pitanje: Aplikacija se crashuje kada pokušam poziv
**Odgovor**: Mogući uzroci:
1. **Telefon nema SIM karticu** - Proverite
2. **Nema dozvole za pozive** - Idite u Podešavanja → Aplikacije → Speed Dial → Dozvole
3. **Bug** - Kontaktirajte developera

### Pitanje: Ne mogu da instaliram aplikaciju
**Odgovor**: 
- **Android**: Omogućite instalaciju iz nepoznatih izvora
- **iOS**: Koristite TestFlight ili kompajlirajte preko Xcode

### Pitanje: Aplikacija ne čuva kontakte nakon restarta telefona
**Odgovor**: To je neuobičajeno. Mogući uzroci:
1. Telefon briše podatke aplikacija (ređava opcija u podešavanjima)
2. Bug - Kontaktirajte developera

### Pitanje: Boje nisu dovoljno jarke
**Odgovor**: 
1. Povećajte **Brightness** telefona na maksimum
2. Isključite **Auto brightness**
3. Ako koristite **Dark mode**, pokušajte Light mode

---

## 🚀 Napredna pitanja (za developere)

### Pitanje: Mogu li dodati više boja?
**Odgovor**: Da! U `App.js`, editujte `AVAILABLE_COLORS` array:
```javascript
const AVAILABLE_COLORS = [
  { name: 'Nova boja', value: '#HEX_KOD', textColor: '#FFFFFF' },
  // ... ostale boje
];
```

### Pitanje: Mogu li promeniti veličinu žute trake?
**Odgovor**: Da! U `App.js`, promenite konstantu:
```javascript
const topBarHeight = 100; // Promenite na željenu vrednost
```

### Pitanje: Mogu li dodati glasovnu potvrdu?
**Odgovor**: Da! Instalirajte `expo-speech`:
```bash
expo install expo-speech
```
Zatim dodajte u `makeCall` funkciju:
```javascript
import * as Speech from 'expo-speech';

Speech.speak(`Pozivam ${contact.name}`);
```

### Pitanje: Kako dodati vibraciju na dodir?
**Odgovor**: 
```javascript
import { Vibration } from 'react-native';

// U makeCall funkciji
Vibration.vibrate(100); // 100ms vibracija
```

### Pitanje: Mogu li koristiti drugu bazu podataka umesto AsyncStorage?
**Odgovor**: Da! Možete koristiti:
- **SQLite** - Za lokalni SQL
- **Realm** - Za objektnu bazu
- **Firebase** - Za cloud sync

### Pitanje: Kako dodati Analytics?
**Odgovor**: 
```bash
expo install expo-firebase-analytics
```
Ali pažnja - pazite na privatnost korisnika!

---

## 💡 Kreativne ideje (feature requests)

### Pitanje: Može li aplikacija da automatski pozove hitnu pomoć ako osoba padne?
**Odgovor**: Odlična ideja! Za to bi trebalo:
1. Accelerometer za detekciju pada
2. Timer (npr. 30 sekundi) pre poziva
3. Zvučna/vizuelna potvrda
Ovo može biti u budućoj verziji!

### Pitanje: Može li aplikacija slati SMS umesto poziva?
**Odgovor**: Da, to je moguće dodati! Koristite:
```javascript
import * as SMS from 'expo-sms';
```

### Pitanje: Može li aplikacija pokazivati vreme poslednjeg poziva?
**Odgovor**: Odlična ideja za statistiku! Može se implementirati čuvanjem timestamp-a pri svakom pozivu.

### Pitanje: Može li aplikacija imati "dečji režim" sa zaključavanjem?
**Odgovor**: Da, može se dodati PIN kod ili pattern lock za ulazak u podešavanja.

---

## 📞 Kontakt i podrška

### Pitanje: Gde mogu prijaviti bug?
**Odgovor**: 
1. GitHub Issues (ako je projekat na GitHubu)
2. Email developeru
3. U aplikaciji dodati opciju za feedback

### Pitanje: Mogu li doprineti projektu?
**Odgovor**: Apsolutno! Projekat je open source:
1. Fork projekat
2. Napravite izmene
3. Pošaljite Pull Request

### Pitanje: Kako mogu donirati za razvoj?
**Odgovor**: Kontaktirajte developera za detalje.

---

## 🎓 Edukativna pitanja

### Pitanje: Zašto je aplikacija besplatna?
**Odgovor**: Jer je namenjena pomoći slabovdim osobama. Pristupačnost tehnologije je ljudsko pravo, ne privilegija.

### Pitanje: Mogu li koristiti ovaj kod za drugu aplikaciju?
**Odgovor**: Da! Kod je open source pod MIT licencom. Možete ga koristiti za:
- Slične aplikacije za hendikepirane osobe
- Obrazovne svrhe
- Komercijalne projekte (uz pridržavanje licence)

### Pitanje: Kako mogu naučiti React Native?
**Odgovor**: 
1. Ovaj projekat je odličan start!
2. Čitajte kod i komentare
3. Eksperimentišite sa izmenu boja, veličina, teksta
4. Službena dokumentacija: https://reactnative.dev

---

**Ažurirano**: Februar 2026  
**Verzija FAQ**: 1.0  

_Nemate odgovor na svoje pitanje? Kontaktirajte nas!_
