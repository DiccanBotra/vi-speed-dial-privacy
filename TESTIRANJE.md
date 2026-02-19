# 📋 Napomene za testiranje aplikacije

## ⚡ Najvažniji saveti

### 1. Prvo pokretanje
Kada prvi put pokrenete aplikaciju na telefonu, **dozvolite pristup kontaktima** kada sistem pita. Ovo je neophodno za funkciju "Izbor iz imenika".

### 2. Testiranje bez pozivanja
Ne morate pozivati prave brojeve! Možete uneti:
- **Testni brojevi**: 111-111-1111, 222-222-2222
- **Fiktivna imena**: Test 1, Test 2, itd.

### 3. Prilagođavanje za različite telefone
Aplikacija automatski prilagođava veličinu dugmića zavisno od:
- Veličine ekrana
- Broja kontakata (4 ili 6)

### 4. Gornja žuta traka
- **Dodir jednom**: Otvara podešavanja
- **Dodir ponovo**: Zatvara podešavanja
- **Ne može se sakriti**: To je namerno - uvek dostupna za ažuriranje

---

## 🧪 Test scenario

### Test 1: Onboarding
1. ✅ Otvori aplikaciju
2. ✅ Proveri da li se pojavljuje "Dobrodošli!"
3. ✅ Izaberi "4 broja"
4. ✅ Proveri da se pojavljuju 4 prazna dugmeta
5. ✅ Resetuj aplikaciju
6. ✅ Izaberi "6 brojeva"
7. ✅ Proveri da se pojavljuje 6 praznih dugmeta

### Test 2: Dodavanje kontakata (ručno)
1. ✅ Dodirni žutu traku
2. ✅ Kod prvog kontakta dodirni ✎ (olovka)
3. ✅ Unesi ime: "Marko"
4. ✅ Unesi broj: "0641234567"
5. ✅ Dodirni "Sačuvaj"
6. ✅ Zatvori podešavanja
7. ✅ Proveri da li se "Marko" prikazuje na prvom dugmetu

### Test 3: Dodavanje iz imenika
1. ✅ Dodirni žutu traku
2. ✅ Kod drugog kontakta dodirni 📱 (telefon)
3. ✅ Dozvoli pristup kontaktima ako sistem pita
4. ✅ Izaberi kontakt iz liste
5. ✅ Proveri da li se kontakt prikazuje

### Test 4: Promena boje
1. ✅ Dodirni žutu traku
2. ✅ Kod prvog kontakta dodirni 🎨 (paleta)
3. ✅ Izaberi boju (npr. Crvenu)
4. ✅ Zatvori podešavanja
5. ✅ Proveri da li je dugme crveno

### Test 5: Pozivanje (opcionalno)
1. ✅ Dodirni dugme sa pravim brojem
2. ✅ Proveri da li telefon pokreće poziv
3. ✅ Prekini poziv odmah

### Test 6: Persistencija podataka
1. ✅ Unesi sve kontakte
2. ✅ Zatvori aplikaciju kompletno
3. ✅ Otvori ponovo
4. ✅ Proveri da li su svi kontakti sačuvani

### Test 7: Resetovanje
1. ✅ Dodirni žutu traku
2. ✅ Skroluj do dna
3. ✅ Dodirni "RESETUJ APLIKACIJU"
4. ✅ Potvrdi
5. ✅ Proveri da li se vraća na onboarding ekran

---

## 🐛 Poznati problemi i workaround-i

### Problem: "Cannot read property 'number' of undefined"
**Uzrok**: Kontakt u imeniku nema broj telefona  
**Rešenje**: Izaberite drugi kontakt ili dodajte broj ručno

### Problem: Aplikacija ne poziva broj
**Uzrok**: Telefon nema dozvolu za pozive  
**Rešenje**: Podešavanja → Aplikacije → Speed Dial → Dozvole → Telefonski pozivi

### Problem: Dugmići su suviše mali
**Uzrok**: Previše kontakata ili mali ekran  
**Rešenje**: Koristite 4 kontakta umesto 6

### Problem: Boje nisu dovoljno jarke
**Uzrok**: Low brightness ili dark mode  
**Rešenje**: Povećajte brightness, isključite dark mode

---

## 📊 Test matrica

| Test | Android | iOS | Tablet | Prošao? |
|------|---------|-----|--------|---------|
| Onboarding | ⬜ | ⬜ | ⬜ | ⬜ |
| Ručni unos | ⬜ | ⬜ | ⬜ | ⬜ |
| Izbor iz imenika | ⬜ | ⬜ | ⬜ | ⬜ |
| Promena boje | ⬜ | ⬜ | ⬜ | ⬜ |
| Pozivanje | ⬜ | ⬜ | ⬜ | ⬜ |
| Persistencija | ⬜ | ⬜ | ⬜ | ⬜ |
| Resetovanje | ⬜ | ⬜ | ⬜ | ⬜ |

---

## 🎯 Checklist pre davanja slabovidoj osobi

- [ ] Aplikacija testirana sa svim funkcionalnostima
- [ ] Dodati svi pravi kontakti
- [ ] Boje odabrane tako da se jasno razlikuju
- [ ] Slabovida osoba obučena kako da koristi (najmanje 3 sesije)
- [ ] Brightness telefona stavljen na maximum
- [ ] Auto-lock (sleep) telefona postavljen na "Never" ili 10min
- [ ] Aplikacija dodata na Home screen kao prva ikonica
- [ ] Napisana lista kontakata na papiru kao backup
- [ ] Screenshot-ovana podešavanja

---

## 💡 Dodatne optimizacije (opcionalno)

### Za starije telefone
Ako telefon baguje ili je spor:
1. Zatvorite sve druge aplikacije
2. Restartujte telefon
3. Obavezno oslobodite najmanje 1GB prostora

### Za outdoor korišćenje
Ako će se koristiti napolju:
1. Stavite screen protector protiv odbljeska
2. Povećajte brightness na max
3. Eventualno aktivirajte "Outdoor mode" ako telefon ima

### Za noćno korišćenje
- Aplikacija ne podržava dark mode namerno (jarke boje)
- Umesto dark mode, koristite night light filter van aplikacije

---

## 📞 Feedback

Nakon testiranja, molimo dokumentujte:
1. **Šta radi odlično**
2. **Šta je konfuzno**
3. **Šta nedostaje**
4. **Bug-ovi**
5. **Feature requests**

Kontakt: [Vaš email ili GitHub]

---

**Test verzija**: 1.0  
**Datum**: Februar 2026  
**Tester**: __________________  
**Uređaj**: __________________  
**OS verzija**: ______________
