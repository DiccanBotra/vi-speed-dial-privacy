#!/bin/bash

echo "🔧 Speed Dial - Quick Fix Script"
echo "================================="
echo ""

# Boje za output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Korak 1: Čišćenje cache-a...${NC}"
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock
npm cache clean --force
echo -e "${GREEN}✓ Cache očišćen${NC}"
echo ""

echo -e "${YELLOW}Korak 2: Kreiranje dummy ikonica...${NC}"
mkdir -p assets
cd assets

# Kreiraj prazne ikonice ako ne postoje
if [ ! -f "icon.png" ]; then
    # Pokušaj sa ImageMagick
    if command -v convert &> /dev/null; then
        convert -size 1024x1024 xc:#FFD700 -pointsize 200 -fill black -gravity center -annotate +0+0 "SD" icon.png
        convert -size 1024x1024 xc:#FFD700 -pointsize 200 -fill black -gravity center -annotate +0+0 "SD" adaptive-icon.png
        convert -size 1242x2436 xc:#FFD700 -pointsize 300 -fill black -gravity center -annotate +0+0 "Speed\nDial" splash.png
        convert -size 48x48 xc:#FFD700 favicon.png
        echo -e "${GREEN}✓ Ikonice kreirane sa ImageMagick${NC}"
    else
        # Ako nema ImageMagick, kreiraj prazne fajlove
        touch icon.png adaptive-icon.png splash.png favicon.png
        echo -e "${YELLOW}⚠ ImageMagick nije instaliran - kreirane prazne ikonice${NC}"
        echo -e "${YELLOW}  Aplikacija će raditi, ali sa default ikonicama${NC}"
    fi
else
    echo -e "${GREEN}✓ Ikonice već postoje${NC}"
fi

cd ..
echo ""

echo -e "${YELLOW}Korak 3: Instalacija zavisnosti...${NC}"
npm install
echo -e "${GREEN}✓ Zavisnosti instalirane${NC}"
echo ""

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✓ Sve je spremno!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${YELLOW}Sada pokrenite:${NC}"
echo -e "  ${GREEN}npm start${NC}"
echo ""
echo -e "${YELLOW}Ili sa čistim cache-om:${NC}"
echo -e "  ${GREEN}npx expo start --clear${NC}"
echo ""
echo -e "${YELLOW}Ako QR kod ne radi, probajte tunnel mode:${NC}"
echo -e "  ${GREEN}npx expo start --tunnel${NC}"
echo ""
