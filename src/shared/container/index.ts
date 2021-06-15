import { container } from 'tsyringe'
import {ITransactionsRepository} from '../../modules/finances/repositories/ITransactionsRepository'
import{TransactionsRepository} from '../../modules/finances/infra/typeorm/repositories/TransactionsRepository'

container.registerSingleton<ITransactionsRepository>(
    "TransactionsRepository",
    TransactionsRepository
)