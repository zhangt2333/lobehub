import { ModelProviderCard } from '@/types/llm';

const Anthropic: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 4 Opus 是 Anthropic 最强大的下一代模型，具有卓越的推理能力和创造力，适用于最复杂的任务和高级分析。',
      displayName: 'Claude 4 Opus',
      enabled: true,
      functionCall: true,
      id: 'claude-opus-4-20250514',
      maxOutput: 32_000,
      releasedAt: '2025-05-14',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 4 Sonnet 提供了优异的性能和速度平衡，是新一代模型中的理想选择，适用于广泛的企业和创意任务。',
      displayName: 'Claude 4 Sonnet',
      enabled: true,
      functionCall: true,
      id: 'claude-sonnet-4-20250514',
      maxOutput: 64_000,
      releasedAt: '2025-05-14',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.7 sonnet 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.7 Sonnet 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
      displayName: 'Claude 3.7 Sonnet',
      enabled: true,
      functionCall: true,
      id: 'claude-3-7-sonnet-20250219',
      maxOutput: 64_000,
      releasedAt: '2025-02-24',
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.5 Haiku 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.5 Haiku 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
      displayName: 'Claude 3.5 Haiku',
      enabled: true,
      functionCall: true,
      id: 'claude-3-5-haiku-20241022',
      maxOutput: 8192,
      releasedAt: '2024-11-05',
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
      displayName: 'Claude 3.5 Sonnet',
      enabled: true,
      functionCall: true,
      id: 'claude-3-5-sonnet-20241022',
      maxOutput: 8192,
      releasedAt: '2024-10-22',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
      displayName: 'Claude 3.5 Sonnet 0620',
      functionCall: true,
      id: 'claude-3-5-sonnet-20240620',
      maxOutput: 8192,
      releasedAt: '2024-06-20',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3 Haiku 是 Anthropic 的最快且最紧凑的模型，旨在实现近乎即时的响应。它具有快速且准确的定向性能。',
      displayName: 'Claude 3 Haiku',
      functionCall: true,
      id: 'claude-3-haiku-20240307',
      maxOutput: 4096,
      releasedAt: '2024-03-07',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3 Opus 是 Anthropic 用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
      displayName: 'Claude 3 Opus',
      enabled: true,
      functionCall: true,
      id: 'claude-3-opus-20240229',
      maxOutput: 4096,
      releasedAt: '2024-02-29',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude Opus 4.6 is Anthropic’s most intelligent model for building agents and coding.',
      displayName: 'Claude Opus 4.6',
      enabled: true,
      functionCall: true,
      id: 'claude-opus-4-6',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '1h': 10,
                '5m': 6.25,
              },
              pricingParams: ['ttl'],
            },
            name: 'textInput_cacheWrite',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-02-05',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description: 'Claude Sonnet 4.6 is Anthropic’s best combination of speed and intelligence.',
      displayName: 'Claude Sonnet 4.6',
      enabled: true,
      functionCall: true,
      id: 'claude-sonnet-4-6',
      maxOutput: 64_000,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 15,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '1h': 6,
                '5m': 3.75,
              },
              pricingParams: ['ttl'],
            },
            name: 'textInput_cacheWrite',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-02-17',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude Opus 4.5 is Anthropic’s flagship model, combining top-tier intelligence with scalable performance for complex, high-quality reasoning tasks.',
      displayName: 'Claude Opus 4.5',
      functionCall: true,
      id: 'claude-opus-4-5-20251101',
      maxOutput: 64_000,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '1h': 10,
                '5m': 6.25,
              },
              pricingParams: ['ttl'],
            },
            name: 'textInput_cacheWrite',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-11-24',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description: 'Claude Sonnet 4.5 is Anthropic’s most intelligent model to date.',
      displayName: 'Claude Sonnet 4.5',
      functionCall: true,
      id: 'claude-sonnet-4-5-20250929',
      maxOutput: 64_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 15,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheWrite',
            rate: 3.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-09-29',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude Haiku 4.5 is Anthropic’s fastest and smartest Haiku model, with lightning speed and extended reasoning.',
      displayName: 'Claude Haiku 4.5',
      enabled: true,
      functionCall: true,
      id: 'claude-haiku-4-5-20251001',
      maxOutput: 64_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '1h': 2,
                '5m': 1.25,
              },
              pricingParams: ['ttl'],
            },
            name: 'textInput_cacheWrite',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-10-16',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude Opus 4.1 is Anthropic’s newest and most powerful model for highly complex tasks, excelling in performance, intelligence, fluency, and comprehension.',
      displayName: 'Claude Opus 4.1',
      functionCall: true,
      id: 'claude-opus-4-1-20250805',
      maxOutput: 32_000,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 1.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 15,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '1h': 30,
                '5m': 18.75,
              },
              pricingParams: ['ttl'],
            },
            name: 'textInput_cacheWrite',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-08-05',
      search: true,
      vision: true,
    },
  ],
  checkModel: 'claude-3-haiku-20240307',
  description:
    'Anthropic 是一家专注于人工智能研究和开发的公司，提供了一系列先进的语言模型，如 Claude 3.5 Sonnet、Claude 3 Sonnet、Claude 3 Opus 和 Claude 3 Haiku。这些模型在智能、速度和成本之间取得了理想的平衡，适用于从企业级工作负载到快速响应的各种应用场景。Claude 3.5 Sonnet 作为其最新模型，在多项评估中表现优异，同时保持了较高的性价比。',
  enabled: true,
  id: 'anthropic',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://docs.anthropic.com/en/docs/about-claude/models#model-names',
  name: 'Anthropic',
  proxyUrl: {
    placeholder: 'https://api.anthropic.com',
  },
  settings: {
    proxyUrl: {
      placeholder: 'https://api.anthropic.com',
    },
    responseAnimation: 'smooth',
    sdkType: 'anthropic',
    showModelFetcher: true,
  },
  url: 'https://anthropic.com',
};

export default Anthropic;
