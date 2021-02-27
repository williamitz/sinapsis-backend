import { Router, Request, Response } from 'express';
import MysqlClass from '../classes/mysql.connect';

const personRouter = Router();
const mysqlCnn = MysqlClass.instance;

personRouter.get('/getPerson', [], (req: Request, res: Response ) => {

    mysqlCnn.onExecuteQuery('CALL as_sp_getPerson();', (error: any, data: any[]) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                error
            });
        }

        res.json({
            ok: true,
            data
        });
    });

});

export default personRouter;