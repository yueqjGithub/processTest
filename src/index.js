import axios from "axios"

const _name = process.env.CUSTOM === 'YQJJJ1' ? 'YES' : 'NO'

console.log(process.env.CUSTOM)

const request = axios.create({
    baseURL: process.env.CUSTOM,
    timeout: 30000
})

request.get('/api')