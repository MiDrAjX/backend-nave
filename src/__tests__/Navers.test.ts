import request from 'supertest';
import { app } from '../app';

import createConnection from '../database'


describe("Navers", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new Naver", async () => {
        const response = await request(app).post("/navers")
            .send({
                name: "naver example",
                job_role: "job Example",
                birthdate: "test",
                admission_date: "test",
            });

        expect(response.status).toBe(201);
    });

});