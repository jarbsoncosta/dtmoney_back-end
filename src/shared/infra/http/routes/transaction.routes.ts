import { CreateTransactionController } from '@modules/finances/useCases/createTransaction/CreateTransactionController'
import { ListTransactionsController } from '@modules/finances/useCases/listTransactions/ListTransactionsController'
import { Router } from 'express'


const transactionRoutes = Router()
const createTransactionController = new CreateTransactionController()
const listTransactionController = new ListTransactionsController()



transactionRoutes.post("/", createTransactionController.handle)
transactionRoutes.get("/", listTransactionController.handle)

export{transactionRoutes}