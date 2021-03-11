import request from 'supertest';
import { app } from '../app';

import createConnection from '../database'


describe("Projects", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new Projects", async () => {
        const response = await request(app).post("/projects")
            .send({
                name: "Projects example"
            });

        expect(response.status).toBe(201);
    });

});