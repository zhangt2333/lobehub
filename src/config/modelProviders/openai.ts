import { ModelProviderCard } from '@/types/llm';

// ref: https://platform.openai.com/docs/deprecations
const OpenAI: ModelProviderCard = {
  apiKeyUrl: 'https://platform.openai.com/api-keys?utm_source=lobehub',
  chatModels: [
    {
      contextWindowTokens: 400_000,
      description:
        '更快、更经济高效的 GPT-5 版本，适用于明确定义的任务。在保持高质量输出的同时，提供更快的响应速度。',
      displayName: 'GPT-5 mini',
      enabled: false,
      functionCall: true,
      id: 'gpt-5-mini',
      maxOutput: 128_000,
      pricing: {
        units: [
          { name: 'textInput', rate: 0.25, strategy: 'fixed', unit: 'millionTokens' },
          { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
          { name: 'textInput_cacheRead', rate: 0.03, strategy: 'fixed', unit: 'millionTokens' },
        ],
      },
      releasedAt: '2025-08-07',
      vision: true,
    },
    {
      contextWindowTokens: 1_047_576,
      description:
        'GPT-4.1 mini 提供了智能、速度和成本之间的平衡，使其成为许多用例中有吸引力的模型。',
      displayName: 'GPT-4.1 mini',
      functionCall: true,
      id: 'gpt-4.1-mini',
      maxOutput: 32_768,
      releasedAt: '2025-04-14',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'o1-mini是一款针对编程、数学和科学应用场景而设计的快速、经济高效的推理模型。该模型具有128K上下文和2023年10月的知识截止日期。',
      displayName: 'OpenAI o1-mini',
      enabled: false,
      id: 'o1-mini',
      maxOutput: 65_536,
      releasedAt: '2024-09-12',
    },
    {
      contextWindowTokens: 200_000,
      description:
        'o1是OpenAI新的推理模型，支持图文输入并输出文本，适用于需要广泛通用知识的复杂任务。该模型具有200K上下文和2023年10月的知识截止日期。',
      displayName: 'OpenAI o1',
      enabled: false,
      id: 'o1-2024-12-17',
      maxOutput: 100_000,
      releasedAt: '2024-12-17',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'o1是OpenAI新的推理模型，适用于需要广泛通用知识的复杂任务。该模型具有128K上下文和2023年10月的知识截止日期。',
      displayName: 'OpenAI o1-preview',
      enabled: false,
      id: 'o1-preview',
      maxOutput: 32_768,
      releasedAt: '2024-09-12',
    },
    {
      contextWindowTokens: 128_000,
      description:
        'GPT-4o mini是OpenAI在GPT-4 Omni之后推出的最新模型，支持图文输入并输出文本。作为他们最先进的小型模型，它比其他近期的前沿模型便宜很多，并且比GPT-3.5 Turbo便宜超过60%。它保持了最先进的智能，同时具有显著的性价比。GPT-4o mini在MMLU测试中获得了 82% 的得分，目前在聊天偏好上排名高于 GPT-4。',
      displayName: 'GPT-4o mini',
      enabled: false,
      functionCall: true,
      id: 'gpt-4o-mini',
      maxOutput: 16_385,
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'GPT-4o mini search preview 是一个专门为搜索功能优化的预览版本，具有增强的网络搜索能力和实时信息检索功能。',
      displayName: 'GPT-4o mini Search Preview',
      functionCall: true,
      id: 'gpt-4o-mini-search-preview',
      maxOutput: 16_384,
      releasedAt: '2024-12-01',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'GPT-4o 1120',
      enabled: false,
      functionCall: true,
      id: 'gpt-4o-2024-11-20',
      releasedAt: '2024-11-20',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'GPT-4o',
      enabled: false,
      functionCall: true,
      id: 'gpt-4o',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'GPT-4o 0806',
      functionCall: true,
      id: 'gpt-4o-2024-08-06',
      releasedAt: '2024-08-06',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'GPT-4o 0513',
      functionCall: true,
      id: 'gpt-4o-2024-05-13',
      releasedAt: '2024-05-13',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'ChatGPT-4o',
      enabled: false,
      id: 'chatgpt-4o-latest',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo',
      functionCall: true,
      id: 'gpt-4-turbo',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo Vision 0409',
      functionCall: true,
      id: 'gpt-4-turbo-2024-04-09',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo Preview',
      functionCall: true,
      id: 'gpt-4-turbo-preview',
    },
    {
      contextWindowTokens: 128_000,
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo Preview 0125',
      functionCall: true,
      id: 'gpt-4-0125-preview',
    },
    {
      contextWindowTokens: 128_000,
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo Preview 1106',
      functionCall: true,
      id: 'gpt-4-1106-preview',
    },
    {
      contextWindowTokens: 8192,
      description:
        'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
      displayName: 'GPT-4',
      functionCall: true,
      id: 'gpt-4',
    },
    {
      contextWindowTokens: 8192,
      description:
        'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
      displayName: 'GPT-4 0613',
      functionCall: true,
      id: 'gpt-4-0613',
    },
    {
      contextWindowTokens: 32_768,
      description:
        'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
      // Will be discontinued on June 6, 2025
      displayName: 'GPT-4 32K',
      functionCall: true,
      id: 'gpt-4-32k',
    },
    {
      contextWindowTokens: 32_768,
      // Will be discontinued on June 6, 2025
      description:
        'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
      displayName: 'GPT-4 32K 0613',
      functionCall: true,
      id: 'gpt-4-32k-0613',
    },
    {
      contextWindowTokens: 16_385,
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo',
      functionCall: true,
      id: 'gpt-3.5-turbo',
    },
    {
      contextWindowTokens: 16_385,
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo 0125',
      functionCall: true,
      id: 'gpt-3.5-turbo-0125',
    },
    {
      contextWindowTokens: 16_385,
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo 1106',
      functionCall: true,
      id: 'gpt-3.5-turbo-1106',
    },
    {
      contextWindowTokens: 4096,
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo Instruct',
      id: 'gpt-3.5-turbo-instruct',
    },
    {
      contextWindowTokens: 1_050_000,
      description:
        'GPT-5.4 is the frontier model for complex professional work with highest reasoning capability.',
      displayName: 'GPT-5.4',
      enabled: true,
      functionCall: true,
      id: 'gpt-5.4',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.272]': 2.5,
                '[0.272, infinity]': 5,
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
                '[0, 0.272]': 0.25,
                '[0.272, infinity]': 0.5,
              },
              pricingParams: ['textInput'],
            },
            name: 'textInput_cacheRead',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.272]': 15,
                '[0.272, infinity]': 22.5,
              },
              pricingParams: ['textInput'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-03-05',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_050_000,
      description:
        'GPT-5.4 pro uses more compute to think harder and provide consistently better answers, available in the Responses API only.',
      displayName: 'GPT-5.4 pro',
      functionCall: true,
      id: 'gpt-5.4-pro',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.272]': 30,
                '[0.272, infinity]': 60,
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
                '[0, 0.272]': 180,
                '[0.272, infinity]': 270,
              },
              pricingParams: ['textInput'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-03-05',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'GPT-5.3 Chat is the latest ChatGPT model used in ChatGPT with improved conversation experiences.',
      displayName: 'GPT-5.3 Chat',
      enabled: true,
      functionCall: true,
      id: 'gpt-5.3-chat-latest',
      maxOutput: 16_384,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.175,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 14,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2026-03-04',
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'GPT-5.3-Codex is the most capable agentic coding model to date, optimized for agentic coding tasks in Codex or similar environments.',
      displayName: 'GPT-5.3 Codex',
      functionCall: true,
      id: 'gpt-5.3-codex',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.175,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 14,
            strategy: 'fixed',
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
      contextWindowTokens: 400_000,
      description:
        'GPT-5.2 is a flagship model for coding and agentic workflows with stronger reasoning and long-context performance.',
      displayName: 'GPT-5.2',
      functionCall: true,
      id: 'gpt-5.2',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.175,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 14,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-12-11',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'GPT-5.2-Codex is an upgraded GPT-5.2 variant optimized for long-horizon, agentic coding tasks.',
      displayName: 'GPT-5.2 Codex',
      functionCall: true,
      id: 'gpt-5.2-codex',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.175,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 14,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-12-18',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'GPT-5.2 pro: a smarter, more precise GPT-5.2 variant (Responses API only), suited for hard problems and longer multi-turn reasoning.',
      displayName: 'GPT-5.2 pro',
      functionCall: true,
      id: 'gpt-5.2-pro',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 21,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 168,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-12-11',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'GPT-5.2 Chat is the ChatGPT variant (chat-latest) for the latest conversation improvements.',
      displayName: 'GPT-5.2 Chat',
      functionCall: true,
      id: 'gpt-5.2-chat-latest',
      maxOutput: 16_384,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.175,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 14,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-12-11',
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'GPT-5.1 — a flagship model optimized for coding and agent tasks with configurable reasoning effort and longer context.',
      displayName: 'GPT-5.1',
      functionCall: true,
      id: 'gpt-5.1',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.125,
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
      reasoning: true,
      releasedAt: '2025-11-13',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description: 'GPT-5.1 Chat: the ChatGPT variant of GPT-5.1, built for chat scenarios.',
      displayName: 'GPT-5.1 Chat',
      functionCall: true,
      id: 'gpt-5.1-chat-latest',
      maxOutput: 16_384,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.125,
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
      releasedAt: '2025-11-13',
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        "GPT-5.1 Codex Max: OpenAI's most intelligent coding model, optimized for long-horizon agentic coding tasks, supports reasoning tokens.",
      displayName: 'GPT-5.1 Codex Max',
      functionCall: true,
      id: 'gpt-5.1-codex-max',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.125,
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
      reasoning: true,
      releasedAt: '2025-12-04',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'GPT-5.1 Codex: a GPT-5.1 variant optimized for agentic coding tasks, for complex code/agent workflows in the Responses API.',
      displayName: 'GPT-5.1 Codex',
      functionCall: true,
      id: 'gpt-5.1-codex',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.125,
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
      reasoning: true,
      releasedAt: '2025-11-13',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'GPT-5.1 Codex mini: a smaller, lower-cost Codex variant optimized for agentic coding tasks.',
      displayName: 'GPT-5.1 Codex mini',
      functionCall: true,
      id: 'gpt-5.1-codex-mini',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 0.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.025,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 2,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-11-13',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'GPT-5 pro uses more compute to think deeper and consistently deliver better answers.',
      displayName: 'GPT-5 pro',
      functionCall: true,
      id: 'gpt-5-pro',
      maxOutput: 272_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 15,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 120,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-10-06',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'GPT-5 Codex is a GPT-5 variant optimized for agentic coding tasks in Codex-like environments.',
      displayName: 'GPT-5 Codex',
      functionCall: true,
      id: 'gpt-5-codex',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.125,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2024-09-15',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'The best model for cross-domain coding and agent tasks. GPT-5 leaps in accuracy, speed, reasoning, context awareness, structured thinking, and problem solving.',
      displayName: 'GPT-5',
      functionCall: true,
      id: 'gpt-5',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.125,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-08-07',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'The fastest and most cost-effective GPT-5 variant, ideal for latency- and cost-sensitive applications.',
      displayName: 'GPT-5 nano',
      functionCall: true,
      id: 'gpt-5-nano',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 0.05,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0.4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.005,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-08-07',
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'The GPT-5 model used in ChatGPT, combining strong understanding and generation for conversational applications.',
      displayName: 'GPT-5 Chat',
      id: 'gpt-5-chat-latest',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.125,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-08-07',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'o4-mini is the latest small o-series model, optimized for fast, effective reasoning with high efficiency in coding and vision tasks.',
      displayName: 'o4-mini',
      functionCall: true,
      id: 'o4-mini',
      maxOutput: 100_000,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.275,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 1.1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 4.4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-04-17',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'o4-mini-deep-research is a faster, more affordable deep research model for complex multi-step research. It can search the web and also access your data via MCP connectors.',
      displayName: 'o4-mini Deep Research',
      functionCall: true,
      id: 'o4-mini-deep-research',
      maxOutput: 100_000,
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
            rate: 2,
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
      reasoning: true,
      releasedAt: '2025-06-26',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'o3-pro uses more compute to think deeper and consistently deliver better answers; available only via the Responses API.',
      displayName: 'o3-pro',
      functionCall: true,
      id: 'o3-pro',
      maxOutput: 100_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 20,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 80,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-06-10',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'o3 is a powerful all-round model that sets a new bar for math, science, programming, and visual reasoning. It excels at technical writing and instruction following and can analyze text, code, and images for multi-step problems.',
      displayName: 'o3',
      functionCall: true,
      id: 'o3',
      maxOutput: 100_000,
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
            rate: 2,
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
      reasoning: true,
      releasedAt: '2025-04-16',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'o3-deep-research is our most advanced deep research model for complex multi-step tasks. It can search the web and access your data via MCP connectors.',
      displayName: 'o3 Deep Research',
      functionCall: true,
      id: 'o3-deep-research',
      maxOutput: 100_000,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 2.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 40,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-06-26',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'o3-mini is our latest small reasoning model, delivering higher intelligence at the same cost and latency targets as o1-mini.',
      displayName: 'o3-mini',
      functionCall: true,
      id: 'o3-mini',
      maxOutput: 100_000,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.55,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 1.1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 4.4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-01-31',
    },
    {
      contextWindowTokens: 200_000,
      description:
        'The o1 series is trained with reinforcement learning to think before answering and handle complex reasoning. o1-pro uses more compute for deeper thinking and consistently higher-quality answers.',
      displayName: 'o1-pro',
      functionCall: true,
      id: 'o1-pro',
      maxOutput: 100_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 150,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 600,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-03-19',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'o1 is OpenAI’s new reasoning model with text+image input and text output, suited for complex tasks requiring broad knowledge. It has a 200K context window and an October 2023 knowledge cutoff.',
      displayName: 'o1',
      functionCall: true,
      id: 'o1',
      maxOutput: 100_000,
      pricing: {
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 7.5,
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
            rate: 60,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2024-12-17',
      vision: true,
    },
    {
      contextWindowTokens: 1_047_576,
      description:
        'GPT-4.1 is our flagship model for complex tasks and cross-domain problem solving.',
      displayName: 'GPT-4.1',
      functionCall: true,
      id: 'gpt-4.1',
      maxOutput: 32_768,
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
            rate: 2,
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
      releasedAt: '2025-04-14',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_047_576,
      description: 'GPT-4.1 nano is the fastest and most cost-effective GPT-4.1 model.',
      displayName: 'GPT-4.1 nano',
      functionCall: true,
      id: 'gpt-4.1-nano',
      maxOutput: 32_768,
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
      releasedAt: '2025-04-14',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'GPT-4o Search Preview is trained to understand and execute web search queries via the Chat Completions API. Web search is billed per tool call in addition to token costs.',
      displayName: 'GPT-4o Search Preview',
      id: 'gpt-4o-search-preview',
      maxOutput: 16_384,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 2.5,
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
      releasedAt: '2025-03-11',
      search: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'GPT Audio is a general chat model for audio input/output, supported in the Chat Completions API.',
      displayName: 'GPT Audio',
      functionCall: true,
      id: 'gpt-audio',
      maxOutput: 16_384,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 2.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'audioInput',
            rate: 40,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'audioOutput',
            rate: 80,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-08-28',
    },
    {
      contextWindowTokens: 128_000,
      description: 'GPT-4o Audio Preview model with audio input and output.',
      displayName: 'GPT-4o Audio Preview',
      functionCall: true,
      id: 'gpt-4o-audio-preview',
      maxOutput: 16_384,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 2.5,
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
      releasedAt: '2024-12-17',
    },
    {
      contextWindowTokens: 128_000,
      description: 'GPT-4o mini Audio model with audio input and output.',
      displayName: 'GPT-4o mini Audio',
      functionCall: true,
      id: 'gpt-4o-mini-audio-preview',
      maxOutput: 16_384,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 0.15,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0.6,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2024-12-17',
    },
    {
      contextWindowTokens: 8192,
      description:
        'computer-use-preview is a specialized model for the "computer use tool," trained to understand and execute computer-related tasks.',
      displayName: 'Computer Use Preview',
      functionCall: true,
      id: 'computer-use-preview',
      maxOutput: 1024,
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
            rate: 12,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-03-11',
      vision: true,
    },
    {
      contextWindowTokens: 1_050_000,
      description:
        'GPT-5.4 is the frontier model for complex professional work with highest reasoning capability.',
      displayName: 'GPT-5.4 (CA渠道)',
      enabled: true,
      functionCall: true,
      id: 'gpt-5.4-ca',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.272]': 2.5,
                '[0.272, infinity]': 5,
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
                '[0, 0.272]': 0.25,
                '[0.272, infinity]': 0.5,
              },
              pricingParams: ['textInput'],
            },
            name: 'textInput_cacheRead',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.272]': 15,
                '[0.272, infinity]': 22.5,
              },
              pricingParams: ['textInput'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-03-05',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'GPT-5 Codex is a GPT-5 variant optimized for agentic coding tasks in Codex-like environments.',
      displayName: 'GPT-5 Codex (CA渠道)',
      functionCall: true,
      id: 'gpt-5-codex-ca',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.125,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2024-09-15',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'GPT-5.1 Codex: a GPT-5.1 variant optimized for agentic coding tasks, for complex code/agent workflows in the Responses API.',
      displayName: 'GPT-5.1 Codex (CA渠道)',
      functionCall: true,
      id: 'gpt-5.1-codex-ca',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.125,
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
      reasoning: true,
      releasedAt: '2025-11-13',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'GPT-5.2-Codex is an upgraded GPT-5.2 variant optimized for long-horizon, agentic coding tasks.',
      displayName: 'GPT-5.2 Codex (CA渠道)',
      functionCall: true,
      id: 'gpt-5.2-codex-ca',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.175,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 14,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-12-18',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'GPT-5.2 is a flagship model for coding and agentic workflows with stronger reasoning and long-context performance.',
      displayName: 'GPT-5.2 (CA渠道)',
      functionCall: true,
      id: 'gpt-5.2-ca',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.175,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 14,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-12-11',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'GPT-5.2 Chat is the ChatGPT variant (chat-latest) for the latest conversation improvements.',
      displayName: 'GPT-5.2 Chat (CA渠道)',
      functionCall: true,
      id: 'gpt-5.2-chat-latest-ca',
      maxOutput: 16_384,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.175,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 14,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-12-11',
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'GPT-5.1 — a flagship model optimized for coding and agent tasks with configurable reasoning effort and longer context.',
      displayName: 'GPT-5.1 (CA渠道)',
      functionCall: true,
      id: 'gpt-5.1-ca',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.125,
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
      reasoning: true,
      releasedAt: '2025-11-13',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description: 'GPT-5.1 Chat: the ChatGPT variant of GPT-5.1, built for chat scenarios.',
      displayName: 'GPT-5.1 Chat (CA渠道)',
      functionCall: true,
      id: 'gpt-5.1-chat-latest-ca',
      maxOutput: 16_384,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.125,
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
      releasedAt: '2025-11-13',
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'The best model for cross-domain coding and agent tasks. GPT-5 leaps in accuracy, speed, reasoning, context awareness, structured thinking, and problem solving.',
      displayName: 'GPT-5 (CA渠道)',
      functionCall: true,
      id: 'gpt-5-ca',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.125,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-08-07',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        '更快、更经济高效的 GPT-5 版本，适用于明确定义的任务。在保持高质量输出的同时，提供更快的响应速度。',
      displayName: 'GPT-5 mini (CA渠道)',
      enabled: false,
      functionCall: true,
      id: 'gpt-5-mini-ca',
      maxOutput: 128_000,
      pricing: {
        units: [
          { name: 'textInput', rate: 0.25, strategy: 'fixed', unit: 'millionTokens' },
          { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
          { name: 'textInput_cacheRead', rate: 0.03, strategy: 'fixed', unit: 'millionTokens' },
        ],
      },
      releasedAt: '2025-08-07',
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'The fastest and most cost-effective GPT-5 variant, ideal for latency- and cost-sensitive applications.',
      displayName: 'GPT-5 nano (CA渠道)',
      functionCall: true,
      id: 'gpt-5-nano-ca',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 0.05,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0.4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.005,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-08-07',
      vision: true,
    },
    {
      contextWindowTokens: 400_000,
      description:
        'The GPT-5 model used in ChatGPT, combining strong understanding and generation for conversational applications.',
      displayName: 'GPT-5 Chat (CA渠道)',
      id: 'gpt-5-chat-latest-ca',
      maxOutput: 128_000,
      pricing: {
        units: [
          {
            name: 'textInput',
            rate: 1.25,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            rate: 0.125,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-08-07',
      vision: true,
    },
    {
      contextWindowTokens: 1_047_576,
      description:
        'GPT-4.1 is our flagship model for complex tasks and cross-domain problem solving.',
      displayName: 'GPT-4.1 (CA渠道)',
      functionCall: true,
      id: 'gpt-4.1-ca',
      maxOutput: 32_768,
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
            rate: 2,
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
      releasedAt: '2025-04-14',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_047_576,
      description:
        'GPT-4.1 mini 提供了智能、速度和成本之间的平衡，使其成为许多用例中有吸引力的模型。',
      displayName: 'GPT-4.1 mini (CA渠道)',
      functionCall: true,
      id: 'gpt-4.1-mini-ca',
      maxOutput: 32_768,
      releasedAt: '2025-04-14',
      vision: true,
    },
    {
      contextWindowTokens: 1_047_576,
      description: 'GPT-4.1 nano is the fastest and most cost-effective GPT-4.1 model.',
      displayName: 'GPT-4.1 nano (CA渠道)',
      functionCall: true,
      id: 'gpt-4.1-nano-ca',
      maxOutput: 32_768,
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
      releasedAt: '2025-04-14',
      vision: true,
    },
    {
      contextWindowTokens: 16_385,
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo (CA渠道)',
      functionCall: true,
      id: 'gpt-3.5-turbo-ca',
    },
    {
      contextWindowTokens: 8192,
      description:
        'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
      displayName: 'GPT-4 (CA渠道)',
      functionCall: true,
      id: 'gpt-4-ca',
    },
    {
      contextWindowTokens: 128_000,
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'GPT-4o (CA渠道)',
      enabled: false,
      functionCall: true,
      id: 'gpt-4o-ca',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'GPT-4o mini是OpenAI在GPT-4 Omni之后推出的最新模型，支持图文输入并输出文本。作为他们最先进的小型模型，它比其他近期的前沿模型便宜很多，并且比GPT-3.5 Turbo便宜超过60%。它保持了最先进的智能，同时具有显著的性价比。GPT-4o mini在MMLU测试中获得了 82% 的得分，目前在聊天偏好上排名高于 GPT-4。',
      displayName: 'GPT-4o mini (CA渠道)',
      enabled: false,
      functionCall: true,
      id: 'gpt-4o-mini-ca',
      maxOutput: 16_385,
      vision: true,
    },
  ],
  checkModel: 'gpt-5-nano',
  description:
    'OpenAI 是全球领先的人工智能研究机构，其开发的模型如GPT系列推动了自然语言处理的前沿。OpenAI 致力于通过创新和高效的AI解决方案改变多个行业。他们的产品具有显著的性能和经济性，广泛用于研究、商业和创新应用。',
  enabled: true,
  id: 'openai',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://platform.openai.com/docs/models',
  name: 'OpenAI',
  settings: {
    responseAnimation: 'smooth',
    showModelFetcher: true,
    supportResponsesApi: true,
  },
  url: 'https://openai.com',
};

export default OpenAI;
