import { Transaction } from "@modules/finances/infra/typeorm/entities/Transaction";
import { inject, injectable } from "tsyringe";
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

interface IRequest{
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt?:Date
}

@injectable()
class CreateTransactionUseCase{
    constructor(
        @inject('TransactionsRepository')
        private transactionsRepository: ITransactionsRepository,
    ) { }
    
    async execute({ title, type, category, amount, createdAt }: IRequest):Promise<Transaction> {
        
        const transactions = await this.transactionsRepository.create({
            title,
            type,
            category,
            amount,
            createdAt
        })
        return transactions
        
    }

}

export{CreateTransactionUseCase}