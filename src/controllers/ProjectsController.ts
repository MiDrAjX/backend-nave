import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import { ProjectsRepository } from '../repositories/ProjectsRepository';

class ProjectsController {
    async store(req: Request, res: Response) {
        const { name, } = req.body;

        const projectsRepository = getCustomRepository(ProjectsRepository);

        const projects = projectsRepository.create({
            name
        });

        await projectsRepository.save(projects);

        return res.status(201).json(projects);

    }

    async index(req: Request, res: Response) {
        const projectsRepository = getCustomRepository(ProjectsRepository);

        const all = await projectsRepository.find();

        return res.json(all);

    }

}

export { ProjectsController };