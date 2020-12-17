import Domain from "../models/Domain";

export const isDomainExisting = async (domainName: string) => {
  const domain = await Domain.findOne({ domainName });
  return domain;
};
