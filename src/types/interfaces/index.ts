export interface IDomainsForSale {
  limit: Number;
  pageNumber: Number;
}

export interface IAddDomainForSale {
  traderId: String;
  domainName: String;
  price: Number;
  closingDate: String;
}
