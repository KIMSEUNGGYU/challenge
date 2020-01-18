function gcd(a, b) {
  while (b > 0) {
    [a, b] = [b, a % b];
  }
  console.log(a);
}

gcd(18, 45);
gcd(2, 4);
gcd(96, 33);
gcd(60, 48);
gcd(1071, 1029);
