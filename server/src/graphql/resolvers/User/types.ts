import { Listing } from "../../../lib/types";

export interface UserArgs {
  id: string;
}

export interface UserListingsArgs {
  limit: number;
  page: number;
}

export interface UserListingsData {
  total: number;
  result: Listing[];
}