export function FlyDistanceCalcul(lat1, lon1, lat2, lon2) {
    let R = 6371; // km
    let dLatRadian = toRad(lat2 - lat1);
    let dLonRadian = toRad(lon2 - lon1);
    let lat1Radian = toRad(lat1);
    let lat2Radian = toRad(lat2);

    let a = Math.sin(dLatRadian / 2) * Math.sin(dLatRadian / 2) +
        Math.sin(dLonRadian / 2) * Math.sin(dLonRadian / 2) * Math.cos(lat1Radian) * Math.cos(lat2Radian);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}