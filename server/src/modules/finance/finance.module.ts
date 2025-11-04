import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Account } from "./entities/account.entity";
import { FinanceService } from "./finance.service";
import { FinanceController } from "./finance.controller";
import { Transaction } from "./entities/transaction.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Transaction, Account])],
    controllers: [FinanceController],
    providers: [FinanceService],
    exports: [FinanceService]
})
export class FinanceModule {}