import { Prisma } from "@prisma/client";
import { MerchandiseServicePrismaSelects } from "./select-options";

export interface MerchandiseFilter {
  title: string;
  value: string;
}

interface FeatureOption {
  value: string;
  additionalPrice: number;
}

export interface FeatureOptions {
  [title: string]: FeatureOption[];
}

export enum OperationType {
  equals = "equals", // Equal
  gt = "gt", // Greater Than
  gte = "gte", // Equal or Greater Than
  lt = "lt", // Less Than
  lte = "lte", // Equal or Less Than
}

export interface PriceFilter {
  value: number;
  type: OperationType;
}

// Functions Return Type
export type MerchandiseServiceReturnType = {
  getList: Prisma.MerchandiseGetPayload<{
    select: typeof MerchandiseServicePrismaSelects.getList;
  }>[];
  getById: Prisma.MerchandiseGetPayload<{
    select: typeof MerchandiseServicePrismaSelects.getById;
  }> | null;
  getFilterOptions: {
    features: FeatureOptions;
    price: {
      min: number;
      max: number;
    };
  };
};
