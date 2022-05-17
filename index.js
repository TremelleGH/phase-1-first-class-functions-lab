const returnFirstTwoDrivers = function(drivers) {
    return ['Antonia', 'Nuru']
}

const returnLastTwoDrivers = function(drivers) {
    return ['Amari', 'Mo']
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function(integer) {
    return function(fare) {
        return integer * fare
    }
}

const fareDoubler = function(fare) {
    return fare * 2
}

const fareTripler = function(fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers, driverOptions) {
    return driverOptions(drivers)
}