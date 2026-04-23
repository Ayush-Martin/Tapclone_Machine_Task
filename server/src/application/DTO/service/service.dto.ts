import { z } from "zod";
import { serviceValidationRules } from "../../../shared/validation/validationRule/serviceValidationRules";
import ServiceEntity from "../../../domain/entities/service.entity";

// ─── Forward DTOs ─────────────────────────────────────────────────────────────

export class ForwardCreateServiceDTO {
  public name: string;
  public description: string;

  constructor(data: unknown) {
    const schema = z.object({
      name: serviceValidationRules.name,
      description: serviceValidationRules.description,
    });
    const parsed = schema.parse(data);
    this.name = parsed.name;
    this.description = parsed.description;
  }
}

export class ForwardUpdateServiceDTO {
  public id: string;
  public name: string;
  public description: string;

  constructor(id: string, data: unknown) {
    const schema = z.object({
      name: serviceValidationRules.name,
      description: serviceValidationRules.description,
    });
    const parsed = schema.parse(data);
    this.id = z.string().min(1, "ID is required").parse(id);
    this.name = parsed.name;
    this.description = parsed.description;
  }
}

export class ForwardDeleteServiceDTO {
  public id: string;

  constructor(id: string) {
    this.id = z.string().min(1, "ID is required").parse(id);
  }
}

// ─── Reverse DTO ──────────────────────────────────────────────────────────────

export class ReverseServiceDTO {
  public id: string;
  public name: string;
  public description: string;

  constructor(entity: ServiceEntity) {
    this.id = entity.id;
    this.name = entity.name.value;
    this.description = entity.description.value;
  }
}
