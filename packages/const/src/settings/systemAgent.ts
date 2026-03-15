import { QueryRewriteSystemAgent, SystemAgentItem, UserSystemAgentConfig } from '@lobechat/types';

const DEFAULT_SYSTEM_AGENT_MODEL = 'gpt-4o-mini';
const DEFAULT_SYSTEM_AGENT_PROVIDER = 'openai';

export const DEFAULT_SYSTEM_AGENT_ITEM: SystemAgentItem = {
  model: DEFAULT_SYSTEM_AGENT_MODEL,
  provider: DEFAULT_SYSTEM_AGENT_PROVIDER,
};

export const DEFAULT_QUERY_REWRITE_SYSTEM_AGENT_ITEM: QueryRewriteSystemAgent = {
  enabled: true,
  model: DEFAULT_SYSTEM_AGENT_MODEL,
  provider: DEFAULT_SYSTEM_AGENT_PROVIDER,
};

export const DEFAULT_SYSTEM_AGENT_CONFIG: UserSystemAgentConfig = {
  agentMeta: DEFAULT_SYSTEM_AGENT_ITEM,
  generationTopic: DEFAULT_SYSTEM_AGENT_ITEM,
  historyCompress: DEFAULT_SYSTEM_AGENT_ITEM,
  queryRewrite: DEFAULT_QUERY_REWRITE_SYSTEM_AGENT_ITEM,
  thread: DEFAULT_SYSTEM_AGENT_ITEM,
  topic: DEFAULT_SYSTEM_AGENT_ITEM,
  translation: DEFAULT_SYSTEM_AGENT_ITEM,
};
