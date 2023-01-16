import { EpisodeService } from 'gen/api_connectweb';
import useConnect from 'hooks/useConnect';
import { useState } from 'react';
import { useQuery } from 'react-query';

const useEpisodes = (pageSize: number) => {
  const [token, setToken] = useState('');
  const client = useConnect(EpisodeService);
  const getEpisodes = (pageToken: string) =>
    client.list({ pageSize, pageToken });
  return {
    episodesQuery: useQuery({
      queryKey: ['episodes', token],
      queryFn: () => getEpisodes(token),
    }),
    setToken,
  };
};

export default useEpisodes;
