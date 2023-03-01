import {Injectable} from "@nestjs/common";
import {Account} from "../models/account.model";
import {CreateAccountDto} from "../dtos/account.dto";
import {PaginationRequest, PaginationResponse, buildPaginationResult, getOffset} from "src/shared/http/pagination";
import {FindOptions} from "sequelize";

@Injectable()
export class AccountService {
  async getAccountPaginated(payload: PaginationRequest) {
    const {
      size,
      pageNumber
    } = payload;

    let condition: FindOptions = {
      where: {},
      order: ['id'],
      offset: getOffset(payload.size, payload.pageNumber),
      limit: payload.size
    }
    if(payload.orderDirection) {
      const {orderDirection} = payload;
      condition.order = [[orderDirection.field, orderDirection.direction.toString()]]
    }
    if(payload.search){
      condition.where = {
        [payload.search.onFields]: payload.search.term
      }
    }
    const rs = await Account.findAll(condition);
    const total = await Account.count({
      where: condition.where
    });
    return buildPaginationResult(rs, total, size, pageNumber);
  }

  async createAccount(payload: CreateAccountDto) {
    return await Account.create({
      name: payload.name,
      providerId: payload.providerId
    })
  }

  getAccount(id: number) {
    return Account.findByPk(id);
  }
}