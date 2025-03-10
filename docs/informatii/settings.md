---
title: Setări Grafică
---

# <span class="title-font"> <center> Ghid setări pentru grafică </center> </span>

## <span class="header-font">Cum poți obține mai mult FPS?</span>

### 🔧 1. Setează corect grafica din FiveM
:::info
Intră în Settings → Graphics și încearcă aceste setări:
- Texture Quality: Medium / High (dacă ai VRAM suficient)
- Shader Quality: Low
- Reflection Quality: Off
- MSAA: Off
- Anisotropic Filtering: x2 sau Off
- Shadow Quality: Very Low
- Grass Quality: Off
- Post FX: Low
Acestea reduc consumul de resurse și îți oferă FPS mai bun.
:::

### 💻 2. Folosește comenzi utile în FiveM
:::info
Dacă deschizi consola cu F8, poți introduce aceste comenzi:

- profile_purge → Curăță memoria și poate îmbunătăți FPS-ul.
- r_disableRendering 1 → Dezactivează randarea (doar pentru test FPS).
:::

### 🚀 3. Optimizează Windows și driverele
:::info
- Setează Windows pe "High Performance Mode"
- Actualizează driverele pentru placa video (NVIDIA/AMD)
- Închide aplicațiile inutile care rulează în fundal
:::

## <span class="header-font">Ce înseamnă fiecare setare în parte? </span>

### Ignore Suggested Limits -> <span style="color:yellow">Irelevant</span>
- Această setare vă lasă să urcați graficile mai mult decât memoria plăcii video poate suporta.

### DirectX Version -> <span style="color:green">DirectX 11</span>
- Orice valoare sub DirectX 11 va face jocul să aibă grafici foarte slabe.
:::tip Recomandare!
- Pentru PC urile foarte slabe puteți pune și valori mai mici pentru a avea performanțe mai bune.
:::

### Render Resolution -> <span style="color:yellow">La alegere</span>
- Este recomandat să puneți rezoluția nativă a monitorului dvs.

### Output monitor -> <span style="color:yellow">La alegere</span>
- Această setare vă oferă posibilitatea de a alege monitorul pe care să fie redat jocul (dacă aveți mai multe).

### FXAA -> <span style="color:green">On (pe off jocul va fi mai pixelat)</span>
- FXAA este un filtru post-procesare care netezește marginile obiectelor/caracterelor după ce imaginea a fost randată. Oferă o imagine mai fluidă, dar poate face ca anumite detalii fine să pară puțin neclare.

### MSAA -> <span style="color:green">Off</span>
- MSAA este un filtru post procesare la fel ca și FXAA dar care afectează mult mai mult performanța. 
- Spre deosebire de FXAA, MSAA acționează direct în procesul de randare, înainte ca imaginea să fie finalizată.
- Puteți să îl folosiți dacă aveți un PC foarte puternic.

### VSync -> <span style="color:green">Off</span>
- Această setare limitează FPS-urile la refresh rate-ul nativ al monitorului. 
- De exemplu, dacă aveți un monitor cu 60hz, veți avea maxim 60fps în joc.
- De preferat să fie dezactivat pentru a avea cât mai multe FPS-uri, dar nu este obligatoriu. Jocul tinde să meargă puțin mai bune cu această setare pe <span style="color:red">OFF</span>.

### Pause Game On Focus Loss -> <span style="color:yellow">Irelevant; doar pentru singleplayer</span>

### Population Density/Variety -> <span style="color:yellow">Minim; doar pentru singleplayer</span>

### Distance Scaling -> <span style="color:yellow">La alegere </span>
- Această setare face ca obiectele să se randeze pe o rază mai mică/mare față de poziția dvs. pe hartă.
- Cu cât este mai mare setarea, cu atât FPS-urile vor fi afectate mai mult.

### Extended Texture Budget -> <span style="color:yellow">La alegere</span>
- Dacă aveți probleme cu texturile, măriți această setare.
- Această setare consumă VRAM din placa video.

