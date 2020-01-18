function zeroFuel(distanceToPump, mpg, fuelLeft) {
  distanceToPump = Math.abs(distanceToPump);
  //mpg = fuelLeft * 25;

  if (mpg * fuelLeft >= distanceToPump) {
    console.log(true);
  } else console.log(false);
}
//zeroFuel(50, 25, 2);
zeroFuel(100, 50, 1);
