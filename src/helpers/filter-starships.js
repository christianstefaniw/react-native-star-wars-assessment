export default function filterStarships(ships) {
    console.log(ships)
    let cached = {};
    let uniqueShips = [];

    // O(N)
    for (let ship of ships) {
        if (ship.name in cached)
            continue;
        uniqueShips.push(ship);
        cached[ship.name] = true;
    }

    return uniqueShips;
}