export const app = require('express')

const passport = require('passport')

app.use(passport(("JWTStrategy"),{
    console.log("Passport middleware sucessfully configured.")
}))

app.use(passport(("JWTStrategy"),{
    console.log("Passport middleware sucessfully configured.")
}))

app.use(passport(("JWTStrategy"),{
    console.log("Passport middleware sucessfully configured.")
}))

app.listen(2000,()=> {
    console.log(`Server is running on PORT ${2000}`)
})
