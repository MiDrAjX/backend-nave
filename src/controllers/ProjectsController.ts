import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import { ProjectsRepository } from '../repositories/ProjectsRepository';

class ProjectsController {
    async store(req: Request, res: Response) { // criar um novo projeto
        try {

            const { name, } = req.body;

            const projectsRepository = getCustomRepository(ProjectsRepository);

            const projects = projectsRepository.create({
                name
            });

            await projectsRepository.save(projects);

            return res.status(201).json(projects);

        } catch (err) {
            console.log("err.message :>> ", err.message);
        }

    }

    async index(req: Request, res: Response) { // listar todos projetos
        try {

            const projectsRepository = getCustomRepository(ProjectsRepository);

            const all = await projectsRepository.find();

            return res.json(all);

        } catch (err) {
            console.log("err.message :>> ", err.message);
        }
    }

    async indexId(req: Request, res: Response) { // Achar um unico projeto procurando pelo id
        try {

            const { id } = req.params

            const projectsRepository = getCustomRepository(ProjectsRepository);

            const all = await projectsRepository.find({ id });

            return res.json(all);
        } catch (err) {
            console.log("err.message :>> ", err.message);
        }

    }

    async update(req: Request, res: Response) { // atualizar informações em um projeto
        try {

            const { name } = req.body;
            const { id } = req.params
            const projectsRepository = getCustomRepository(ProjectsRepository);
            const projects = projectsRepository.save({
                id,
                name,
                updated_at: Date(),
            });

            return res.status(201).json(projects);

        } catch (err) {
            console.log("err.message :>> ", err.message);
        }

    }

    async deleteId(req: Request, res: Response) { // deletar um projeto pelo id
        try {
            const { id } = req.params

            const projectsRepository = getCustomRepository(ProjectsRepository);

            const all = await projectsRepository.delete({ id });
            return res.send(all);
        } catch (err) {
            console.log("err.message :>> ", err.message);
        }
    }




}

export { ProjectsController };