let restaurant = {
    name: "ASB",
    guestCap: 75,
    guestCount: 0,
    checkAvailable: function (partySize) {
        let seats = this.guestCap - this.guestCount
        return partySize <= seats
    },
    seatParty: function (partySize) {
        if (!this.checkAvailable(partySize)) {
            console.log("Not enough seats")
            return false
        }
        this.guestCount += partySize
        return true
    },
    removeParty: function (partySize) {
        if ((this.guestCount - partySize) < 0) {
            this.guestCount = 0
        }
        this.guestCount -= partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailable(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailable(4))
restaurant.seatParty(10)
console.log(restaurant)