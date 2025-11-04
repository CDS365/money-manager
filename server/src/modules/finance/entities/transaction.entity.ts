import { Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Account } from "./account.entity";

export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "float", default: 0})
    amount : number;

    @Column({ nullable: true})
    description: string;

    @Column()
    category: string;

    @ManyToOne(() => Account, { onDelete: 'CASCADE' })    
    account: Account;

    @Column({type: 'timestamp', default : ()=> 'CURRENT_TIMESTAMP'})
    date: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date; 
}