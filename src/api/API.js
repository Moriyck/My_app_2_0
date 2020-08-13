const USER = encodeURIComponent('superadmin')
const PASSWORD = encodeURIComponent('qwerty89092013849')
const DB_NAME = 'MyApp'
const DB_COLLECTION = 'users'
const DB_HOST = "cluster0.2ky45.mongodb.net"
const DB_PORT = 27015
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}`
debugger


export const baseUrlLocalCouchDb = `http://127.0.0.1:5984/`
export const baseUrlAtlasMongoDb = MONGO_URI
