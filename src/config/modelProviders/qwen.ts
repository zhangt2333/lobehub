import { ModelProviderCard } from '@/types/llm';

// ref: https://help.aliyun.com/zh/model-studio/getting-started/models
const Qwen: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 1_000_000,
      description: '通义千问超大规模语言模型，支持中文、英文等不同语言输入。',
      displayName: 'Qwen Turbo',
      enabled: true,
      functionCall: true,
      id: 'qwen-turbo-latest',
    },
    {
      contextWindowTokens: 131_072,
      description: '通义千问超大规模语言模型增强版，支持中文、英文等不同语言输入。',
      displayName: 'Qwen Plus',
      enabled: true,
      functionCall: true,
      id: 'qwen-plus-latest',
    },
    {
      contextWindowTokens: 32_768,
      description:
        '通义千问千亿级别超大规模语言模型，支持中文、英文等不同语言输入，当前通义千问2.5产品版本背后的API模型。',
      displayName: 'Qwen Max',
      enabled: true,
      functionCall: true,
      id: 'qwen-max-latest',
    },
    {
      contextWindowTokens: 1_000_000,
      description:
        '通义千问超大规模语言模型，支持长文本上下文，以及基于长文档、多文档等多个场景的对话功能。',
      displayName: 'Qwen Long',
      id: 'qwen-long',
    },
    {
      contextWindowTokens: 32_000,
      description:
        '通义千问大规模视觉语言模型增强版。大幅提升细节识别能力和文字识别能力，支持超百万像素分辨率和任意长宽比规格的图像。',
      displayName: 'Qwen VL Plus',
      enabled: true,
      id: 'qwen-vl-plus-latest',
      vision: true,
    },
    {
      contextWindowTokens: 32_768,
      description:
        '通义千问超大规模视觉语言模型。相比增强版，再次提升视觉推理能力和指令遵循能力，提供更高的视觉感知和认知水平。',
      displayName: 'Qwen VL Max',
      enabled: true,
      id: 'qwen-vl-max-latest',
      vision: true,
    },
    {
      contextWindowTokens: 34_096,
      description:
        '通义千问OCR是文字提取专有模型，专注于文档、表格、试题、手写体文字等类型图像的文字提取能力。它能够识别多种文字，目前支持的语言有：汉语、英语、法语、日语、韩语、德语、俄语、意大利语、越南语、阿拉伯语。',
      displayName: 'Qwen VL OCR',
      id: 'qwen-vl-ocr-latest',
      vision: true,
    },
    {
      contextWindowTokens: 4096,
      description: '通义千问数学模型是专门用于数学解题的语言模型。',
      displayName: 'Qwen Math Turbo',
      id: 'qwen-math-turbo-latest',
    },
    {
      contextWindowTokens: 4096,
      description: '通义千问数学模型是专门用于数学解题的语言模型。',
      displayName: 'Qwen Math Plus',
      id: 'qwen-math-plus-latest',
    },
    {
      contextWindowTokens: 131_072,
      description: '通义千问代码模型。',
      displayName: 'Qwen Coder Turbo',
      id: 'qwen-coder-turbo-latest',
    },
    {
      contextWindowTokens: 131_072,
      description: '通义千问代码模型。',
      displayName: 'Qwen Coder Plus',
      id: 'qwen-coder-plus-latest',
    },
    {
      contextWindowTokens: 32_768,
      description: 'QwQ模型是由 Qwen 团队开发的实验性研究模型，专注于增强 AI 推理能力。',
      displayName: 'QwQ 32B Preview',
      id: 'qwq-32b-preview',
    },
    {
      contextWindowTokens: 32_768,
      description:
        'QVQ模型是由 Qwen 团队开发的实验性研究模型，专注于提升视觉推理能力，尤其在数学推理领域。',
      displayName: 'QVQ 72B Preview',
      id: 'qvq-72b-preview',
      releasedAt: '2024-12-25',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description: '通义千问2.5对外开源的7B规模的模型。',
      displayName: 'Qwen2.5 7B',
      functionCall: true,
      id: 'qwen2.5-7b-instruct',
    },
    {
      contextWindowTokens: 131_072,
      description: '通义千问2.5对外开源的14B规模的模型。',
      displayName: 'Qwen2.5 14B',
      functionCall: true,
      id: 'qwen2.5-14b-instruct',
    },
    {
      contextWindowTokens: 131_072,
      description: '通义千问2.5对外开源的32B规模的模型。',
      displayName: 'Qwen2.5 32B',
      functionCall: true,
      id: 'qwen2.5-32b-instruct',
    },
    {
      contextWindowTokens: 131_072,
      description: '通义千问2.5对外开源的72B规模的模型。',
      displayName: 'Qwen2.5 72B',
      functionCall: true,
      id: 'qwen2.5-72b-instruct',
    },
    {
      contextWindowTokens: 1_000_000,
      description: '通义千问2.5对外开源的72B规模的模型。',
      displayName: 'Qwen2.5 14B 1M',
      functionCall: true,
      id: 'qwen2.5-14b-instruct-1m',
    },
    {
      contextWindowTokens: 4096,
      description: 'Qwen-Math 模型具有强大的数学解题能力。',
      displayName: 'Qwen2.5 Math 7B',
      id: 'qwen2.5-math-7b-instruct',
    },
    {
      contextWindowTokens: 4096,
      description: 'Qwen-Math 模型具有强大的数学解题能力。',
      displayName: 'Qwen2.5 Math 72B',
      id: 'qwen2.5-math-72b-instruct',
    },
    {
      contextWindowTokens: 131_072,
      description: '通义千问代码模型开源版。',
      displayName: 'Qwen2.5 Coder 7B',
      id: 'qwen2.5-coder-7b-instruct',
    },
    {
      contextWindowTokens: 131_072,
      description: '通义千问代码模型开源版。',
      displayName: 'Qwen2.5 Coder 32B',
      id: 'qwen2.5-coder-32b-instruct',
    },
    {
      contextWindowTokens: 8000,
      description: '以 Qwen-7B 语言模型初始化，添加图像模型，图像输入分辨率为448的预训练模型。',
      displayName: 'Qwen VL',
      id: 'qwen-vl-v1',
      vision: true,
    },
    {
      contextWindowTokens: 8000,
      description: '通义千问VL支持灵活的交互方式，包括多图、多轮问答、创作等能力的模型。',
      displayName: 'Qwen VL Chat',
      id: 'qwen-vl-chat-v1',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        '指令跟随、数学、解题、代码整体提升，万物识别能力提升，支持多样格式直接精准定位视觉元素，支持对长视频文件（最长10分钟）进行理解和秒级别的事件时刻定位，能理解时间先后和快慢，基于解析和定位能力支持操控OS或Mobile的Agent，关键信息抽取能力和Json格式输出能力强，此版本为72B版本，本系列能力最强的版本。',
      displayName: 'Qwen2.5 VL 72B',
      id: 'qwen2.5-vl-72b-instruct',
      releasedAt: '2025-01-26',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'DeepSeek-R1 在后训练阶段大规模使用了强化学习技术，在仅有极少标注数据的情况下，极大提升了模型推理能力。在数学、代码、自然语言推理等任务上，性能较高，能力较强。',
      displayName: 'DeepSeek R1',
      id: 'deepseek-r1',
      releasedAt: '2025-01-27',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'DeepSeek-V3 为自研 MoE 模型，671B 参数，激活 37B，在 14.8T token 上进行了预训练，在长文本、代码、数学、百科、中文能力上表现优秀。',
      displayName: 'DeepSeek V3',
      id: 'deepseek-v3',
      releasedAt: '2025-01-27',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'DeepSeek-R1-Distill-Qwen-1.5B 是一个基于 Qwen2.5-Math-1.5B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
      displayName: 'DeepSeek R1 Distill Qwen 1.5B',
      id: 'deepseek-r1-distill-qwen-1.5b',
      releasedAt: '2025-02-05',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'DeepSeek-R1-Distill-Qwen-7B 是一个基于 Qwen2.5-Math-7B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
      displayName: 'DeepSeek R1 Distill Qwen 7B',
      id: 'deepseek-r1-distill-qwen-7b',
      releasedAt: '2025-02-05',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'DeepSeek-R1-Distill-Qwen-14B 是一个基于 Qwen2.5-14B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
      displayName: 'DeepSeek R1 Distill Qwen 14B',
      id: 'deepseek-r1-distill-qwen-14b',
      releasedAt: '2025-02-05',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'DeepSeek-R1-Distill-Qwen-32B 是一个基于 Qwen2.5-32B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
      displayName: 'DeepSeek R1 Distill Qwen 32B',
      id: 'deepseek-r1-distill-qwen-32b',
      releasedAt: '2025-02-05',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'DeepSeek-R1-Distill-Llama-8B 是一个基于 Llama-3.1-8B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
      displayName: 'DeepSeek R1 Distill Llama 8B',
      id: 'deepseek-r1-distill-llama-8b',
      releasedAt: '2025-02-05',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'DeepSeek-R1-Distill-Llama-70B 是一个基于 Llama-3.3-70B-Instruct 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
      displayName: 'DeepSeek R1 Distill Llama 70B',
      id: 'deepseek-r1-distill-llama-70b',
      releasedAt: '2025-02-05',
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Kimi K2.5 is the most capable Kimi model, delivering open-source SOTA in agent tasks, coding, and vision understanding. It supports multimodal inputs and both thinking and non-thinking modes.',
      displayName: 'Kimi K2.5',
      functionCall: true,
      id: 'kimi-k2.5',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
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
      vision: true,
    },
    {
      contextWindowTokens: 204_800,
      description:
        'MiniMax-M2.5 is a flagship open-source large model from MiniMax, focusing on solving complex real-world tasks. Its core strengths are multi-language programming capabilities and the ability to solve complex tasks as an Agent.',
      displayName: 'MiniMax-M2.5',
      functionCall: true,
      id: 'MiniMax-M2.5',
      maxOutput: 131_072,
      pricing: {
        currency: 'CNY',
        units: [
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
      search: true,
    },
    {
      contextWindowTokens: 204_800,
      description:
        'MiniMax-M2.1 is a flagship open-source large model from MiniMax, focusing on solving complex real-world tasks. Its core strengths are multi-language programming capabilities and the ability to solve complex tasks as an Agent.',
      displayName: 'MiniMax-M2.1',
      functionCall: true,
      id: 'MiniMax-M2.1',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
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
      search: true,
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Qwen VL is a text generation model with vision understanding. It can do OCR and also summarize and reason, such as extracting attributes from product photos or solving problems from images.',
      displayName: 'Qwen3 VL Plus',
      id: 'qwen3-vl-plus',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 1,
                '[0.032, 0.128]': 1.5,
                '[0.128, infinity]': 3,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 10,
                '[0.032, 0.128]': 15,
                '[0.128, infinity]': 30,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-09-23',
      vision: true,
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Qwen3 VL Flash: lightweight, high-speed reasoning version for latency-sensitive or high-volume requests.',
      displayName: 'Qwen3 VL Flash',
      id: 'qwen3-vl-flash',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 0.15,
                '[0.032, 0.128]': 0.3,
                '[0.128, 0.256]': 0.6,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 1.5,
                '[0.032, 0.128]': 3,
                '[0.128, 0.256]': 6,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'deepseek-v3.2 introduces sparse attention mechanism, aiming to improve training and inference efficiency when processing long texts, priced lower than deepseek-v3.1.',
      displayName: 'DeepSeek V3.2',
      functionCall: true,
      id: 'deepseek-v3.2',
      maxOutput: 65_536,
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
            rate: 3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      search: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'deepseek-v3.2-exp introduces sparse attention to improve training and inference efficiency on long text, at a lower price than deepseek-v3.1.',
      displayName: 'DeepSeek V3.2 Exp',
      functionCall: true,
      id: 'deepseek-v3.2-exp',
      maxOutput: 65_536,
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
            rate: 3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      search: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'DeepSeek V3.1 uses a hybrid reasoning architecture with both thinking and non-thinking modes.',
      displayName: 'DeepSeek V3.1',
      functionCall: true,
      id: 'deepseek-v3.1',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 4,
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
      search: true,
    },
    {
      contextWindowTokens: 262_144,
      description:
        'kimi-k2-thinking is a Moonshot AI thinking model with general agentic and reasoning abilities. It excels at deep reasoning and can solve hard problems via multi-step tool use.',
      displayName: 'Kimi K2 Thinking',
      functionCall: true,
      id: 'kimi-k2-thinking',
      maxOutput: 16_384,
      pricing: {
        currency: 'CNY',
        units: [
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
      releasedAt: '2025-11-10',
    },
    {
      contextWindowTokens: 131_072,
      description:
        '1T total parameters with 32B active. Among non-thinking models, it is top-tier in frontier knowledge, math, and coding, and stronger at general agent tasks. Optimized for agent workloads, it can take actions, not just answer questions. Best for improvisational, general chat, and agent experiences as a reflex-level model without long thinking.',
      displayName: 'Kimi K2 Instruct',
      functionCall: true,
      id: 'Moonshot-Kimi-K2-Instruct',
      maxOutput: 8192,
      pricing: {
        currency: 'CNY',
        units: [
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
      releasedAt: '2025-07-17',
      search: true,
    },
    {
      contextWindowTokens: 202_752,
      description:
        'The GLM series is a hybrid reasoning model from Zhipu AI built for agents, with thinking and non-thinking modes.',
      displayName: 'GLM-5',
      functionCall: true,
      id: 'glm-5',
      maxOutput: 16_384,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 4,
                '[0.032, infinity]': 6,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 18,
                '[0.032, infinity]': 22,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
    },
    {
      contextWindowTokens: 202_752,
      description:
        'The GLM series is a hybrid reasoning model from Zhipu AI built for agents, with thinking and non-thinking modes.',
      displayName: 'GLM-4.7',
      functionCall: true,
      id: 'glm-4.7',
      maxOutput: 16_384,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 3,
                '[0.032, infinity]': 4,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 14,
                '[0.032, infinity]': 16,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
    },
    {
      contextWindowTokens: 202_752,
      description:
        'The GLM series is a hybrid reasoning model from Zhipu AI built for agents, with thinking and non-thinking modes.',
      displayName: 'GLM-4.6',
      functionCall: true,
      id: 'glm-4.6',
      maxOutput: 16_384,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 3,
                '[0.032, infinity]': 4,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 14,
                '[0.032, infinity]': 16,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'The GLM-4.5 series is a hybrid reasoning model from Zhipu AI built for agents, with thinking and non-thinking modes.',
      displayName: 'GLM-4.5',
      functionCall: true,
      id: 'glm-4.5',
      maxOutput: 16_384,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 3,
                '[0.032, infinity]': 4,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 14,
                '[0.032, infinity]': 16,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'The GLM-4.5 series is a hybrid reasoning model from Zhipu AI built for agents, with thinking and non-thinking modes.',
      displayName: 'GLM-4.5-Air',
      functionCall: true,
      id: 'glm-4.5-air',
      maxOutput: 16_384,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 0.8,
                '[0.032, infinity]': 1.2,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 6,
                '[0.032, infinity]': 8,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Next‑gen Qwen coder optimized for complex multi-file code generation, debugging, and high‑throughput agent workflows. Designed for strong tool integration and improved reasoning performance.',
      displayName: 'Qwen3 Coder Next',
      functionCall: true,
      id: 'qwen3-coder-next',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 1,
                '[0.032, 0.128]': 1.5,
                '[0.128, infinity]': 2.5,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 4,
                '[0.032, 0.128]': 6,
                '[0.128, infinity]': 10,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 1_000_000,
      description:
        'Qwen code model. The latest Qwen3-Coder series is based on Qwen3 and delivers strong coding-agent abilities, tool use, and environment interaction for autonomous programming, with excellent code performance and solid general capability.',
      displayName: 'Qwen3 Coder Plus',
      functionCall: true,
      id: 'qwen3-coder-plus',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 0.8,
                '[0.032, 0.128]': 1.200_000_000_000_000_2,
                '[0.128, 0.256]': 2,
                '[0.256, infinity]': 4,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput_cacheRead',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 4,
                '[0.032, 0.128]': 6,
                '[0.128, 0.256]': 10,
                '[0.256, infinity]': 20,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 16,
                '[0.032, 0.128]': 24,
                '[0.128, 0.256]': 40,
                '[0.256, infinity]': 200,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 1_000_000,
      description:
        'Qwen code model. The latest Qwen3-Coder series is based on Qwen3 and delivers strong coding-agent abilities, tool use, and environment interaction for autonomous programming, with excellent code performance and solid general capability.',
      displayName: 'Qwen3 Coder Flash',
      functionCall: true,
      id: 'qwen3-coder-flash',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 0.2,
                '[0.032, 0.128]': 0.3,
                '[0.128, 0.256]': 0.5,
                '[0.256, 1]': 1,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput_cacheRead',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 1,
                '[0.032, 0.128]': 1.5,
                '[0.128, 0.256]': 2.5,
                '[0.256, 1]': 5,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 4,
                '[0.032, 0.128]': 6,
                '[0.128, 0.256]': 10,
                '[0.256, 1]': 25,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Open-source Qwen code model. The latest qwen3-coder-480b-a35b-instruct is based on Qwen3 and delivers strong coding-agent abilities, tool use, and environment interaction for autonomous programming, with excellent code performance and solid general capability.',
      displayName: 'Qwen3 Coder 480B A35B',
      functionCall: true,
      id: 'qwen3-coder-480b-a35b-instruct',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 6,
                '[0.032, 0.128]': 9,
                '[0.128, 0.2]': 15,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 24,
                '[0.032, 0.128]': 36,
                '[0.128, 0.2]': 60,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Open-source Qwen code model. The latest qwen3-coder-30b-a3b-instruct is based on Qwen3 and delivers strong coding-agent abilities, tool use, and environment interaction for autonomous programming, with excellent code performance and solid general capability.',
      displayName: 'Qwen3 Coder 30B A3B',
      functionCall: true,
      id: 'qwen3-coder-30b-a3b-instruct',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 1.5,
                '[0.032, 0.128]': 2.25,
                '[0.128, 0.2]': 3.75,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 6,
                '[0.032, 0.128]': 9,
                '[0.128, 0.2]': 15,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Supports text, image, and video inputs. For text-only tasks, its performance is comparable to Qwen3 Max, offering higher efficiency and lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.',
      displayName: 'Qwen3.5-397B-A17B',
      functionCall: true,
      id: 'qwen3.5-397b-a17b',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.128]': 1.5,
                '[0.128, infinity]': 3,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.128]': 7.2,
                '[0.128, infinity]': 18,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-02-16',
      vision: true,
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Supports text, image, and video inputs. For text-only tasks, its performance is comparable to Qwen3 Max, offering higher efficiency and lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.',
      displayName: 'Qwen3.5-122B-A10B',
      functionCall: true,
      id: 'qwen3.5-122b-a10b',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.128]': 0.8,
                '[0.128, infinity]': 2,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.128]': 6.4,
                '[0.128, infinity]': 16,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-02-24',
      vision: true,
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Supports text, image, and video inputs. For text-only tasks, its performance is comparable to Qwen3 Max, offering higher efficiency and lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.',
      displayName: 'Qwen3.5-27B',
      functionCall: true,
      id: 'qwen3.5-27b',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.128]': 0.6,
                '[0.128, infinity]': 1.8,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.128]': 4.8,
                '[0.128, infinity]': 14.4,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-02-24',
      vision: true,
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Supports text, image, and video inputs. For text-only tasks, its performance is comparable to Qwen3 Max, offering higher efficiency and lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.',
      displayName: 'Qwen3.5-35B-A3B',
      functionCall: true,
      id: 'qwen3.5-35b-a3b',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.128]': 0.4,
                '[0.128, infinity]': 1.6,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.128]': 3.2,
                '[0.128, infinity]': 12.8,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-02-24',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 thinking-mode open-source model. Compared to the previous version (Qwen3-235B-A22B), it significantly improves logic, general ability, knowledge, and creativity, suitable for hard reasoning scenarios.',
      displayName: 'Qwen3 235B A22B Thinking 2507',
      functionCall: true,
      id: 'qwen3-235b-a22b-thinking-2507',
      maxOutput: 32_768,
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
            rate: 20,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-07-25',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 non-thinking open-source model. Compared to the previous version (Qwen3-235B-A22B), it slightly improves subjective creativity and model safety.',
      displayName: 'Qwen3 235B A22B Instruct 2507',
      functionCall: true,
      id: 'qwen3-235b-a22b-instruct-2507',
      maxOutput: 32_768,
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
            rate: 8,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-07-22',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 thinking-mode open-source model. Compared to the previous version (Qwen3-30B-A3B), it significantly improves logic, general ability, knowledge, and creativity, suitable for hard reasoning scenarios.',
      displayName: 'Qwen3 30B A3B Thinking 2507',
      functionCall: true,
      id: 'qwen3-30b-a3b-thinking-2507',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 0.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 7.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-07-30',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Compared to the previous version (Qwen3-30B-A3B), overall Chinese/English and multilingual general ability is significantly improved. Subjective open-ended tasks are specially optimized for stronger preference alignment and more helpful responses.',
      displayName: 'Qwen3 30B A3B Instruct 2507',
      functionCall: true,
      id: 'qwen3-30b-a3b-instruct-2507',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 0.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-07-29',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Next-gen Qwen3 thinking-mode open-source model. Compared to the prior version (Qwen3-235B-A22B-Thinking-2507), instruction following is improved and summaries are more concise.',
      displayName: 'Qwen3 Next 80B A3B Thinking',
      functionCall: true,
      id: 'qwen3-next-80b-a3b-thinking',
      maxOutput: 32_768,
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
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-09-12',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Next-gen Qwen3 non-thinking open-source model. Compared to the prior version (Qwen3-235B-A22B-Instruct-2507), it has better Chinese understanding, stronger logical reasoning, and improved text generation.',
      displayName: 'Qwen3 Next 80B A3B Instruct',
      functionCall: true,
      id: 'qwen3-next-80b-a3b-instruct',
      maxOutput: 32_768,
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
            rate: 4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-09-12',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 is a next-gen Tongyi Qwen model with major gains in reasoning, general ability, agent capabilities, and multilingual performance, and supports switching thinking modes.',
      displayName: 'Qwen3 235B A22B',
      functionCall: true,
      id: 'qwen3-235b-a22b',
      maxOutput: 8192,
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
            rate: 20,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-04-28',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 is a next-gen Tongyi Qwen model with major gains in reasoning, general ability, agent capabilities, and multilingual performance, and supports switching thinking modes.',
      displayName: 'Qwen3 32B',
      functionCall: true,
      id: 'qwen3-32b',
      maxOutput: 8192,
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
            rate: 20,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-04-28',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 is a next-gen Tongyi Qwen model with major gains in reasoning, general ability, agent capabilities, and multilingual performance, and supports switching thinking modes.',
      displayName: 'Qwen3 30B A3B',
      functionCall: true,
      id: 'qwen3-30b-a3b',
      maxOutput: 8192,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 0.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 7.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-04-28',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 is a next-gen Tongyi Qwen model with major gains in reasoning, general ability, agent capabilities, and multilingual performance, and supports switching thinking modes.',
      displayName: 'Qwen3 14B',
      functionCall: true,
      id: 'qwen3-14b',
      maxOutput: 8192,
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
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-04-28',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 is a next-gen Tongyi Qwen model with major gains in reasoning, general ability, agent capabilities, and multilingual performance, and supports switching thinking modes.',
      displayName: 'Qwen3 8B',
      functionCall: true,
      id: 'qwen3-8b',
      maxOutput: 8192,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 0.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-04-28',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 is a next-gen Tongyi Qwen model with major gains in reasoning, general ability, agent capabilities, and multilingual performance, and supports switching thinking modes.',
      displayName: 'Qwen3 4B',
      functionCall: true,
      id: 'qwen3-4b',
      maxOutput: 8192,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 0.3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-04-28',
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen3 is a next-gen Tongyi Qwen model with major gains in reasoning, general ability, agent capabilities, and multilingual performance, and supports switching thinking modes.',
      displayName: 'Qwen3 1.7B',
      functionCall: true,
      id: 'qwen3-1.7b',
      maxOutput: 8192,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 0.3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-04-28',
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen3 is a next-gen Tongyi Qwen model with major gains in reasoning, general ability, agent capabilities, and multilingual performance, and supports switching thinking modes.',
      displayName: 'Qwen3 0.6B',
      functionCall: true,
      id: 'qwen3-0.6b',
      maxOutput: 8192,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 0.3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-04-28',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'QwQ reasoning model trained on Qwen2.5 uses RL to greatly improve reasoning. Core metrics in math/code (AIME 24/25, LiveCodeBench) and some general benchmarks (IFEval, LiveBench) reach the full DeepSeek-R1 level.',
      displayName: 'QwQ Plus',
      functionCall: true,
      id: 'qwq-plus',
      maxOutput: 8192,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 1.6,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-03-05',
      search: true,
    },
    {
      contextWindowTokens: 1_000_000,
      description: 'Fastest and lowest-cost Qwen model, ideal for simple tasks.',
      displayName: 'Qwen3.5 Flash',
      enabled: true,
      functionCall: true,
      id: 'qwen3.5-flash',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            strategy: 'tiered',
            tiers: [
              {
                rate: 0.2,
                upTo: 0.128,
              },
              {
                rate: 0.8,
                upTo: 0.256,
              },
              {
                rate: 1.2,
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
                rate: 2,
                upTo: 0.128,
              },
              {
                rate: 8,
                upTo: 0.256,
              },
              {
                rate: 12,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            strategy: 'tiered',
            tiers: [
              {
                rate: 0.040_000_000_000_000_01,
                upTo: 0.128,
              },
              {
                rate: 0.160_000_000_000_000_03,
                upTo: 0.256,
              },
              {
                rate: 0.24,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-02-24',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_000_000,
      description: 'Fastest and lowest-cost Qwen model, ideal for simple tasks.',
      displayName: 'Qwen Flash',
      functionCall: true,
      id: 'qwen-flash',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            strategy: 'tiered',
            tiers: [
              {
                rate: 0.15,
                upTo: 0.128,
              },
              {
                rate: 0.6,
                upTo: 0.256,
              },
              {
                rate: 1.2,
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
                rate: 1.5,
                upTo: 0.128,
              },
              {
                rate: 6,
                upTo: 0.256,
              },
              {
                rate: 12,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
          {
            name: 'textInput_cacheRead',
            strategy: 'tiered',
            tiers: [
              {
                rate: 0.03,
                upTo: 0.128,
              },
              {
                rate: 0.12,
                upTo: 0.256,
              },
              {
                rate: 0.24,
                upTo: 'infinity',
              },
            ],
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-07-28',
      search: true,
    },
    {
      contextWindowTokens: 1_000_000,
      description:
        'Qwen Turbo will no longer be updated; replace it with Qwen Flash. Ultra-large Qwen model supporting Chinese, English, and other languages.',
      displayName: 'Qwen Turbo',
      functionCall: true,
      id: 'qwen-turbo',
      maxOutput: 16_384,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.06,
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
            rate: 3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-07-15',
      search: true,
    },
    {
      contextWindowTokens: 1_000_000,
      description:
        'Qwen3.5 Plus supports text, image, and video input. Its performance on pure text tasks is comparable to Qwen3 Max, with better performance and lower cost. Its multimodal capabilities are significantly improved compared to the Qwen3 VL series.',
      displayName: 'Qwen3.5 Plus',
      enabled: true,
      functionCall: true,
      id: 'qwen3.5-plus',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.128]': 0.080_000_000_000_000_02,
                '[0.128, 0.256]': 0.2,
                '[0.256, infinity]': 0.4,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput_cacheRead',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.128]': 1,
                '[0.128, 0.256]': 2.5,
                '[0.256, infinity]': 5,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput_cacheWrite',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.128]': 0.8,
                '[0.128, 0.256]': 2,
                '[0.256, infinity]': 4,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.128]': 4.8,
                '[0.128, 0.256]': 12,
                '[0.256, infinity]': 24,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-02-15',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 1_000_000,
      description:
        'Enhanced ultra-large Qwen model supporting Chinese, English, and other languages.',
      displayName: 'Qwen Plus',
      functionCall: true,
      id: 'qwen-plus',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.128]': 0.160_000_000_000_000_03,
                '[0.128, 0.256]': 0.48,
                '[0.256, infinity]': 0.96,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput_cacheRead',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.128]': 0.8,
                '[0.128, 0.256]': 2.4,
                '[0.256, infinity]': 4.8,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.128]_[false]': 2,
                '[0, 0.128]_[true]': 8,
                '[0.128, 0.256]_[false]': 20,
                '[0.128, 0.256]_[true]': 24,
                '[0.256, infinity]_[false]': 48,
                '[0.256, infinity]_[true]': 64,
              },
              pricingParams: ['textInputRange', 'thinkingMode'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      search: true,
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Qwen3 Max models deliver large gains over the 2.5 series in general ability, Chinese/English understanding, complex instruction following, subjective open tasks, multilingual ability, and tool use, with fewer hallucinations. The latest qwen3-max improves agentic programming and tool use over qwen3-max-preview. This release reaches field SOTA and targets more complex agent needs.',
      displayName: 'Qwen3 Max',
      enabled: true,
      functionCall: true,
      id: 'qwen3-max',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 0.5,
                '[0.032, 0.128]': 0.8,
                '[0.128, infinity]': 1.400_000_000_000_000_1,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput_cacheRead',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 2.5,
                '[0.032, 0.128]': 4,
                '[0.128, 0.252]': 7,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 10,
                '[0.032, 0.128]': 16,
                '[0.128, 0.252]': 28,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2026-01-23',
      search: true,
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Best-performing Qwen model for complex, multi-step tasks. The preview supports thinking.',
      displayName: 'Qwen3 Max Preview',
      functionCall: true,
      id: 'qwen3-max-preview',
      maxOutput: 65_536,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 1.200_000_000_000_000_2,
                '[0.032, 0.128]': 2,
                '[0.128, infinity]': 3,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput_cacheRead',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 6,
                '[0.032, 0.128]': 10,
                '[0.128, infinity]': 15,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]': 24,
                '[0.032, 0.128]': 40,
                '[0.128, infinity]': 60,
              },
              pricingParams: ['textInputRange'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-10-30',
      search: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Hundred-billion-scale ultra-large Qwen model supporting Chinese, English, and other languages; the API model behind current Qwen2.5 products.',
      displayName: 'Qwen Max',
      functionCall: true,
      id: 'qwen-max',
      maxOutput: 8192,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.48,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 2.4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 9.6,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      search: true,
    },
    {
      contextWindowTokens: 65_536,
      description:
        'Qwen-Omni accepts combined inputs across text, images, audio, and video, and outputs text or speech. It offers multiple natural voice styles, supports multilingual and dialect speech, and fits use cases like writing, vision recognition, and voice assistants.',
      displayName: 'Qwen3 Omni Flash',
      id: 'qwen3-omni-flash',
      maxOutput: 16_384,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 1.8,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'audioInput',
            rate: 15.8,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'imageInput',
            rate: 3.3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 6.9,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      vision: true,
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen-Omni models support multimodal inputs (video, audio, images, text) and output audio and text.',
      displayName: 'Qwen Omni Turbo',
      id: 'qwen-omni-turbo',
      maxOutput: 2048,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 1.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 4.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      vision: true,
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen-Omni models support multimodal inputs (video, audio, images, text) and output audio and text.',
      displayName: 'Qwen2.5 Omni 7B',
      id: 'qwen2.5-omni-7b',
      maxOutput: 2048,
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
            rate: 6,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Enhanced large-scale Qwen vision-language model with major gains in detail and text recognition, supporting over one-megapixel resolution and arbitrary aspect ratios.',
      displayName: 'Qwen VL Plus',
      id: 'qwen-vl-plus',
      maxOutput: 8192,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.160_000_000_000_000_03,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 0.8,
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
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Ultra-large Qwen vision-language model. Compared to the enhanced version, it further improves visual reasoning and instruction following for stronger visual perception and cognition.',
      displayName: 'Qwen VL Max',
      id: 'qwen-vl-max',
      maxOutput: 8192,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.320_000_000_000_000_06,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textInput',
            rate: 1.6,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      vision: true,
    },
    {
      contextWindowTokens: 34_096,
      description:
        'Qwen OCR is a text extraction model for documents, tables, exam images, and handwriting. It supports Chinese, English, French, Japanese, Korean, German, Russian, Italian, Vietnamese, and Arabic.',
      displayName: 'Qwen VL OCR',
      id: 'qwen-vl-ocr',
      maxOutput: 4096,
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
            rate: 5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen-VL (open-source) provides vision understanding and text generation, supporting agent interaction, visual grounding, spatial perception, long-video understanding, and deep reasoning, with stronger text recognition and multilingual support in complex scenes.',
      displayName: 'Qwen3 VL 30B A3B Thinking',
      id: 'qwen3-vl-30b-a3b-thinking',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 0.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 7.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 VL 30B non-thinking (Instruct) targets standard instruction-following, maintaining strong multimodal understanding and generation.',
      displayName: 'Qwen3 VL 30B A3B Instruct',
      id: 'qwen3-vl-30b-a3b-instruct',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 0.75,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 3,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 VL 8B thinking mode for lightweight multimodal reasoning and interaction, retaining long-context understanding.',
      displayName: 'Qwen3 VL 8B Thinking',
      id: 'qwen3-vl-8b-thinking',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 0.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 VL 8B non-thinking mode (Instruct) for standard multimodal generation and recognition.',
      displayName: 'Qwen3 VL 8B Instruct',
      id: 'qwen3-vl-8b-instruct',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 0.5,
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
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 VL 235B A22B thinking mode (open-source) targets hard reasoning and long-video understanding with top-tier vision+text reasoning.',
      displayName: 'Qwen3 VL 235B A22B Thinking',
      id: 'qwen3-vl-235b-a22b-thinking',
      maxOutput: 32_768,
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
            rate: 20,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 VL 235B A22B non-thinking (Instruct) is for non-thinking instruction scenarios while retaining strong visual understanding.',
      displayName: 'Qwen3 VL 235B A22B Instruct',
      id: 'qwen3-vl-235b-a22b-instruct',
      maxOutput: 32_768,
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
            rate: 8,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 VL 32B thinking mode (open-source) targets hard reasoning and long-video understanding with top-tier vision+text reasoning.',
      displayName: 'Qwen3 VL 32B Thinking',
      id: 'qwen3-vl-32b-thinking',
      maxOutput: 32_768,
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
            rate: 20,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3 VL 32B non-thinking (Instruct) is for non-thinking instruction scenarios while retaining strong visual understanding.',
      displayName: 'Qwen3 VL 32B Instruct',
      id: 'qwen3-vl-32b-instruct',
      maxOutput: 32_768,
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
            rate: 8,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      vision: true,
    },
    {
      contextWindowTokens: 4096,
      description: 'Qwen Math is a language model specialized for solving math problems.',
      displayName: 'Qwen Math Turbo',
      id: 'qwen-math-turbo',
      maxOutput: 3072,
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
            rate: 6,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 4096,
      description: 'Qwen Math is a language model specialized for solving math problems.',
      displayName: 'Qwen Math Plus',
      id: 'qwen-math-plus',
      maxOutput: 3072,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 4,
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
    },
    {
      contextWindowTokens: 131_072,
      description: 'Qwen code model.',
      displayName: 'Qwen Coder Turbo',
      id: 'qwen-coder-turbo',
      maxOutput: 8192,
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
            rate: 6,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 131_072,
      description: 'Qwen code model.',
      displayName: 'Qwen Coder Plus',
      id: 'qwen-coder-plus',
      maxOutput: 8192,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 3.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 7,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 131_072,
      description:
        'QwQ reasoning model trained on Qwen2.5-32B uses RL to greatly improve reasoning. Core math/code metrics (AIME 24/25, LiveCodeBench) and some general benchmarks (IFEval, LiveBench) reach full DeepSeek-R1 levels and significantly exceed DeepSeek-R1-Distill-Qwen-32B.',
      displayName: 'QwQ 32B',
      id: 'qwq-32b',
      maxOutput: 8192,
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
            rate: 6,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-03-06',
      search: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen QVQ visual reasoning model supports vision input and chain-of-thought output, with stronger performance in math, coding, visual analysis, creative, and general tasks.',
      displayName: 'QVQ Max',
      id: 'qvq-max',
      maxOutput: 8192,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 8,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 32,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-05-15',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Visual reasoning model with vision input and chain-of-thought output. The qvq-plus series follows qvq-max and offers faster reasoning with a better quality-cost balance.',
      displayName: 'QVQ Plus',
      id: 'qvq-plus',
      maxOutput: 8192,
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
            rate: 5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-05-15',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description: 'Open-source Qwen code model.',
      displayName: 'Qwen2.5 Coder 14B',
      id: 'qwen2.5-coder-14b-instruct',
      maxOutput: 8192,
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
            rate: 6,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen2.5VL series model that reaches near Qwen2.5VL-72B performance on math and subject QA. Response style is tuned for human preference, especially for objective queries like math, logical reasoning, and knowledge QA, with clearer and more detailed outputs. This is the 32B version.',
      displayName: 'Qwen2.5 VL 32B',
      id: 'qwen2.5-vl-32b-instruct',
      maxOutput: 8192,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 8,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 24,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-03-24',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Improved instruction following, math, problem solving, and coding, with stronger general object recognition. Supports precise visual element localization across formats, long video understanding (up to 10 minutes) with second-level event timing, temporal ordering and speed understanding, and agents that can control OS or mobile via parsing and localization. Strong key info extraction and JSON output. This is the 72B, strongest version in the series.',
      displayName: 'Qwen2.5 VL 7B',
      id: 'qwen2.5-vl-7b-instruct',
      maxOutput: 8192,
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
            rate: 5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      releasedAt: '2025-01-27',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        '685B full model released on 2025-05-28. DeepSeek-R1 uses large-scale RL in post-training, greatly improving reasoning with minimal labeled data, and performs strongly on math, coding, and natural language reasoning.',
      displayName: 'DeepSeek R1 0528',
      functionCall: true,
      id: 'deepseek-r1-0528',
      maxOutput: 16_384,
      pricing: {
        currency: 'CNY',
        units: [
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
      releasedAt: '2025-05-28',
      search: true,
    },
  ],
  checkModel: 'qwen-flash',
  description:
    '通义千问是阿里云自主研发的超大规模语言模型，具有强大的自然语言理解和生成能力。它可以回答各种问题、创作文字内容、表达观点看法、撰写代码等，在多个领域发挥作用。',
  disableBrowserRequest: true,
  id: 'qwen',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://help.aliyun.com/zh/dashscope/developer-reference/api-details',
  name: 'Aliyun Bailian',
  settings: {
    disableBrowserRequest: true,
    proxyUrl: {
      placeholder: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    },
    responseAnimation: {
      speed: 2,
      text: 'smooth',
    },
    sdkType: 'openai',
    showDeployName: true,
    showModelFetcher: true,
  },
  url: 'https://www.aliyun.com/product/bailian',
};

export default Qwen;
