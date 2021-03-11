import { Request, Response } from 'express'
import { getCustomRepository, Timestamp } from 'typeorm';
import { NaversRepository } from '../repositories/NaversRepository';

class NaversController {
    async store(req: Request, res: Response) {
        try {

            const { name, job_role, birthdate, admission_date, projects } = req.body;

            const naversRepository = getCustomRepository(NaversRepository);

            const navers = naversRepository.create({
                name,
                job_role,
                birthdate,
                admission_date,
                projects
            });

            await naversRepository.save(navers);

            return res.status(201).json(navers);
        } catch (err) {
            console.log("err.message :>> ", err.message);
        }

    }
    async update(req: Request, res: Response) {
        try {

            const { name, job_role, birthdate, admission_date } = req.body;
            const { id } = req.params
            const naversRepository = getCustomRepository(NaversRepository);
            const navers = naversRepository.save({
                id,
                name,
                job_role,
                birthdate,
                admission_date,
                updated_at: Date(),
            });

            return res.status(201).json(navers);
        } catch (err) {
            console.log("err.message :>> ", err.message);
        }

    }

    async index(req: Request, res: Response) {
        try {

            const naversRepository = getCustomRepository(NaversRepository);

            const all = await naversRepository.find();

            return res.json(all);

        } catch (err) {
            console.log("err.message :>> ", err.message);
        }

    }
    async indexId(req: Request, res: Response) {
        try {

            const { id } = req.params

            const naversRepository = getCustomRepository(NaversRepository);

            const all = await naversRepository.find({ id });

            return res.json(all);
        } catch (err) {
            console.log("err.message :>> ", err.message);
        }

    }

    async deleteId(req: Request, res: Response) {
        try {
            const { id } = req.params

            const naversRepository = getCustomRepository(NaversRepository);

            const all = await naversRepository.delete({ id });
            return res.send(all);
        } catch (err) {
            console.log("err.message :>> ", err.message);
        }
    }

}

export { NaversController };