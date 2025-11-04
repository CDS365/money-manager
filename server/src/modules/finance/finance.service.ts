import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Transaction } from "./entities/transaction.entity";
import { Repository } from "typeorm";
import { Account } from "./entities/account.entity";

@Injectable()
export class FinanceService {
    constructor(
        @InjectRepository(Transaction) private transactionRepo: Repository<Transaction>, 
        @InjectRepository(Account) private accountRepo: Repository<Account>
    ) {}
}