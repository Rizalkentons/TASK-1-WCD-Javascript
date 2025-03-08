// 1. Area of Rectangle
function areaOfRectangle(length, width) {
  return length * width;
}

// 2. Circle Calculations
function circleProperties(radius) {
  const diameter = 2 * radius;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * Math.pow(radius, 2);
  return {
    diameter,
    circumference: circumference.toFixed(3),
    area: area.toFixed(3),
  };
}

// 3. Triangle Third Angle Calculation
function thirdAngle(a, b) {
  return 180 - (a + b);
}

// 4. Date Difference Calculation
function dateDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
}

// 5. Name Initials in Uppercase
function nameInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
}

// Example Outputs
console.log(areaOfRectangle(5, 3)); // Output: 15
console.log(circleProperties(5)); // Output: {diameter: 10, circumference: '31.416', area: '78.540'}
console.log(thirdAngle(80, 65)); // Output: 35
console.log(dateDifference('2024-03-19', '2024-03-21')); // Output: 2
console.log(nameInitials('Rizal Baihaqi')); // Output: RB
