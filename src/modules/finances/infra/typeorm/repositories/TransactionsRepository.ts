import { getRepository, Repository } from "typeorm";
import { ICreateTransactionDTO } from "../../../dtos/ICreateTransactionDTO";
import { ITransactionsRepository } from "../../../repositories/ITransactionsRepository";
import { Transaction } from "../entities/Transaction";



class TransactionsRepository implements ITransactionsRepository{

    private repository: Repository<Transaction>

    constructor() {
        this.repository= getRepository(Transaction)
    }
    async list(): Promise<Transaction[]> {
        const transactions = await this.repository.find()
        return transactions
    }
    async create({
        title,type,category,amount,createdAt
    }: ICreateTransactionDTO): Promise<Transaction>{
        const transaction = this.repository.create({
            title,
            type,
            category,
            amount,
            createdAt,
        })
        await this.repository.save(transaction)
        return transaction
        
    }

}

export{TransactionsRepository}