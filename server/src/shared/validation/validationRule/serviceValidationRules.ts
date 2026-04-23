import { z } from "zod";
import {
  getMaxLengthMessage,
  getMinLengthMessage,
} from "../generalValidationMessage";

export const serviceValidationRules = {
  name: z
    .string()
    .min(3, getMinLengthMessage("Name", 3))
    .max(100, getMaxLengthMessage("Name", 100)),
  description: z
    .string()
    .min(3, getMinLengthMessage("Description", 3))
    .max(1000, getMaxLengthMessage("Description", 1000)),
} as const;

