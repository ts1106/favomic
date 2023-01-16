import {
  createConnectTransport,
  createPromiseClient,
  PromiseClient,
} from '@bufbuild/connect-web';
import { ServiceType } from '@bufbuild/protobuf';
import { useMemo } from 'react';

const transport = createConnectTransport({
  baseUrl: 'http://localhost:8080',
});

const useConnect = <T extends ServiceType>(service: T): PromiseClient<T> =>
  useMemo(() => createPromiseClient(service, transport), [service]);

export default useConnect;
