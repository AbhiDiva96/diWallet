

export type TransactionType  = "in" | "out" | string;

export interface Transaction{
    id : number;
    userId : number;
    amount: number;
    transactionName: string;
    type: TransactionType;
     createdAt : Date;
}