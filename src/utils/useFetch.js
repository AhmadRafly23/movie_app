import useSWRV from 'swrv';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useFetch = (key) => {
  const { data, error } = useSWRV(process.env.VUE_APP_API_URL + key, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
