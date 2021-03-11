import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Navers } from "./Navers";


@Entity("projects")
export class Projects {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @ManyToMany(() => Navers, navers => navers.projects)
    navers: Navers[];

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}
export default Projects;
