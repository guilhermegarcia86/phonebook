const request = require('supertest')
const server = require('../index')

afterAll( async () => {
  server.close()
});

describe('Make requests to the server', () => {

    it('Should create a contact', async () => {
        const resp = await request(server).post('/api').send({
            "id": 1,
            "name": "Kelly",
            "telephone": "118888888",
            "address": "Rua dos Bobos n 1"
        });

        expect(resp.statusCode).toEqual(201)
        expect(resp.body.name).toEqual("Kelly")
    })

})