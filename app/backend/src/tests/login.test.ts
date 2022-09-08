import * as sinon from 'sinon';
import * as chai from 'chai';
import { before } from 'mocha';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import model from '../database/models/user.model';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste de login', () => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSJ9LCJpYXQiOjE2NTcyNzY4NzksImV4cCI6MTgzMDA3Njg3OX0.h4R0Y-gAh_Q8SXPYhjw8KmPzJnAwdkPOWGtqaLtdb94'
  before(() => {
    sinon.stub(model, 'findOne').resolves({
      username: 'admin',
      role: 'admin',
      email: 'admin@admin.com',
      password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
    } as unknown as model);
  })
  after(() => {
    (model.findOne as sinon.SinonStub).restore();
  })

  it("A rota post /signin deve retornar o token", async () => {
    const response = await chai.request(app)
      .post('/signin')
      .send({
        email: 'admin@admin.com',
        password: 'secret_admin'
      }).then((res) => res)

    expect(response.body).to.have.property("token");
  });

  it("A rota post /sigin deve retornar uma mensagem de erro", async () => {
    const response = await chai.request(app)
      .post('/sigin')
      .send({
        email: 'fake@fake.com',
        password: 'secret_fake'
      }).then((res) => res)

    expect(response.body).to.deep.equal({message:'Incorrect email or password'});
  });

  it("A rota get /signin/validate deve retornar a role", async () => {
    const response = await chai.request(app)
      .get('/signin/validate')
      .set("Authorization", token)
      .then((res) => res)

    expect(response.body).to.deep.equal({role:'admin'});
  });

  it("A rota get /signin/validate deve retornar um erro", async () => {
    const response = await chai.request(app)
      .get('/signin/validate')
      .set("Authorization", "Esse num passa nem com milagre")
      .then((res) => res)

    expect(response.status).to.equal(401);
    expect(response.body).to.deep.equal({ message: 'Token must be a valid token' });
  });
});
