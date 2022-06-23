// Callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === "number") {
            callback(undefined, num * 2)
        } else {
            callback("Must provide a number")
        }
    }, 2000)
}

getDataCallback(2, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
    }
})

//Promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === "number" ? resolve(num * 2) : reject("Must provide a number")
    }, 2000)
})

getDataPromise(3).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(data)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

getDataPromise(4).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return "getDataPromise(data)"
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})