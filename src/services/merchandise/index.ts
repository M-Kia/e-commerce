import db from "@/db";
import { IPagination } from "@/type/pagination";
import { MerchandiseType, Prisma } from "@prisma/client";
import { MerchandiseServicePrismaSelects } from "./select-options";
import {
  FeatureOptions,
  MerchandiseFilter,
  MerchandiseServiceReturnType,
  OperationType,
  PriceFilter,
} from "./type";

async function getList(
  filters: MerchandiseFilter[],
  pagination?: IPagination
): Promise<MerchandiseServiceReturnType["getList"]> {
  let where: Prisma.MerchandiseFindManyArgs["where"] = undefined;
  if (filters) {
    const otherFilters: MerchandiseFilter[] = [];
    const priceFilters: Partial<PriceFilter>[] = [];
    const mainFilters = filters.reduce<{
      title?: string;
      type?: MerchandiseType;
    }>((result, filter) => {
      const priceLastIndex = priceFilters.length - 1;
      if (filter.title === "title") {
        result.title = filter.title;
      } else if (filter.title === "type") {
        result.type = filter.value as MerchandiseType;
      } else if (filter.title === "price_type") {
        if (
          priceFilters.length === 0 ||
          priceFilters[priceLastIndex].type !== undefined
        ) {
          priceFilters.push({ type: filter.value as OperationType });
        } else {
          priceFilters[priceLastIndex].type = filter.value as OperationType;
        }
      } else if (filter.title === "price" && !isNaN(+filter.value)) {
        if (
          priceFilters.length === 0 ||
          priceFilters[priceFilters.length - 1].value !== undefined
        ) {
          priceFilters.push({ value: +filter.value });
        } else {
          priceFilters[priceFilters.length - 1].value = +filter.value;
        }
      } else {
        otherFilters.push(filter);
      }

      return result;
    }, {});

    const filteredPriceFilters: PriceFilter[] = priceFilters.reduce<
      PriceFilter[]
    >((result, priceFilter) => {
      if (priceFilter.type && priceFilter.value) {
        result.push({
          type: priceFilter.type,
          value: priceFilter.value,
        });
      }
      return result;
    }, []);

    where = {
      title: mainFilters.title,
      type: mainFilters.type,
      AND: [
        ...filteredPriceFilters.map((priceFilter) => ({
          [priceFilter.type]: priceFilter.value,
        })),
        ...otherFilters?.map((filter) => ({
          features: {
            some: {
              title: filter.title,
              value: filter.value,
            },
          },
        })),
      ],
    };
  }

  const paginationParams: { skip: number; take: number } | {} =
    pagination !== undefined
      ? { skip: pagination.offset, take: pagination.limit }
      : {};

  return await db.merchandise.findMany({
    where,
    ...paginationParams,
    select: MerchandiseServicePrismaSelects.getList,
  });
}

async function getById(
  id: number
): Promise<MerchandiseServiceReturnType["getById"]> {
  return await db.merchandise.findFirst({
    where: {
      id,
    },
    select: MerchandiseServicePrismaSelects.getById,
  });
}

async function getFilterOptions(
  type: MerchandiseType
): Promise<MerchandiseServiceReturnType["getFilterOptions"]> {
  const merchandises = await db.merchandise.findMany({
    where: { type },
    select: {
      features: {
        select: {
          id: true,
          title: true,
          value: true,
          additionalPrice: true,
        },
      },
    },
  });

  const features = merchandises.reduce<FeatureOptions>(
    (result, merchandise) => {
      merchandise.features.forEach((feature) => {
        if (result[feature.title]) {
          result[feature.title].push({
            value: feature.value,
            additionalPrice: feature.additionalPrice,
          });
        } else {
          result[feature.title] = [
            {
              value: feature.value,
              additionalPrice: feature.additionalPrice,
            },
          ];
        }
      });

      return result;
    },
    {}
  );

  const prices = await db.merchandise.aggregate({
    where: { type },
    _min: { price: true },
    _max: { price: true },
  });

  return {
    features,
    price: { min: prices._min.price ?? 0, max: prices._max.price ?? 0 },
  };
}

export const MerchandiseService = {
  getList,
  getById,
  getFilterOptions,
};
