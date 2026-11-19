export type RatesResponse = {
  result: string;
  base_code: string;
  time_last_update_utc: string;
  time_next_update_utc: string;
  rates: Record<string, number>;
};

export type Status = 'loading' | 'error' | 'success';