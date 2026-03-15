import { ModelProviderCard } from '@/types/llm';

// ref: https://platform.moonshot.cn/docs/intro#模型列表
const Moonshot: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 8192,
      description:
        'Moonshot V1 8K 专为生成短文本任务设计，具有高效的处理性能，能够处理8,192个tokens，非常适合简短对话、速记和快速内容生成。',
      displayName: 'Moonshot V1 8K',
      enabled: true,
      functionCall: true,
      id: 'moonshot-v1-8k',
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Moonshot V1 32K 提供中等长度的上下文处理能力，能够处理32,768个tokens，特别适合生成各种长文档和复杂对话，应用于内容创作、报告生成和对话系统等领域。',
      displayName: 'Moonshot V1 32K',
      enabled: true,
      functionCall: true,
      id: 'moonshot-v1-32k',
    },
    {
      contextWindowTokens: 128_000,
      description:
        'Moonshot V1 128K 是一款拥有超长上下文处理能力的模型，适用于生成超长文本，满足复杂的生成任务需求，能够处理多达128,000个tokens的内容，非常适合科研、学术和大型文档生成等应用场景。',
      displayName: 'Moonshot V1 128K',
      enabled: true,
      functionCall: true,
      id: 'moonshot-v1-128k',
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Kimi K2.5 is Kimi\'s most versatile model to date, featuring a native multimodal architecture that supports both vision and text inputs, "thinking" and "non-thinking" modes, and both conversational and agent tasks.',
      displayName: 'Kimi K2.5',
      enabled: true,
      functionCall: true,
      id: 'kimi-k2.5',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.7,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 21,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-01-27',
      vision: true,
    },
    {
      contextWindowTokens: 262_144,
      description:
        'K2 long-thinking model with 256k context, supporting multi-step tool use and reasoning for complex problems.',
      displayName: 'Kimi K2 Thinking',
      functionCall: true,
      id: 'kimi-k2-thinking',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 4,
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
      releasedAt: '2025-11-06',
    },
    {
      contextWindowTokens: 262_144,
      description:
        'High-speed K2 long-thinking variant with 256k context, strong deep reasoning, and 60–100 tokens/sec output.',
      displayName: 'Kimi K2 Thinking Turbo',
      functionCall: true,
      id: 'kimi-k2-thinking-turbo',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 8,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 58,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-11-06',
    },
    {
      contextWindowTokens: 262_144,
      description:
        'kimi-k2-0905-preview offers a 256k context window, stronger agentic coding, better front-end code quality, and improved context understanding.',
      displayName: 'Kimi K2 0905',
      functionCall: true,
      id: 'kimi-k2-0905-preview',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 4,
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
      releasedAt: '2025-09-05',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'kimi-k2 is an MoE foundation model with strong coding and agent capabilities (1T total params, 32B active), outperforming other mainstream open models across reasoning, programming, math, and agent benchmarks.',
      displayName: 'Kimi K2 0711',
      functionCall: true,
      id: 'kimi-k2-0711-preview',
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 4,
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
      releasedAt: '2025-07-11',
    },
    {
      contextWindowTokens: 262_144,
      description:
        'kimi-k2 is an MoE foundation model with strong coding and agent capabilities (1T total params, 32B active), outperforming other mainstream open models across reasoning, programming, math, and agent benchmarks.',
      displayName: 'Kimi K2 0905 Turbo',
      functionCall: true,
      id: 'kimi-k2-turbo-preview',
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 8,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 58,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-09-05',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Kimi Latest uses the newest Kimi model and may include experimental features. It supports image understanding and automatically selects 8k/32k/128k billing models based on context length.',
      displayName: 'Kimi Latest',
      enabled: true,
      functionCall: true,
      id: 'kimi-latest',
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.008_192]': 2,
                '[0.008_193, 0.032_768]': 5,
                '[0.032_769, 0.131_072]': 10,
              },
              pricingParams: ['textInput'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.008_192]': 10,
                '[0.008_193, 0.032_768]': 20,
                '[0.032_769, 0.131_072]': 30,
              },
              pricingParams: ['textInput'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-02-17',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Moonshot V1 Auto selects the appropriate model based on current context token usage.',
      displayName: 'Moonshot V1 Auto',
      functionCall: true,
      id: 'moonshot-v1-auto',
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 30,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 8192,
      description:
        'Kimi vision models (including moonshot-v1-8k-vision-preview/moonshot-v1-32k-vision-preview/moonshot-v1-128k-vision-preview) can understand image content such as text, colors, and object shapes.',
      displayName: 'Moonshot V1 8K Vision Preview',
      functionCall: true,
      id: 'moonshot-v1-8k-vision-preview',
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 2,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-01-14',
      vision: true,
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Kimi vision models (including moonshot-v1-8k-vision-preview/moonshot-v1-32k-vision-preview/moonshot-v1-128k-vision-preview) can understand image content such as text, colors, and object shapes.',
      displayName: 'Moonshot V1 32K Vision Preview',
      functionCall: true,
      id: 'moonshot-v1-32k-vision-preview',
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 20,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-01-14',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Kimi vision models (including moonshot-v1-8k-vision-preview/moonshot-v1-32k-vision-preview/moonshot-v1-128k-vision-preview) can understand image content such as text, colors, and object shapes.',
      displayName: 'Moonshot V1 128K Vision Preview',
      functionCall: true,
      id: 'moonshot-v1-128k-vision-preview',
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 30,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-01-14',
      vision: true,
    },
  ],
  checkModel: 'kimi-latest',
  description:
    'Moonshot 是由北京月之暗面科技有限公司推出的开源平台，提供多种自然语言处理模型，应用领域广泛，包括但不限于内容创作、学术研究、智能推荐、医疗诊断等，支持长文本处理和复杂生成任务。',
  id: 'moonshot',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://platform.moonshot.cn/docs/intro',
  name: 'Moonshot',
  settings: {
    disableBrowserRequest: true, // CORS error
    proxyUrl: {
      placeholder: 'https://api.moonshot.cn/v1',
    },
    responseAnimation: {
      speed: 2,
      text: 'smooth',
    },
    sdkType: 'openai',
    showModelFetcher: true,
  },
  url: 'https://www.moonshot.cn',
};

export default Moonshot;
