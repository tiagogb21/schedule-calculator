import * as sinon from 'sinon';
import * as chai from 'chai';
import { before } from 'mocha';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import model from '../database/models/user.model';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste de register', () => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSJ9LCJpYXQiOjE2NTcyNzY4NzksImV4cCI6MTgzMDA3Njg3OX0.h4R0Y-gAh_Q8SXPYhjw8KmPzJnAwdkPOWGtqaLtdb94'
  before(() => {
    sinon.stub(model, 'findOne').resolves()
  });
  after(() => {
    (model.findOne as sinon.SinonStub).restore();
  });

  it("A rota post /register deve retornar o token", async () => {
    const response = await chai.request(app)
      .post('/register')
      .send({
        name: 'Pedro de Alcântara Francisco Antônio João Carlos Xavier',
        email: 'dompedro1@gmail.com',
        password: 'secret_user',
        role: 'client',
      }).then((res) => res);
    expect(response.body.newUser).to.have.property("token");
  });

  it("A rota post /register deve retornar uma mensagem de erro", async () => {
    const response = await chai.request(app)
      .post('/register')
      .send({
        name: 'Fake',
        email: 'fake',
        password: 'secret_fake'
      }).then((res) => res)

    expect(response.body).to.deep.equal({
      message:'Incorrect name, email or password'
    });
  });
});
