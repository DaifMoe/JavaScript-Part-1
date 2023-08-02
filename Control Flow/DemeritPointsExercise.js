// Speed Limit = 70
// Every 5 km above speed limit 1 point
// Math.floor
// 12 points license is suspended
checkSpeed(50);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License Suspended");
  else console.log("Points", points);
}
