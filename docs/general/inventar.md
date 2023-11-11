---
title: Inventar
---
<script setup> 
    import KeyIcon from '../.vitepress/components/KeyIcon.vue'
</script>

<!-- https://imgur.com/a/SfMv60W link toate tastele-->
# <center>Informații despre inventar și interfața acestuia</center>

## Cum accesez inventarul ?

- Inventarul poate fi deschis sau închis apăsând tasta <KeyIcon keyType="i"/> , respectiv tot tasta <KeyIcon keyType="i"/> sau <KeyIcon keyType="esc"/> / <KeyIcon keyType="backspace"/>.
:::details Apasă pentru a vedea interfața inventarului
- Cam așa ar arăta interfața inventarului:
![pozaInventar](https://i.imgur.com/hN0et1X.png)
:::

## Ce sunt butoanele de la baza inventarului?

- Aceste butoane ne oferă posibilitatea de a:
:::details Vinde itemele altui jucător
![pozaInventarSell](https://i.imgur.com/nvEtkxC.png)
:::
:::details Oferi itemele altui jucător
![pozaInventarGive](https://i.imgur.com/uHwP2Bp.png)
:::
:::details Folosi itemele
![pozaInventarUse](https://i.imgur.com/dIecVtF.png)
:::
:::details Arunca itemele pe jos
![pozaInventarThrow](https://i.imgur.com/0MtIXmt.png)
:::


- Puteți selecta cantitatea de iteme oferite/aruncate completând câmpul "Amount".

![pozaInventarAmount](https://i.imgur.com/cxwUCAS.png)

- Puteți căuta un item după nume completând câmpul "Search".

![pozaInventarSearch](https://i.imgur.com/M3Sro2A.png)

- Itemele aruncate pe jos pot fi ridicate de orice player, iar dacă nu vor fi ridicate, după o perioadă vor dispărea.

![pozaInventarDrop](https://i.imgur.com/Xm3NEra.png)


## Pune/Scoate un obiect vestimentar

- Ne putem scoate/pune diferite obiecte vestimentare pe care le purtăm cu ajutorul butoanelor din dreapta caracterului.

![pozaInventarHaine](https://i.imgur.com/5xHwgHl.png)

## Forma fizică
- Forma fizică se împarte pe 7 levele și cu cât procentul de progress crește, aspectul fizic și mușchii caracterului se vor defini, dar și mai important, numărul de slot-uri și kg de iteme în urma purtării [genții](#utilizarea-gentilor-pentru-a-mari-numarul-de-slot-uri) va crește.

![pozaInventarForma](https://i.imgur.com/ZeqEQqA.png)
:::tip
- Progress bar-ul "Formă fizică" poate fi crescut mergând la [sala de forță](./sala) sau lucrând ca [miner](/jobs/miner).
:::

## Cum folosesc itemele din inventar?

- Utilizarea itemelor din inventar se folosesc făcând un drag and drop pe butonul de <span style="padding: 3px 7px; border-radius: 10px; background-color: #ff6f00;">Folosește</span> de la baza inventarului.

:::details Exemplu utilizare item
![gifInventarUse](https://i.imgur.com/dfjtIXh.gif)
:::

## Cum accesez cele 6 quick slot-uri?

- Pentru a accesa itemele poziționate pe unul din cele 6 quick slot-uri, trebuie pur și simplu să apăsați pe tastele <span style="padding: 3px 7px; border-radius: 10px; background-color: #ff6f00;">1 -> 6</span>, și ca să vedeți ce iteme aveți pe fiecare slot apăsați tasta <KeyIcon keyType="tab"/>.
:::details Exemplu utilizare quick slot
![gifInventarSlots](https://i.imgur.com/Tpb5fzy.gif)
:::

## Numărul de kg de iteme care pot fi cărate 

- Indiferent de forma fizică, numărul de kg de iteme care pot fi cărate fără a folosi o [geantă](#utilizarea-gentilor-pentru-a-mari-numarul-de-slot-uri) este de **10kg**.

![pozaInventarKg](https://i.imgur.com/FBTN8iR.png)

## Utilizarea genților pentru a mări numărul de slot-uri

- Gențile pot fi achiziționate de la orice [magazin](/proprietati/magazine) (în limita stocului disponibil) și ajută la creșterea numărului de slot-uri ale inventarului, dar și al numărului de kg de iteme care pot fi cărate. 

- De reținut este că numărul de sloturi și kg pe care o geantă le adaugă variază în funcție de forma [fizică](#forma-fizica).

Cu forma fizică *0%*, numărul de kg de iteme pe care le poți căra este de **20kg**, iar cu *100%* este de **80kg**.

:::details Extindere inventar FORMA FIZICĂ 0
![gifInventarGeanta0](https://i.imgur.com/wslJsgp.gif)
:::

:::details Extindere inventar FORMA FIZICĂ 100
![gifInventarGeanta100](https://i.imgur.com/Ry1xAWY.gif)
:::

- Pentru a scoate geanta, apăsați pe butonul cu logo de ghiozdan din dreapta jos.

![pozaInventarUneqGeanta](https://i.imgur.com/vGZ9Ont.png)

## Crafting

- De asemenea, puteți folosi butonul de lângă cel de dezechipare geantă pentru a crafta diferite obiecte cum ar fi bandaje, pentru a monta undițe cu diferite monturi, etc

![](https://i.imgur.com/Pn6EhWx.png)

:::details Exemplu de iteme care pot fi craftate/montate
![](https://i.imgur.com/i2OGjD2.png)
:::

## Folosirea shortcut-urilor

Există 2 shortcut-uri care pot fi folosite:

### Ctrl + Click
- Înlocuirea funcției de "Folosește" a itemelor din inventar.
:::details Folosirea shortcut-ului Ctrl + Click
![gifInventarCtrlClick](https://i.imgur.com/SdtR0Ft.gif)
:::

### Shift + Click
- Mută itemele din inventar în portbagaj/geantă/cufăr sau invers mai rapid.

## Accesarea portbagajului

- Accesarea portbagajului se face prin poziționarea caracterului în fața portbagajului și apăsarea tastei <KeyIcon keyType="i"/> pentru a-l putea utiliza.
- Este recomandată folosirea shortcut-ului [shift + click](#shift-click)
![gifPortbagaj](https://i.imgur.com/gjhDkxg.gif)