import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("navers")
export class Navers {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    job_role: string;

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


