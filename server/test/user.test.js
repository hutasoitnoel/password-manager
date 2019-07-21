const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('../app')
const clearUser = require('../helpers/clearUser')

chai.use(chaiHttp)

describe('User tests', function () {
    before(function (done) {
        const newUser = {
            username: "username",
            password: "password"
        }

        chai
            .request(app)
            .post('/user/register')
            .send(newUser)
            .end(function (err, res) {
                userId = res.body._id
                done()
            })
    })

    after(function (done) {
        clearUser(done)
    })

    describe("POST /user/login", function () {
        it("Should send a token generated from payload of logged in user", function (done) {
            const input = { username: "username", password: "password" }
            chai
                .request(app)
                .post("/user/login")
                .send(input)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })

    // No matching profile
    describe("POST /user/login", function () {
        it("Should send an error because no matching profile found", function (done) {
            const input = { username: "username", password: "wrong" }
            chai
                .request(app)
                .post("/user/login")
                .send(input)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(400)
                    done()
                })
        })
    })

    // No matching profile
    describe("POST /user/login", function () {
        it("Should send an error because no matching profile found", function (done) {
            const input = { username: "wrong", password: "password" }
            chai
                .request(app)
                .post("/user/login")
                .send(input)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(400)
                    done()
                })
        })
    })

    // Register Success
    describe("POST /user/register", function () {
        it("Should send an object of recently registered user", function (done) {
            const input = { username: "test", password: "test" }
            chai
                .request(app)
                .post('/user/register')
                .send(input)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(201)
                    expect(res.body).to.be.an("object")
                    expect(res.body).to.have.property("username")
                    expect(res.body).to.have.property("password")
                    expect(res.body.username).to.equal(input.username)
                    expect(res.body.password).to.not.equal(input.password)
                    done()
                })
        })
    })

    // Not registered with a username
    describe("POST /user/register", function () {
        it("Should return an error for not providing username with status 500", function (done) {
            const input = { password: "password" }
            chai
                .request(app)
                .post('/user/register')
                .send(input)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(500)
                    done()
                })
        })
    })

    // Not registered with an password
    describe("POST /user/register", function () {
        it("Should return an error for not providing password with status 500", function (done) {
            const input = { username: "username" }
            chai
                .request(app)
                .post('/user/register')
                .send(input)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(500)
                    done()
                })
        })
    })
})