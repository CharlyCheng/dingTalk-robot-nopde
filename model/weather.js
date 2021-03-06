const config = require("../config/env.config.js")
const http = require("../service/http.service.js")
const lib = require("../libs/lib.js")

let WeatherSend = async () => { 
    let res = await  http.get(config.WeatherApi)
    lib.handleMessage(res, "weatherType")
}

let WeekBookSend = async () => { 
    let res = {
        
    }
    lib.handleMessage(res, "weekType")
}

module.exports = {
    WeatherSend,
    WeekBookSend
}