### Texture Quality -> <span style="color:yellow">La alegere</span>
- Această setare modifică calitatea texturilor din joc.
- Cu cât măriți această setare, cu atât performața va scădea, dar grafica va fi una mai bună.

### Shader Quality -> <span style="color:yellow">La alegere</span>
- Această setare modifică calitatea luminilor, și nu numai, din joc.
- Cu cât măriți această setare, cu atât performața va scădea, dar grafica va fi una mai bună.
:::tip Recomandare!
- Este de preferat dacă aveți instalat un mod de grafică această opțiune să fie cât mai mare pentru a pune în valoare modul.
:::

### Shadow Quality -> <span style="color:yellow">La alegere</span>
- Această setare modifică calitatea umbrelor din joc.
- Cu cât măriți această setare, cu atât performața va scădea, dar grafica va fi una mai bună.

### Reflection Quality -> <span style="color:yellow">La alegere</span>
- Această setare modifică calitatea reflexiilor din joc.
- Cu cât măriți această setare, cu atât performața va scădea, dar grafica va fi una mai bună.

### Reflection MSAA -> <span style="color:yellow">La alegere</span>
- MSAA este un filtru post procesare, iar la această setare va afecta doar calitatea umbrelor.
- Cu cât măriți această setare, cu atât performața va scădea, dar grafica va fi una mai bună.

### Water Quality -> <span style="color:yellow">La alegere</span>
- Această setare modifică calitatea apei din joc.
- Cu cât măriți această setare, cu atât performața va scădea, dar grafica va fi una mai bună.

### Particles Quality -> <span style="color:yellow">La alegere</span>
- Această setare modifică calitatea particulelor din joc.
- Cu cât măriți această setare, cu atât performața va scădea, dar grafica va fi una mai bună.

### Grass Quality -> <span style="color:yellow">La alegere</span>
- Această setare modifică calitatea vegetației din joc.
- Cu cât măriți această setare, cu atât performața va scădea, dar grafica va fi una mai bună.

### Soft Shadows -> <span style="color:yellow">La alegere</span>
- Această setare modifică marginile umbrelor din joc.
- Nu este o diferență mare între opțiuni și nu afectează semnificativ FPS-urile.

### Post FX -> <span style="color:yellow">La alegere</span>
- Această setare modifică calitatea diferitelor efecte din joc.
- Cu cât măriți această setare, cu atât performața va scădea, dar grafica și efectele vor fi mai bune.
:::tip Recomandare!
- Este de preferat dacă aveți instalat un mod de grafică această opțiune să fie cât mai mare pentru a pune în valoare modul.
:::

### Motion Blur Strength -> <span style="color:yellow">La alegere</span>

### In-Game Depth of Field Effects -> <span style="color:yellow">La alegere</span>
- Această setare va blura fundalul unui obiect pe care sunteți focusat. Oferă un efect mai cinematic și interesant al jocului, precum ați încerca să faceți o poză cu telefonul cu modul "Portret".

### Anisotropic Filtering -> <span style="color:green">X16</span>
- Este o tehnică de îmbunătățire a calității texturilor afișate la unghiuri oblice (ex. drumuri, trotuare, pereți priviți din lateral).
- Fără AF, texturile devin neclare și estompate la distanță sau când sunt privite dintr-un unghi mic.
:::tip Recomandare!
- Dacă folosiți setarea de Texture Quality pe Normal (minim), vă recomadăm ca această setare să o aveți pe X16 deoarece nu va deteriora așa mult texturile la un cost mic de FPS-uri.
:::

### Ambient Occlusion -> <span style="color:yellow">La alegere</span>
- Este o tehnică grafică folosită pentru a îmbunătăți umbrele și iluminarea ambientală în scenele din joc. 
- Ajută la crearea unui efect mai realist al umbrelor în colțuri, sub obiecte și în zone unde lumina pătrunde mai greu.

### Tesselation -> <span style="color:yellow">La alegere</span>
- Este o tehnologie grafică care îmbunătățește detaliile 3D ale obiectelor din joc, adăugând mai multă geometrie la suprafețele acestora.
- Adaugă mai multe poligoane la modelele 3D, făcându-le mai detaliate și mai realiste.