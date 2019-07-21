const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('../app')
const clearPassword = require('../helpers/clearPassword')

chai.use(chaiHttp)

let passwordId;
let userToken;
let dummyId;

describe('Product tests', function () {
    before(function (done) {
        const newUser = {
            username: "username",
            password: "password",
        }

        chai
            .request(app)
            .post('/user/register')
            .send(newUser)
            .end(function (err, res) {
                userId = res.body._id
            })

        const input = { username: "username", password: "password" }
        chai
            .request(app)
            .post("/user/login")
            .send(input)
            .end(function (err, res) {
                userToken = res.body.token

                const pass = { account: "dummy", email: "dummy", password: "dummy" }
                chai
                    .request(app)
                    .post('/password')
                    .set('token', userToken)
                    .send(pass)
                    .end(function (err, res) {
                        dummyId = res.body._id
                    })
            })


        const xenditRegister = {
            username: "xendit",
            password: "xendit",
        }
        chai
            .request(app)
            .post('/user/register')
            .send(xenditRegister)
            .end(function (err, res) {
                userId = res.body._id
            })

        const xenditLogin = { username: "xendit", password: "xendit" }
        chai
            .request(app)
            .post("/user/login")
            .send(xenditLogin)
            .end(function (err, res) {
                userToken = res.body.token
                done()
            })
    })

    after(function (done) {
        clearPassword(done)
    })

    // SUCCESS
    describe("POST /password", function () {
        it('should return object of created password', function (done) {
            const newPassword = {
                account: "test",
                email: "test",
                password: "test"
            }
            chai
                .request(app)
                .post('/password')
                .set('token', userToken)
                .send(newPassword)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(201);
                    passwordId = res.body._id
                    done();
                })
        })
    })

    describe('GET /password', function () {
        it("should return array of object of passwords", function (done) {
            chai
                .request(app)
                .get('/password')
                .set('token', userToken)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an("array")
                    done();
                });
        })
    })

    describe("GET /password/:id", function () {
        it('should send password object of sent ID', function (done) {
            chai
                .request(app)
                .get(`/password/${passwordId}`)
                .set('token', userToken)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an("object")
                    expect(res.body).to.have.property("account")
                    expect(res.body).to.have.property("email")
                    expect(res.body).to.have.property("password")
                    expect(res.body).to.have.property("icon")
                    expect(res.body).to.have.property("userId")
                    done();
                })
        })
    })

    describe("PATCH /password/:id", function () {
        it("should send back object of updated password", function (done) {
            const editPassword = {
                account: "edit",
                email: "edit",
                password: "edit"
            }
            chai
                .request(app)
                .patch(`/password/${passwordId}`)
                .set('token', userToken)
                .send(editPassword)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    expect(res.body).to.be.an("object")
                    expect(res.body).to.have.property("account")
                    expect(res.body).to.have.property("email")
                    expect(res.body).to.have.property("password")
                    expect(res.body).to.have.property("icon")
                    expect(res.body).to.have.property("userId")
                    expect(res.body.account).to.equal(editPassword.account);
                    expect(res.body.email).to.equal(editPassword.email);
                    expect(res.body.password).to.equal(editPassword.password);
                    expect(res.body.icon).to.equal(`https://logo.clearbit.com/${res.body.account}.com`);
                    done()
                })
        })
    })

    describe("DELETE /password/:id", function () {
        it("should return of deleted object with code 202", function (done) {
            chai
                .request(app)
                .delete(`/password/${passwordId}`)
                .set('token', userToken)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(202)
                    done()
                })
        })
    })
    // SUCCESS

    // AUTHENTICATION ERROR
    describe("POST /password", function () {
        it('should send error for not being authenticated with status 401', function (done) {
            const newPassword = {
                account: "test",
                email: "test",
                password: "test"
            }
            chai
                .request(app)
                .post('/password')
                .send(newPassword)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(401);
                    done();
                })
        })
    })

    describe('GET /password', function () {
        it("should send error for not being authenticated with status 401", function (done) {
            chai
                .request(app)
                .get('/password')
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(401);
                    done();
                });
        })
    })

    describe("GET /password/:id", function () {
        it('should send error for not being authenticated with status 401', function (done) {
            chai
                .request(app)
                .get(`/password/${passwordId}`)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(401);
                    done();
                })
        })
    })

    describe("PATCH /password/:id", function () {
        it("should send error for not being authenticated with status 401", function (done) {
            const editPassword = {
                account: "edit",
                email: "edit",
                password: "edit"
            }
            chai
                .request(app)
                .patch(`/password/${passwordId}`)
                .send(editPassword)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(401)
                    done()
                })
        })
    })

    describe("DELETE /password/:id", function () {
        it("should send error for not being authenticated with status 401", function (done) {
            chai
                .request(app)
                .delete(`/password/${passwordId}`)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(401)
                    done()
                })
        })
    })
    // AUTHENTICATION ERROR

    // AUTHORIZATION ERROR
    describe("GET /password/:id", function () {
        it('should send error for being unauthorized with status 403', function (done) {
            chai
                .request(app)
                .get(`/password/${dummyId}`)
                .set('token', userToken)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(403);
                    done();
                })
        })
    })

    describe("PATCH /password/:id", function () {
        it("should send error for being unauthorized with status 403", function (done) {
            const editPassword = {
                account: "edit",
                email: "edit",
                password: "edit"
            }
            chai
                .request(app)
                .patch(`/password/${dummyId}`)
                .set('token', userToken)
                .send(editPassword)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(403)
                    done()
                })
        })
    })

    describe("DELETE /password/:id", function () {
        it("should send error for being unauthorized with status 403", function (done) {
            chai
                .request(app)
                .delete(`/password/${dummyId}`)
                .set('token', userToken)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(403)
                    done()
                })
        })
    })
    // AUTHORIZATION ERROR
})