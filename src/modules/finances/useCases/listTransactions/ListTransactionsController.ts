import { Request, Response } from "express";

import { container } from 'tsyringe'
import { ListTransactionsUseCase } from "./ListTransectionsUseCase";


class ListTransactionsController{
    
    async handle(request:Request, response:Response):Promise<Response> {

        const listTransactionsUseCase = container.resolve(ListTransactionsUseCase)

        const transactions = await listTransactionsUseCase.execute()

        return response.json(transactions)
        
    }
}

export{ListTransactionsController}