import { Prisma } from "@prisma/client";

const GetListSelect: Prisma.MerchandiseSelect = {
  images: {
    select: {
      id: true,
      color: true,
      path: true,
    },
  },
};

const GetByIdSelect: Prisma.MerchandiseSelect = {
  images: {
    select: {
      id: true,
      color: true,
      path: true,
    },
  },
  features: {
    select: {
      id: true,
      title: true,
      value: true,
      additionalPrice: true,
    },
  },
};

const GetFilterOptionsSelect: Prisma.MerchandiseSelect = {
  features: {
    select: {
      id: true,
      title: true,
      value: true,
      additionalPrice: true,
    },
  },
};

export const MerchandiseServicePrismaSelects = {
  getList: GetListSelect,
  getById: GetByIdSelect,
  getFilterOptions: GetFilterOptionsSelect,
};
