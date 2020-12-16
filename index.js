function findMatching(driverArr, name) {
   return driverArr.filter( n => {
        return n.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(driverArr, search) {
    return driverArr.filter( n =>{
        return n.toLowerCase().startsWith(search.toLowerCase());
    })
}

function matchName(driverArr, search) {
    return driverArr.filter( driver => {
        return driver.name.toLowerCase() === search.toLowerCase();
    })
}
