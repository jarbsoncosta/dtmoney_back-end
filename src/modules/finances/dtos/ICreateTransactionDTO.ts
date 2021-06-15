

interface ICreateTransactionDTO{
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt?:Date
}

export{ICreateTransactionDTO}