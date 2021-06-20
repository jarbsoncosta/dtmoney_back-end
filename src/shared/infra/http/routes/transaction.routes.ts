import { CreateTransactionController } from '@modules/finances/useCases/createTransaction/CreateTransactionController'
import { DeleteTransactionController } from '@modules/finances/useCases/deleteTransaction/DeleteTransactionController'
import { ListTransactionsController } from '@modules/finances/useCases/listTransactions/ListTransactionsController'
import { Router } from 'express'


const transactionRoutes = Router()
const createTransactionController = new CreateTransactionController()
const listTransactionController = new ListTransactionsController()
const deleteTransactionController = new DeleteTransactionController()



transactionRoutes.post("/", createTransactionController.handle)
transactionRoutes.get("/", listTransactionController.handle)
transactionRoutes.delete("/:id", deleteTransactionController.handle)

export{transactionRoutes}