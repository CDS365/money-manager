import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum AccountType {
    SAVINGS= "savings",
    INVESTMENT = "investment",
    WALLET = "wallet",
    CREDIT_CARD = "credit card"
}

@Entity("accounts")
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column({type: "enum", enum: AccountType})
    type: string;

    @Column({ type: 'float', default: 0 })
    balance: number;    
}