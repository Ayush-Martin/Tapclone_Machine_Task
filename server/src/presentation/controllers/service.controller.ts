import { NextFunction, Request, Response } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from "../../infrastructure/container/types";
import { binder } from "../../shared/utils/binder";
import { successResponse } from "../../shared/utils/responseCreator";
import { StatusCodes } from "../../shared/constants/statusCodes";
import { ServiceResponseMessages } from "../../shared/constants/responseMessages";
import { ICreateServiceUseCase } from "../../application/interface/useCases/service/ICreateService.useCase";
import { IUpdateServiceUseCase } from "../../application/interface/useCases/service/IUpdateService.useCase";
import { IDeleteServiceUseCase } from "../../application/interface/useCases/service/IDeleteService.useCase";
import { IGetAllServicesUseCase } from "../../application/interface/useCases/service/IGetAllServices.useCase";
import {
  ForwardCreateServiceDTO,
  ForwardUpdateServiceDTO,
  ForwardDeleteServiceDTO,
} from "../../application/DTO/service/service.dto";

@injectable()
class ServiceController {
  constructor(
    @inject(TYPES.CreateServiceUseCase)
    private readonly _createServiceUseCase: ICreateServiceUseCase,
    @inject(TYPES.UpdateServiceUseCase)
    private readonly _updateServiceUseCase: IUpdateServiceUseCase,
    @inject(TYPES.DeleteServiceUseCase)
    private readonly _deleteServiceUseCase: IDeleteServiceUseCase,
    @inject(TYPES.GetAllServicesUseCase)
    private readonly _getAllServicesUseCase: IGetAllServicesUseCase,
  ) {
    binder(this);
  }

  /**
   * GET /api/services
   * Public — returns all services
   */
  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const services = await this._getAllServicesUseCase.execute();
      res
        .status(StatusCodes.OK)
        .json(successResponse(ServiceResponseMessages.SERVICES_FETCHED, services));
    } catch (err) {
      next(err);
    }
  }

  /**
   * POST /api/services
   * Admin protected — creates a new service
   */
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = new ForwardCreateServiceDTO(req.body);
      const service = await this._createServiceUseCase.execute(dto);
      res
        .status(StatusCodes.CREATED)
        .json(successResponse(ServiceResponseMessages.SERVICE_CREATED, service));
    } catch (err) {
      next(err);
    }
  }

  /**
   * PUT /api/services/:id
   * Admin protected — updates an existing service
   */
  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = new ForwardUpdateServiceDTO(req.params.id, req.body);
      const service = await this._updateServiceUseCase.execute(dto);
      res
        .status(StatusCodes.OK)
        .json(successResponse(ServiceResponseMessages.SERVICE_UPDATED, service));
    } catch (err) {
      next(err);
    }
  }

  /**
   * DELETE /api/services/:id
   * Admin protected — deletes a service
   */
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = new ForwardDeleteServiceDTO(req.params.id);
      const service = await this._deleteServiceUseCase.execute(dto);
      res
        .status(StatusCodes.OK)
        .json(successResponse(ServiceResponseMessages.SERVICE_DELETED, service));
    } catch (err) {
      next(err);
    }
  }
}

export default ServiceController;
