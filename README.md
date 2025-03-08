![image](https://github.com/user-attachments/assets/5f6acdc8-0ddf-4a83-af4a-41d034cbed2f)

## 1. Luas Persegi Panjang

Menghitung luas persegi panjang berdasarkan panjang dan lebarnya.
Fungsi: areaOfRectangle(length, width)

## Contoh Penggunaan
```javascript
function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(10, 5)); // Output: 15
```


## 2. Properti Lingkaran

Menghitung diameter, keliling, dan luas lingkaran berdasarkan jari-jarinya.

Fungsi: circleProperties(radius)

## Contoh Penggunaan
```javascript
function circleProperties(radius) {
  const diameter = 2 * radius;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * Math.pow(radius, 2);
  return {
    diameter,
    circumference: circumference.toFixed(4),
    area: area.toFixed(4),
  };
}
console.log(circleProperties(7)); // Output: { diameter: 14, circumference: '43.9823', area: '153.9380' }
```

## 3. Perhitungan Sudut Ketiga Segitiga

Menghitung sudut ketiga dari segitiga berdasarkan dua sudut lainnya.

Fungsi: thirdAngle(a, b)
## Contoh Penggunaan
```javascript

function thirdAngle(a, b) {
  return 180 - (a + b);
}
console.log(thirdAngle(50, 70)); // Output: 60
```

## 4. Perhitungan Selisih Tanggal

Menghitung jumlah hari antara dua tanggal yang diberikan.

Fungsi: dateDifference(date1, date2)
## Contoh Penggunaan
```javascript
function dateDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
console.log(dateDifference('2025-03-08', '2025-03-01')); // Output: 7
}
```

## 5. Inisial Nama dalam Huruf Kapital

Mengekstrak dan mengembalikan inisial dari nama yang diberikan dalam huruf kapital.

Fungsi: nameInitials(name)
## Contoh Penggunaan
```javascript
function nameInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
}
console.log(nameInitials('Rizal Baihaqi')); // Output: RB

