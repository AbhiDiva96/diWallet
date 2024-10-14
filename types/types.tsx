

export type TransactionType  = "in" | "out" | string;


export interface User {
    id: number;                 // Unique identifier for the user
    email: string;              // User's email address
    name: string;               // User's name
    passwordHash?: string;      // User's password hash (optional)
    createdAt: Date;            // Date when the user was created
    updatedAt: Date;            // Date when the user was last updated
}


export interface Transaction{
    //map(arg0: (transaction: any) => import("react").JSX.Element): import("react").ReactNode;
    id : number;
    userId? : number;
    amount: number;
    transactionName: string;
    type: TransactionType;
     createdAt : Date;
}