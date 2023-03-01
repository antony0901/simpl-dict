import {Body, Controller, Get, Param, Post, Req} from "@nestjs/common";
import {AccountService} from "../services/account.service";
import {CreateAccountDto} from "../dtos/account.dto";
import {PaginationRequest} from "src/shared/http/pagination";

@Controller('accounts')
export class AccountController {
  constructor(private readonly _accountService: AccountService){}
  
  @Get(':id')
  getAccount(@Param('id')id: number) {
    return this._accountService.getAccount(id);
  }
  
  @Post()
  createAccount(@Body() createAccountDto: CreateAccountDto) {
    return this._accountService.createAccount(createAccountDto);
  }

  @Get()
  getAccounts(@Body() paginationRequest: PaginationRequest) {
    return this._accountService.getAccountPaginated(paginationRequest);
  }
}