import { DEFAULT_AGENT_CONFIG, DEFAULT_SETTINGS } from '@lobechat/const';
import type { UserSettings } from '@lobechat/types';
import { SWRResponse } from 'swr';
import type { PartialDeep } from 'type-fest';
import { StateCreator } from 'zustand/vanilla';

import { useOnlyFetchOnceSWR } from '@/libs/swr';
import { globalService } from '@/services/global';
import { useAgentStore } from '@/store/agent';
import { useUserStore } from '@/store/user';
import { GlobalRuntimeConfig } from '@/types/serverConfig';
import { merge } from '@/utils/merge';

import type { ServerConfigStore } from './store';

const FETCH_SERVER_CONFIG_KEY = 'FETCH_SERVER_CONFIG';

const syncDependentStores = async (data: GlobalRuntimeConfig) => {
  const serverSettings: PartialDeep<UserSettings> = {
    defaultAgent: data.serverConfig.defaultAgent,
    image: data.serverConfig.image,
    languageModel: data.serverConfig.languageModel,
    systemAgent: data.serverConfig.systemAgent,
  };

  useUserStore.setState({
    defaultSettings: merge(DEFAULT_SETTINGS, serverSettings),
    serverLanguageModel: data.serverConfig.languageModel,
  });

  await useUserStore.getState().refreshDefaultModelProviderList({ trigger: 'refreshServerConfig' });

  useAgentStore.setState({
    defaultAgentConfig: merge(DEFAULT_AGENT_CONFIG, data.serverConfig.defaultAgent?.config),
  });
};

export interface ServerConfigAction {
  refreshServerConfig: () => Promise<GlobalRuntimeConfig>;
  useInitServerConfig: () => SWRResponse<GlobalRuntimeConfig>;
}

export const createServerConfigSlice: StateCreator<
  ServerConfigStore,
  [['zustand/devtools', never]],
  [],
  ServerConfigAction
> = (set) => ({
  refreshServerConfig: async () => {
    const data = await globalService.getGlobalConfig();

    set(
      { featureFlags: data.serverFeatureFlags, serverConfig: data.serverConfig },
      false,
      'refreshServerConfig',
    );

    await syncDependentStores(data);

    return data;
  },
  useInitServerConfig: () => {
    return useOnlyFetchOnceSWR<GlobalRuntimeConfig>(
      FETCH_SERVER_CONFIG_KEY,
      () => globalService.getGlobalConfig(),
      {
        onSuccess: (data) => {
          set(
            { featureFlags: data.serverFeatureFlags, serverConfig: data.serverConfig },
            false,
            'initServerConfig',
          );

          void syncDependentStores(data);
        },
      },
    );
  },
});
