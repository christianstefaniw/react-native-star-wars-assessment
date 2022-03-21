export default function filterStarships(ships) {
    let shipsWithPilots = [];

    for (let ship of ships) {
        if (ship.pilots.length > 0)
            shipsWithPilots.push(ship);
    }

    return shipsWithPilots;
}