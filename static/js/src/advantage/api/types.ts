import {
  AccountContractInfo,
  AccountInfo,
  AffordancesSupport,
  AllowanceInfo,
  ContractInfo,
  GetContractTokenResponse,
  ProductListing,
  Renewal,
  Subscription,
} from "./contracts-types";

export type ContractWithToken = AccountContractInfo & {
  token: GetContractTokenResponse["contractToken"];
};

export type EnterpriseContractInfo = ContractInfo & {
  createdAtFormatted: string;
  daysTillExpiry: number;
  effectiveToFormatted: string;
  status: string;
};

export type EnterpriseContractEntitlements = {
  // `entitlementType` corresponds to Entitlement["type"].
  [entitlementType: string]: true;
};
export type EnterpriseContractRenewal = Renewal & {
  recently_renewed: boolean;
  renewable: boolean;
};

export type EnterpriseContract = Omit<ContractWithToken, "contractInfo"> & {
  contractInfo: EnterpriseContractInfo;
  entitlements: EnterpriseContractEntitlements;
  expiring: boolean;
  is_detached: boolean;
  machineCount: number;
  period: Subscription["period"];
  price_per_unit: ProductListing["price"];
  productID: NonNullable<ContractInfo["products"]>[0];
  product_listing_id: ProductListing["id"];
  renewal: EnterpriseContractRenewal | null;
  rowMachineCount: AllowanceInfo["value"];
  supportLevel: AffordancesSupport["supportLevel"];
};

export type EnterpriseContracts = {
  // `name` corresponds to AccountInfo["name"].
  [name: string]: EnterpriseContract;
};

export type PendingPurchaseId = string;

export type PersonalAccount = AccountInfo & {
  contracts: ContractWithToken[];
  free_token: GetContractTokenResponse["contractToken"];
};