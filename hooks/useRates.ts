import { useCallback, useEffect, useState } from 'react';
import { RatesResponse, Status } from '../types/rates';

const URL = 'https://open.er-api.com/v6/latest/KZT';

export function useRates() {
  const [status, setStatus] = useState<Status>('loading');
  const [rates, setRates] = useState<Record<string, number>>({});
  const [updated, setUpdated] = useState('');

  const load = useCallback(async () => {
    setStatus('loading');

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data: RatesResponse = await response.json();

      if (data.result !== 'success') {
        throw new Error('API error');
      }

      setRates(data.rates);
      setUpdated(data.time_last_update_utc);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    status,
    rates,
    updated,
    reload: load,
  };
}