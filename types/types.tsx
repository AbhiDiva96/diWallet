

export type TransactionType  = "in" | "out" | string;

export interface Transaction{
    //map(arg0: (transaction: any) => import("react").JSX.Element): import("react").ReactNode;
    id : number;
    userId : number;
    amount: number;
    transactionName: string;
    type: TransactionType;
     createdAt : Date;
}