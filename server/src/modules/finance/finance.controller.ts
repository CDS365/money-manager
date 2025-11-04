import { Controller } from "@nestjs/common";
import { FinanceService } from "./finance.service";

@Controller()
export class FinanceController {
 constructor(private financeService: FinanceService) {}
}