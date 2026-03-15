import { ModelProviderCard } from '@/types/llm';

// ref: https://platform.minimaxi.com/document/Models
const Minimax: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 204_800,
      description:
        'Top-tier performance and ultimate cost-effectiveness, easily handling complex tasks (approx. 60 tps).',
      displayName: 'MiniMax M2.5',
      enabled: true,
      functionCall: true,
      id: 'MiniMax-M2.5',
      maxOutput: 131_072,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.21,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheWrite',
            rate: 2.625,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 2.1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 8.4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-02-12',
    },
    {
      contextWindowTokens: 204_800,
      description: 'M2.5 Lightning: Same performance, faster and more agile (approx. 100 tps).',
      displayName: 'MiniMax M2.5 Lightning',
      functionCall: true,
      id: 'MiniMax-M2.5-Lightning',
      maxOutput: 131_072,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.21,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheWrite',
            rate: 2.625,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 2.1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 16.8,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-02-12',
    },
    {
      contextWindowTokens: 204_800,
      description:
        'Powerful multilingual programming capabilities, comprehensively upgraded programming experience',
      displayName: 'MiniMax M2.1',
      functionCall: true,
      id: 'MiniMax-M2.1',
      maxOutput: 131_072,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.21,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheWrite',
            rate: 2.625,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 2.1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 8.4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-12-23',
    },
    {
      contextWindowTokens: 204_800,
      description:
        'Powerful multilingual programming capabilities, comprehensively upgraded programming experience. Faster and more efficient.',
      displayName: 'MiniMax M2.1 Lightning',
      functionCall: true,
      id: 'MiniMax-M2.1-Lightning',
      maxOutput: 131_072,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.21,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheWrite',
            rate: 2.625,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 2.1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 16.8,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-12-23',
    },
    {
      contextWindowTokens: 204_800,
      description: 'Built specifically for efficient coding and Agent workflows',
      displayName: 'MiniMax M2',
      functionCall: true,
      id: 'MiniMax-M2',
      maxOutput: 131_072,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.21,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheWrite',
            rate: 2.625,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 2.1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 8.4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-10-27',
    },
    {
      contextWindowTokens: 204_800,
      description:
        'Built for efficient coding and agent workflows, with higher concurrency for commercial use.',
      displayName: 'MiniMax M2 Stable',
      functionCall: true,
      id: 'MiniMax-M2-Stable',
      maxOutput: 131_072,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.21,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheWrite',
            rate: 2.625,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 2.1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 8.4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-10-27',
    },
    {
      contextWindowTokens: 1_000_192,
      description:
        'A new in-house reasoning model with 80K chain-of-thought and 1M input, delivering performance comparable to top global models.',
      displayName: 'MiniMax M1',
      functionCall: true,
      id: 'MiniMax-M1',
      maxOutput: 40_000,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 1.2,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 16,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-06-16',
    },
    {
      contextWindowTokens: 1_000_192,
      description:
        'MiniMax-01 introduces large-scale linear attention beyond classic Transformers, with 456B parameters and 45.9B activated per pass. It achieves top-tier performance and supports up to 4M tokens of context (32× GPT-4o, 20× Claude-3.5-Sonnet).',
      displayName: 'MiniMax Text 01',
      functionCall: true,
      id: 'MiniMax-Text-01',
      maxOutput: 40_000,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 8,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-01-15',
      vision: true,
    },
  ],
  checkModel: 'MiniMax-M2',
  description:
    'MiniMax 是 2021 年成立的通用人工智能科技公司，致力于与用户共创智能。MiniMax 自主研发了不同模态的通用大模型，其中包括万亿参数的 MoE 文本大模型、语音大模型以及图像大模型。并推出了海螺 AI 等应用。',
  id: 'minimax',
  modelsUrl: 'https://platform.minimaxi.com/document/Models',
  name: 'Minimax',
  settings: {
    disableBrowserRequest: true, // CORS error
    proxyUrl: {
      placeholder: 'https://api.minimax.chat/v1',
    },
    responseAnimation: {
      speed: 2,
      text: 'smooth',
    },
    sdkType: 'openai',
  },
  url: 'https://www.minimaxi.com',
};

export default Minimax;
