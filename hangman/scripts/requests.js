const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error("Unable to fetch puzzle")
    }
}

// const getPuzzlePromise = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error("Something went wrong")
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

// const getIpDataPromise = () => {
//     return fetch("http://ipinfo.io/json?token=1888030a275470").then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error("Couldn't fetch IP data")
//         }
//     }).then((data) => {
//         return `You are in ${data.city}, ${data.region}, ${data.country}`
//     })
// }

// const getIpDataAsyncAwait = async() => {
//     const response = await fetch("http://ipinfo.io/json?token=1888030a275470")

//     if (response.status === 200) {
//         const data = await response.json()
//         return `You are in ${data.city}, ${data.region}, ${data.country}`
//     } else {
//         throw new Error("Couldn't fetch your IP data")
//     } 
// }