import { ModelProviderCard } from '@/types/llm';

// ref: https://ai.google.dev/gemini-api/docs/models/gemini
const Google: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 1_048_576 + 65_536,
      description:
        'Gemini 2.5 Pro Experimental 是 Google 最先进的思维模型，能够对代码、数学和STEM领域的复杂问题进行推理，以及使用长上下文分析大型数据集、代码库和文档。',
      displayName: 'Gemini 2.5 Pro Experimental 03-25',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.5-pro-exp-03-25',
      maxOutput: 65_536,
      releasedAt: '2025-03-25',
      vision: true,
    },
    {
      contextWindowTokens: 2_097_152 + 8192,
      description:
        'Gemini 2.0 Pro Experimental 是 Google 最新的实验性多模态AI模型，与历史版本相比有一定的质量提升，特别是对于世界知识、代码和长上下文。',
      displayName: 'Gemini 2.0 Pro Experimental 02-05',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.0-pro-exp-02-05',
      maxOutput: 8192,
      releasedAt: '2025-02-05',
      vision: true,
    },
    {
      contextWindowTokens: 1_048_576 + 8192,
      description:
        'Gemini 2.0 Flash 提供下一代功能和改进，包括卓越的速度、原生工具使用、多模态生成和1M令牌上下文窗口。',
      displayName: 'Gemini 2.0 Flash',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.0-flash',
      maxOutput: 8192,
      releasedAt: '2025-02-05',
      vision: true,
    },
    {
      contextWindowTokens: 1_048_576 + 8192,
      description:
        'Gemini 2.0 Flash 提供下一代功能和改进，包括卓越的速度、原生工具使用、多模态生成和1M令牌上下文窗口。',
      displayName: 'Gemini 2.0 Flash 001',
      functionCall: true,
      id: 'gemini-2.0-flash-001',
      maxOutput: 8192,
      releasedAt: '2025-02-05',
      vision: true,
    },
    {
      contextWindowTokens: 1_048_576 + 8192,
      description: '一个 Gemini 2.0 Flash 模型，针对成本效益和低延迟等目标进行了优化。',
      displayName: 'Gemini 2.0 Flash-Lite Preview 02-05',
      id: 'gemini-2.0-flash-lite-preview-02-05',
      maxOutput: 8192,
      releasedAt: '2025-02-05',
      vision: true,
    },
    {
      contextWindowTokens: 1_048_576 + 65_536,
      description:
        'Gemini 2.0 Flash Thinking Exp 是 Google 的实验性多模态推理AI模型，能对复杂问题进行推理，拥有新的思维能力。',
      displayName: 'Gemini 2.0 Flash Thinking Experimental 01-21',
      enabled: true,
      id: 'gemini-2.0-flash-thinking-exp-01-21',
      maxOutput: 65_536,
      releasedAt: '2025-01-21',
      vision: true,
    },
    {
      contextWindowTokens: 40_959,
      description:
        'LearnLM 是一个实验性的、特定于任务的语言模型，经过训练以符合学习科学原则，可在教学和学习场景中遵循系统指令，充当专家导师等。',
      displayName: 'LearnLM 1.5 Pro Experimental',
      functionCall: true,
      id: 'learnlm-1.5-pro-experimental',
      maxOutput: 8192,
      releasedAt: '2024-11-19',
      vision: true,
    },
    {
      contextWindowTokens: 1_008_192,
      description: 'Gemini 1.5 Flash 002 是一款高效的多模态模型，支持广泛应用的扩展。',
      displayName: 'Gemini 1.5 Flash 002',
      functionCall: true,
      id: 'gemini-1.5-flash-002',
      maxOutput: 8192,
      releasedAt: '2024-09-25',
      vision: true,
    },
    {
      contextWindowTokens: 1_008_192,
      description: 'Gemini 1.5 Flash 001 是一款高效的多模态模型，支持广泛应用的扩展。',
      displayName: 'Gemini 1.5 Flash 001',
      functionCall: true,
      id: 'gemini-1.5-flash-001',
      maxOutput: 8192,
      vision: true,
    },
    {
      contextWindowTokens: 2_008_192,
      description:
        'Gemini 1.5 Pro 002 是最新的生产就绪模型，提供更高质量的输出，特别在数学、长上下文和视觉任务方面有显著提升。',
      displayName: 'Gemini 1.5 Pro 002',
      functionCall: true,
      id: 'gemini-1.5-pro-002',
      maxOutput: 8192,
      releasedAt: '2024-09-24',
      vision: true,
    },
    {
      contextWindowTokens: 2_008_192,
      description: 'Gemini 1.5 Pro 001 是可扩展的多模态AI解决方案，支持广泛的复杂任务。',
      displayName: 'Gemini 1.5 Pro 001',
      functionCall: true,
      id: 'gemini-1.5-pro-001',
      maxOutput: 8192,
      releasedAt: '2024-02-15',
      vision: true,
    },
    {
      contextWindowTokens: 1_008_192,
      description: 'Gemini 1.5 Flash 8B 是一款高效的多模态模型，支持广泛应用的扩展。',
      displayName: 'Gemini 1.5 Flash 8B',
      functionCall: true,
      id: 'gemini-1.5-flash-8b',
      maxOutput: 8192,
      releasedAt: '2024-10-03',
      vision: true,
    },
    {
      contextWindowTokens: 1_114_112,
      description: 'Latest release of Gemini Pro',
      displayName: 'Gemini Pro Latest',
      functionCall: true,
      id: 'gemini-pro-latest',
      maxOutput: 65_536,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            strategy: 'tiered',
            tiers: [
              {
                rate: 0.31,
                upTo: 200_000,
              },
              {
                rate: 0.625,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            strategy: 'tiered',
            tiers: [
              {
                rate: 1.25,
                upTo: 200_000,
              },
              {
                rate: 2.5,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            strategy: 'tiered',
            tiers: [
              {
                rate: 10,
                upTo: 200_000,
              },
              {
                rate: 15,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      search: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_114_112,
      description: 'Latest release of Gemini Flash',
      displayName: 'Gemini Flash Latest',
      functionCall: true,
      id: 'gemini-flash-latest',
      maxOutput: 65_536,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.075,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0.3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 2.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      search: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_114_112,
      description: 'Latest release of Gemini Flash-Lite',
      displayName: 'Gemini Flash-Lite Latest',
      functionCall: true,
      id: 'gemini-flash-lite-latest',
      maxOutput: 65_536,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.025,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0.1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0.4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      search: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 163_840,
      description:
        "Gemini 3.1 Flash Image (Nano Banana 2) is Google's fastest native image generation model with thinking support, conversational image generation and editing.",
      displayName: 'Nano Banana 2',
      enabled: true,
      id: 'gemini-3.1-flash-image-preview',
      imageOutput: true,
      maxOutput: 32_768,
      pricing: {
        units: [
          {
            name: 'imageOutput',
            rate: 60,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 1.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-02-26',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_114_112,
      description:
        'Gemini 3.1 Pro Preview improves on Gemini 3 Pro with enhanced reasoning capabilities and adds medium thinking level support.',
      displayName: 'Gemini 3.1 Pro Preview',
      enabled: true,
      functionCall: true,
      id: 'gemini-3.1-pro-preview',
      maxOutput: 65_536,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            strategy: 'tiered',
            tiers: [
              {
                rate: 0.2,
                upTo: 200_000,
              },
              {
                rate: 0.4,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            strategy: 'tiered',
            tiers: [
              {
                rate: 2,
                upTo: 200_000,
              },
              {
                rate: 4,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            strategy: 'tiered',
            tiers: [
              {
                rate: 12,
                upTo: 200_000,
              },
              {
                rate: 18,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '1h': 4.5,
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
      releasedAt: '2026-02-19',
      search: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_114_112,
      description:
        "Gemini 3.1 Flash-Lite Preview is Google's most cost-efficient multimodal model, optimized for high-volume agentic tasks, translation, and data processing.",
      displayName: 'Gemini 3.1 Flash-Lite Preview',
      enabled: true,
      functionCall: true,
      id: 'gemini-3.1-flash-lite-preview',
      maxOutput: 65_536,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.025,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 1.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-03-04',
      search: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_114_112,
      description:
        'Gemini 3 Flash is the smartest model built for speed, combining cutting-edge intelligence with excellent search grounding.',
      displayName: 'Gemini 3 Flash Preview',
      enabled: true,
      functionCall: true,
      id: 'gemini-3-flash-preview',
      maxOutput: 65_536,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.05,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '1h': 1,
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
      releasedAt: '2025-12-17',
      search: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 163_840,
      description:
        'Gemini 3 Pro Image (Nano Banana Pro) is Google’s image generation model and also supports multimodal chat.',
      displayName: 'Nano Banana Pro',
      enabled: true,
      id: 'gemini-3-pro-image-preview',
      imageOutput: true,
      maxOutput: 32_768,
      pricing: {
        units: [
          {
            name: 'imageOutput',
            rate: 120,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 2,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 12,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-11-20',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_114_112,
      description:
        'Gemini 2.5 Pro is Google’s most advanced reasoning model, able to reason over code, math, and STEM problems and analyze large datasets, codebases, and documents with long context.',
      displayName: 'Gemini 2.5 Pro',
      functionCall: true,
      id: 'gemini-2.5-pro',
      maxOutput: 65_536,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            strategy: 'tiered',
            tiers: [
              {
                rate: 0.31,
                upTo: 200_000,
              },
              {
                rate: 0.625,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            strategy: 'tiered',
            tiers: [
              {
                rate: 1.25,
                upTo: 200_000,
              },
              {
                rate: 2.5,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            strategy: 'tiered',
            tiers: [
              {
                rate: 10,
                upTo: 200_000,
              },
              {
                rate: 15,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '1h': 4.5,
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
      releasedAt: '2025-06-17',
      search: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_114_112,
      description:
        'Gemini 2.5 Pro Preview is Google’s most advanced reasoning model, able to reason over code, math, and STEM problems and analyze large datasets, codebases, and documents with long context.',
      displayName: 'Gemini 2.5 Pro Preview 06-05',
      functionCall: true,
      id: 'gemini-2.5-pro-preview-06-05',
      maxOutput: 65_536,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            strategy: 'tiered',
            tiers: [
              {
                rate: 0.31,
                upTo: 200_000,
              },
              {
                rate: 0.625,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            strategy: 'tiered',
            tiers: [
              {
                rate: 1.25,
                upTo: 200_000,
              },
              {
                rate: 2.5,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            strategy: 'tiered',
            tiers: [
              {
                rate: 10,
                upTo: 200_000,
              },
              {
                rate: 15,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-06-05',
      search: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_114_112,
      description:
        'Gemini 2.5 Pro Preview is Google’s most advanced reasoning model, able to reason over code, math, and STEM problems and analyze large datasets, codebases, and documents with long context.',
      displayName: 'Gemini 2.5 Pro Preview 05-06',
      functionCall: true,
      id: 'gemini-2.5-pro-preview-05-06',
      maxOutput: 65_536,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            strategy: 'tiered',
            tiers: [
              {
                rate: 0.31,
                upTo: 200_000,
              },
              {
                rate: 0.625,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            strategy: 'tiered',
            tiers: [
              {
                rate: 1.25,
                upTo: 200_000,
              },
              {
                rate: 2.5,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            strategy: 'tiered',
            tiers: [
              {
                rate: 10,
                upTo: 200_000,
              },
              {
                rate: 15,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-05-06',
      search: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_114_112,
      description: 'Gemini 2.5 Flash is Google’s best-value model with full capabilities.',
      displayName: 'Gemini 2.5 Flash',
      functionCall: true,
      id: 'gemini-2.5-flash',
      maxOutput: 65_536,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.075,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0.3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 2.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-06-17',
      search: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 98_304,
      description:
        'Nano Banana is Google’s newest, fastest, and most efficient native multimodal model, enabling conversational image generation and editing.',
      displayName: 'Nano Banana',
      id: 'gemini-2.5-flash-image',
      imageOutput: true,
      maxOutput: 32_768,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 0.3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'imageInput',
            rate: 0.3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 2.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'imageOutput',
            rate: 30,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-08-26',
      vision: true,
    },
    {
      contextWindowTokens: 1_114_112,
      description:
        'Gemini 2.5 Flash-Lite is Google’s smallest, best-value model, designed for large-scale use.',
      displayName: 'Gemini 2.5 Flash-Lite',
      functionCall: true,
      id: 'gemini-2.5-flash-lite',
      maxOutput: 65_536,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.025,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0.1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0.4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-07-22',
      search: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_114_112,
      description: 'Preview release (September 25th, 2025) of Gemini 2.5 Flash-Lite',
      displayName: 'Gemini 2.5 Flash-Lite Preview Sep 2025',
      functionCall: true,
      id: 'gemini-2.5-flash-lite-preview-09-2025',
      maxOutput: 65_536,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.025,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0.1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0.4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-09-25',
      search: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_056_768,
      description: 'Gemini 2.0 Flash experimental model with image generation support.',
      displayName: 'Gemini 2.0 Flash (Image Generation) Experimental',
      id: 'gemini-2.0-flash-exp-image-generation',
      imageOutput: true,
      maxOutput: 8192,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-03-14',
      vision: true,
    },
    {
      contextWindowTokens: 1_056_768,
      description: 'A Gemini 2.0 Flash variant optimized for cost efficiency and low latency.',
      displayName: 'Gemini 2.0 Flash-Lite',
      id: 'gemini-2.0-flash-lite',
      maxOutput: 8192,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 0.075,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0.3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-02-05',
      vision: true,
    },
    {
      contextWindowTokens: 1_056_768,
      description: 'A Gemini 2.0 Flash variant optimized for cost efficiency and low latency.',
      displayName: 'Gemini 2.0 Flash-Lite 001',
      id: 'gemini-2.0-flash-lite-001',
      maxOutput: 8192,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 0.075,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0.3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-02-05',
      vision: true,
    },
    {
      contextWindowTokens: 1_008_192,
      description:
        'Gemini 1.5 Flash 8B is an efficient multimodal model built for broad deployment.',
      displayName: 'Gemini 1.5 Flash 8B',
      functionCall: true,
      id: 'gemini-1.5-flash-8b-latest',
      maxOutput: 8192,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.01,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0.0375,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0.15,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2024-10-03',
      vision: true,
    },
    {
      contextWindowTokens: 40_960,
      displayName: 'Gemma 3 1B',
      id: 'gemma-3-1b-it',
      maxOutput: 8192,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 40_960,
      displayName: 'Gemma 3 4B',
      id: 'gemma-3-4b-it',
      maxOutput: 8192,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 40_960,
      displayName: 'Gemma 3 12B',
      id: 'gemma-3-12b-it',
      maxOutput: 8192,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 139_264,
      displayName: 'Gemma 3 27B',
      id: 'gemma-3-27b-it',
      maxOutput: 8192,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 10_240,
      displayName: 'Gemma 3n E2B',
      id: 'gemma-3n-e2b-it',
      maxOutput: 2048,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 10_240,
      displayName: 'Gemma 3n E4B',
      id: 'gemma-3n-e4b-it',
      maxOutput: 2048,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
    },
  ],
  checkModel: 'gemini-2.0-flash',
  description:
    'Google 的 Gemini 系列是其最先进、通用的 AI模型，由 Google DeepMind 打造，专为多模态设计，支持文本、代码、图像、音频和视频的无缝理解与处理。适用于从数据中心到移动设备的多种环境，极大提升了AI模型的效率与应用广泛性。',
  enabled: true,
  id: 'google',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://ai.google.dev/gemini-api/docs/models/gemini',
  name: 'Google',
  proxyUrl: {
    placeholder: 'https://generativelanguage.googleapis.com',
  },
  settings: {
    proxyUrl: {
      placeholder: 'https://generativelanguage.googleapis.com',
    },
    responseAnimation: {
      speed: 50,
      text: 'smooth',
    },
    sdkType: 'google',
    showModelFetcher: true,
  },
  url: 'https://ai.google.dev',
};

export default Google;
