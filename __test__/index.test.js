const request = require("supertest");
const ApiUrl = "https://drj335kkci.execute-api.sa-east-1.amazonaws.com/dev";

const randomValue = Math.random();
console.log(randomValue);

describe("POST /users/", () => {
  it("cadastro com sucesso", () => {
    let users =
          {
              "fullName": "Maria jose",
              "password": "123456",
              "email": "testing"+randomValue+"@test.com.br",
              "loginType": "email"
          }
    return request(ApiUrl)
      .post("/v1/users/")
      .send(users)
      .expect(200)


      .then(response => {
        console.log(response.body);
      });
  },7000);

  it("Email já Cadastrado", () => {
    let users =
          {
              "fullName": "Maria jose",
              "password": "123456",
              "email": "testing"+randomValue+"@test.com.br",
              "loginType": "email"
          }
    return request(ApiUrl)
      .post("/v1/users/")
      .send(users)
      .expect(400)


      .then(response => {
        console.log(response.body);
        expect(response.body.error.status).toEqual(400);
        expect(response.body.error.code).toContain('EMAIL_REGISTERED');
        expect(response.body.error.message).toContain('E-mail já cadastrado');
      });
  },7000);

  it("Campos Obrigatórios Nulos", () => {
    let users =
          {
              "fullName": null,
              "password": null,
              "email": null,
              "loginType": null
          }
    return request(ApiUrl)
      .post("/v1/users/")
      .send(users)
      .expect(400)


      .then(response => {
        console.log(response.body);
        expect(response.body.error.status).toEqual(400);
        expect(response.body.error.code).toContain('FULLNAME_REQUIRED');
        expect(response.body.error.message).toContain('\"fullName\" é obrigatório');
      });
  },7000);

  it("Email Inválido", () => {
    let users =
          {
              "fullName": "José Carlos Pantoja",
              "password": "null",
              "email": "123544",
              "loginType": null
          }
    return request(ApiUrl)
      .post("/v1/users/")
      .send(users)
      .expect(400)


      .then(response => {
        console.log(response.body);
        expect(response.body.error.status).toEqual(400);
        expect(response.body.error.code).toContain('INVALID_EMAIL');
        expect(response.body.error.message).toContain('O e-mail é inválido');
      });
  }, 7000);

  /*************** CENÁRIO DE ERRO 500 ********************/

  it("Erro 500", () => {
    let users =
          {
              "fullName": "José Carlos Pantoja",
              "password": "null",
              "email": 123544,
              "loginType": null
          }
    return request(ApiUrl)
      .post("/v1/users/")
      .send(users)
      .expect(500)


      .then(response => {
        console.log(response.body);
        expect(response.body.error.status).toEqual(500);
        expect(response.body.error.code).toContain('INTERNAL_SERVER_ERROR');
        expect(response.body.error.message).toContain('Expected string but received a number.');
      });
  }, 7000);
});