
import {ICreateTransactionDTO} from '../dtos/ICreateTransactionDTO'
import {Transaction} from '../infra/typeorm/entities/Transaction'

interface ITransactionsRepository{
    create(data: ICreateTransactionDTO): Promise<Transaction>
    findById(id:string): Promise<Transaction>
    list(): Promise<Transaction[]>
    delete(id: string): Promise<void>

}

export {ITransactionsRepository}