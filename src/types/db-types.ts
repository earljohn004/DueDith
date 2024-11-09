type CategoryTypes = "INCOME" | "EXPENSE";

export interface Category {
  id: string;
  profile_id: number;
  name: string;
  description: string;
  type: CategoryTypes;
  created_at: string;
}
