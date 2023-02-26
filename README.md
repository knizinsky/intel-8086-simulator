# Symulator procesora Intel 8086

Projekt został wykonany przy użyciu następujących technologii: JavaScript, HTML, CSS, SCSS.

## Opis symulatora

#### Symulator składa się z dwóch części: prawej i lewej. Po lewej stronie, widzimy pola rejestrów:

![image](https://user-images.githubusercontent.com/108873272/221413067-ed3dd770-b3c3-41c7-86bf-836e47f85bba.png)

• AX – Akumulator (Accumulator)\
• BX – Baza (Base)\
• CX – Licznik (Counter)\
• DX – Dane (Data)\
• SP – wskaźnik stosu (Stack Pointer)\
• BP – wskaźnik bazy (Base Pointer)\
• DI – rejestr indeksowy przeznaczenia (Destination Index)\
• SI – rejestr indeksowy źródła (Source Index)\
• OFFSET - określa położenie danego elementu w pamięci.\

#### W szarej ramce mamy dwa rzędy wyboru rejestrów oraz pod nimi znajdują się następujące przyciski:
- **RANDOM** – po jego wciśnięciu zostaną wygenerowane wartości w postaci kodu szesnastkowego do znajdujących się powyżej pól. Przykład: \

![image](https://user-images.githubusercontent.com/108873272/221413242-a9410af5-fd26-4ce0-8899-2a31e0b7b871.png)![image](https://user-images.githubusercontent.com/108873272/221413249-8ea14555-84c0-4215-8b78-f42b69bdd530.png)

- **MOV** – po wcześniejszym wybraniu wybranego rejestru (z pól wyboru tuż nad nim) zarówno z rzędu pierwszego jak i drugiego, gdy klikniemy na ten przycisk skutkiem będzie zamiana rejestru z drugiego wybranego rejestru na pierwszy. Przykład:

![image](https://user-images.githubusercontent.com/108873272/221413262-6a8b45e9-a031-446b-a4fa-980e827294a3.png)
![image](https://user-images.githubusercontent.com/108873272/221413266-26d8af8a-fa9f-40aa-81c1-4cb77a2e5443.png)\

- **XCHG** – działa podobnie do MOV, natomiast zamiast zastępować, zamienia obydwie wartości miejscami. Przykład:

![image](https://user-images.githubusercontent.com/108873272/221413273-c6e8c53f-2c91-49fd-9c0f-a36b80c653b0.png)
![image](https://user-images.githubusercontent.com/108873272/221413279-32396519-b3b0-4811-ae97-3bfaf4d13c2d.png)

- **RESET** – resetuje wartości pól rejestru do wartości 0000. Przykład:

![image](https://user-images.githubusercontent.com/108873272/221413291-c430c634-fcbb-4c35-bd9a-68c09ae9a5cd.png)
![image](https://user-images.githubusercontent.com/108873272/221413293-5d910ee3-80bd-4ff4-872b-c3de3f79d903.png)

- **PUSH** – służy do umieszczenia danych z rejestru na szczycie stosu. Przykład:

![image](https://user-images.githubusercontent.com/108873272/221413305-355a54bb-7955-4eb0-a464-12386c320dd2.png)
#### Po uprzednim wybraniu rejestru i kliknięciu przycisku PUSH, widzimy komunikat o tym, że nasz rejestr został wypchnięty na stos, oraz wartość pola SP została zmniejszona:
![image](https://user-images.githubusercontent.com/108873272/221413317-571335b7-c79b-499b-8b5c-8f41764a6de2.png)

- **POP** –  jest instrukcją usuwającą wartość ze szczytu stosu i przesuwającą wskaźnik stosu (stack pointer, SP) w górę. Przykład: 

![image](https://user-images.githubusercontent.com/108873272/221413330-dc0c0836-d3dd-4396-80b9-35989f4ee0f5.png)
![image](https://user-images.githubusercontent.com/108873272/221413335-dcc8aa8b-dc82-4665-a4a1-45f53bb6b2d3.png)

### Po prawej stronie natomiast widzimy obszar, który ma na celu wyliczać adres komórki pamięci do której przesyłane są zawartości rejestrów i na odwrót. 
Najpierw należy wybrać sposób zapisu.

![image](https://user-images.githubusercontent.com/108873272/221413360-e56d87ab-08ac-4cf4-9b81-b4e72ff95930.png) \

Mamy do wyboru: 
- Z rejestru do pamięci,
- Z pamięci do rejestru 

Następnie wybieramy tryb adresowania. 

![image](https://user-images.githubusercontent.com/108873272/221413373-0aa3ac0b-29aa-4235-94aa-32a9a9a0ad6b.png)

Dostępne są trzy tryby: 
- indeksowe
- bazowe
- indeksowo-bazowe 

Poniżej mamy do wyboru rejestry.

![image](https://user-images.githubusercontent.com/108873272/221413384-21f2ff07-2626-4e54-8e2b-b50fbaa41e54.png)

Jeżeli wcześniej wybraliśmy tryby bazowe, to możemy wybrać rejestr BX albo BP. Jeżeli Indeksowe to SI albo DI. Natomiast jeżeli indeksowo-bazowe, to SI+BX, SI+BP, DI+BX, DI+BP. 

Gdy dokonamy wyboru, trzeba wybrać jeden z trzech rejestrów: AX, BX, CX, DX.

![image](https://user-images.githubusercontent.com/108873272/221413406-befd3203-7931-4720-9638-414aa23a9687.png)

Jeżeli to zrobimy, to możemy wreszcie przejść do wyboru rozkazu: MOV albo XCHG.

![image](https://user-images.githubusercontent.com/108873272/221413424-243ab816-7332-46a9-8509-a4442f9c8bad.png)

Ich zasada działania jest podobna jak wcześniej, lecz tym razem mamy możliwość wyboru sposobu zapisu danych, a także trybów adresowania.
W prawym dolnym rogu interfejsu znajduje się kafelek do wyświetlania wyników rozkazów.

![image](https://user-images.githubusercontent.com/108873272/221413454-01b12b44-8cab-47df-bf4f-75ca23b349e9.png)

### Przykład 1:

![image](https://user-images.githubusercontent.com/108873272/221413467-2394ab07-829e-401b-8402-a823c134c3f9.png)

Obliczony został adres komórki pamięci do której została przeniesiona wartość rejestru AX. Jest to 7, gdyż 0005 + 0002 = 0007.

### Przykład 2:

Następnie możemy przykładowo przenieść wartość z pamięci do rejestru BX.

![image](https://user-images.githubusercontent.com/108873272/221413490-4d97d391-3225-4c16-b352-269d63ee4042.png)

