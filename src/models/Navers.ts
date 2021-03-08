import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Projects } from "./Projects";

@Entity("navers")
export class Navers {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    job_role: string;

    @ManyToMany(type => Projects)
    @JoinTable()
    projects: Projects;

    @CreateDateColumn()
    birthdate: Date;

    @CreateDateColumn()
    admission_date: Date;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}


