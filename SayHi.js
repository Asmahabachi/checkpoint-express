

const SayHi = (req, res, next) =>{
    console.log("Hello from the first middleware")
    next()
}
module.exports = SayHi