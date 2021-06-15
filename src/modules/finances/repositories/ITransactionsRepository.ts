
import {ICreateTransactionDTO} from '../dtos/ICreateTransactionDTO'
import {Transaction} from '../infra/typeorm/entities/Transaction'

interface ITransactionsRepository{
    create(data: ICreateTransactionDTO): Promise<Transaction>
    list():Promise<Transaction[]>

}

export {ITransactionsRepository}