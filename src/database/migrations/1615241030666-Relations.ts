import {MigrationInterface, QueryRunner} from "typeorm";

export class Relations1615241030666 implements MigrationInterface {
    name = 'Relations1615241030666'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "navers_projects_projects" ("naversId" varchar NOT NULL, "projectsId" varchar NOT NULL, PRIMARY KEY ("naversId", "projectsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fa9f9cea0f092596642c9a1f14" ON "navers_projects_projects" ("naversId") `);
        await queryRunner.query(`CREATE INDEX "IDX_931aa5604f48968bb893c513e3" ON "navers_projects_projects" ("projectsId") `);
        await queryRunner.query(`CREATE TABLE "temporary_projects" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_projects"("id", "name", "created_at", "updated_at") SELECT "id", "name", "created_at", "updated_at" FROM "projects"`);
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`ALTER TABLE "temporary_projects" RENAME TO "projects"`);
        await queryRunner.query(`CREATE TABLE "temporary_navers" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "job_role" varchar NOT NULL, "birthdate" datetime NOT NULL DEFAULT (datetime('now')), "admission_date" datetime NOT NULL DEFAULT (datetime('now')), "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_navers"("id", "name", "job_role", "birthdate", "admission_date", "created_at", "updated_at") SELECT "id", "name", "job_role", "birthdate", "admission_date", "created_at", "updated_at" FROM "navers"`);
        await queryRunner.query(`DROP TABLE "navers"`);
        await queryRunner.query(`ALTER TABLE "temporary_navers" RENAME TO "navers"`);
        await queryRunner.query(`DROP INDEX "IDX_fa9f9cea0f092596642c9a1f14"`);
        await queryRunner.query(`DROP INDEX "IDX_931aa5604f48968bb893c513e3"`);
        await queryRunner.query(`CREATE TABLE "temporary_navers_projects_projects" ("naversId" varchar NOT NULL, "projectsId" varchar NOT NULL, CONSTRAINT "FK_fa9f9cea0f092596642c9a1f149" FOREIGN KEY ("naversId") REFERENCES "navers" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_931aa5604f48968bb893c513e3e" FOREIGN KEY ("projectsId") REFERENCES "projects" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("naversId", "projectsId"))`);
        await queryRunner.query(`INSERT INTO "temporary_navers_projects_projects"("naversId", "projectsId") SELECT "naversId", "projectsId" FROM "navers_projects_projects"`);
        await queryRunner.query(`DROP TABLE "navers_projects_projects"`);
        await queryRunner.query(`ALTER TABLE "temporary_navers_projects_projects" RENAME TO "navers_projects_projects"`);
        await queryRunner.query(`CREATE INDEX "IDX_fa9f9cea0f092596642c9a1f14" ON "navers_projects_projects" ("naversId") `);
        await queryRunner.query(`CREATE INDEX "IDX_931aa5604f48968bb893c513e3" ON "navers_projects_projects" ("projectsId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_931aa5604f48968bb893c513e3"`);
        await queryRunner.query(`DROP INDEX "IDX_fa9f9cea0f092596642c9a1f14"`);
        await queryRunner.query(`ALTER TABLE "navers_projects_projects" RENAME TO "temporary_navers_projects_projects"`);
        await queryRunner.query(`CREATE TABLE "navers_projects_projects" ("naversId" varchar NOT NULL, "projectsId" varchar NOT NULL, PRIMARY KEY ("naversId", "projectsId"))`);
        await queryRunner.query(`INSERT INTO "navers_projects_projects"("naversId", "projectsId") SELECT "naversId", "projectsId" FROM "temporary_navers_projects_projects"`);
        await queryRunner.query(`DROP TABLE "temporary_navers_projects_projects"`);
        await queryRunner.query(`CREATE INDEX "IDX_931aa5604f48968bb893c513e3" ON "navers_projects_projects" ("projectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_fa9f9cea0f092596642c9a1f14" ON "navers_projects_projects" ("naversId") `);
        await queryRunner.query(`ALTER TABLE "navers" RENAME TO "temporary_navers"`);
        await queryRunner.query(`CREATE TABLE "navers" ("id" uuid PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "job_role" varchar NOT NULL, "birthdate" date NOT NULL, "admission_date" date NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "navers"("id", "name", "job_role", "birthdate", "admission_date", "created_at", "updated_at") SELECT "id", "name", "job_role", "birthdate", "admission_date", "created_at", "updated_at" FROM "temporary_navers"`);
        await queryRunner.query(`DROP TABLE "temporary_navers"`);
        await queryRunner.query(`ALTER TABLE "projects" RENAME TO "temporary_projects"`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" uuid PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "projects"("id", "name", "created_at", "updated_at") SELECT "id", "name", "created_at", "updated_at" FROM "temporary_projects"`);
        await queryRunner.query(`DROP TABLE "temporary_projects"`);
        await queryRunner.query(`DROP INDEX "IDX_931aa5604f48968bb893c513e3"`);
        await queryRunner.query(`DROP INDEX "IDX_fa9f9cea0f092596642c9a1f14"`);
        await queryRunner.query(`DROP TABLE "navers_projects_projects"`);
    }

}
