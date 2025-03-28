// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
return Math.abs(someValue - 42); 
}
function distanceFromHqInFeet(someValue) {
   const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264;
}
function distanceTravelledInFeet(start, destination) {
    const blocksTravelled=Math.abs(destination - start)
    return blocksTravelled * 264
}
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) {
        return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02; // 2 cents per foot over 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25; // Flat fare for distances between 2000 and 2500 feet
    } else {
        return 'cannot travel that far'; // No rides over 2500 feet
    }
    }
    