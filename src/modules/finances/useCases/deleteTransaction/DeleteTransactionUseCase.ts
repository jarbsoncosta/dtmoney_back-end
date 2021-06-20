import { ICreateTransactionDTO } from "@modules/finances/dtos/ICreateTransactionDTO";
import { ITransactionsRepository } from "@modules/finances/repositories/ITransactionsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest{
    id:string
}

@injectable()
class DeleteTransactionUseCase{
    constructor(
        @inject('TransactionsRepository')
        private transactionsRepository: ITransactionsRepository
    ){}

    async execute({id}: IRequest): Promise<void>{
        const transactionExists = await this.transactionsRepository.findById(id)

        if (!transactionExists) {
            throw new Error("transaction not found");
            
        }
        await this.transactionsRepository.delete(id)
        
      
    
    }
}

export{DeleteTransactionUseCase}