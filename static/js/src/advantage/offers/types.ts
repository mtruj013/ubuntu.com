import { UserSubscriptionMarketplace } from "advantage/api/enum";

export type Item = {
  allowance: number;
  id: string;
  name: string;
  price: number;
};

export type ExternalId = {
  origin: string;
  ids: string[];
};

export type Offer = {
  account_id: string;
  actionable: boolean;
  created_at: string;
  id: string;
  items: Item[];
  marketplace: UserSubscriptionMarketplace;
  total: number;
  discount: number | null;
  can_change_items?: boolean;
  external_ids?: ExternalId[] | null;
  activation_account_id?: string | null;
  distributor_account_name?: string | null;
  reseller_account_name?: string | null;
  end_user_account_name?: string | null;
  technical_contact?: string | null;
};
