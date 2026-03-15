import { ModelProviderCard } from '@/types/llm';

const ZhiPu: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 128_000,
      description: 'GLM-4-Flash 是处理简单任务的理想选择，速度最快且免费。',
      displayName: 'GLM-4-Flash',
      enabled: true,
      functionCall: true,
      id: 'glm-4-flash',
    },
    {
      contextWindowTokens: 128_000,
      description: 'GLM-4-FlashX 是Flash的增强版本，超快推理速度。',
      displayName: 'GLM-4-FlashX',
      enabled: true,
      functionCall: true,
      id: 'glm-4-flashx',
    },
    {
      contextWindowTokens: 1_024_000,
      description: 'GLM-4-Long 支持超长文本输入，适合记忆型任务与大规模文档处理。',
      displayName: 'GLM-4-Long',
      functionCall: true,
      id: 'glm-4-long',
    },
    {
      contextWindowTokens: 128_000,
      description: 'GLM-4-Air 是性价比高的版本，性能接近GLM-4，提供快速度和实惠的价格。',
      displayName: 'GLM-4-Air',
      enabled: true,
      functionCall: true,
      id: 'glm-4-air',
    },
    {
      contextWindowTokens: 8192,
      description: 'GLM-4-AirX 提供 GLM-4-Air 的高效版本，推理速度可达其2.6倍。',
      displayName: 'GLM-4-AirX',
      enabled: true,
      functionCall: true,
      id: 'glm-4-airx',
    },
    {
      contextWindowTokens: 128_000,
      description:
        'GLM-4-Plus 作为高智能旗舰，具备强大的处理长文本和复杂任务的能力，性能全面提升。',
      displayName: 'GLM-4-Plus',
      enabled: true,
      functionCall: true,
      id: 'glm-4-plus',
    },
    {
      contextWindowTokens: 128_000,
      description: 'GLM-4-0520 是最新模型版本，专为高度复杂和多样化任务设计，表现卓越。',
      displayName: 'GLM-4-0520',
      functionCall: true,
      id: 'glm-4-0520',
    },
    {
      contextWindowTokens: 128_000,
      description: 'GLM-4 是发布于2024年1月的旧旗舰版本，目前已被更强的 GLM-4-0520 取代。',
      displayName: 'GLM-4',
      functionCall: true,
      id: 'glm-4',
    },
    {
      contextWindowTokens: 8192,
      description:
        'GLM-4V-Flash 专注于高效的单一图像理解，适用于快速图像解析的场景，例如实时图像分析或批量图像处理。',
      displayName: 'GLM-4V-Flash',
      enabled: true,
      id: 'glm-4v-flash',
      releasedAt: '2024-12-09',
      vision: true,
    },
    {
      contextWindowTokens: 8192,
      description: 'GLM-4V-Plus 具备对视频内容及多图片的理解能力，适合多模态任务。',
      displayName: 'GLM-4V-Plus',
      enabled: true,
      id: 'glm-4v-plus',
      vision: true,
    },
    {
      contextWindowTokens: 2048,
      description: 'GLM-4V 提供强大的图像理解与推理能力，支持多种视觉任务。',
      displayName: 'GLM-4V',
      id: 'glm-4v',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'CodeGeeX-4 是强大的AI编程助手，支持多种编程语言的智能问答与代码补全，提升开发效率。',
      displayName: 'CodeGeeX-4',
      id: 'codegeex-4',
    },
    {
      contextWindowTokens: 4096,
      description: 'CharGLM-4 专为角色扮演与情感陪伴设计，支持超长多轮记忆与个性化对话，应用广泛。',
      displayName: 'CharGLM-4',
      id: 'charglm-4',
    },
    {
      contextWindowTokens: 8192,
      description: 'Emohaa 是心理模型，具备专业咨询能力，帮助用户理解情感问题。',
      displayName: 'Emohaa',
      id: 'emohaa',
    },
    {
      contextWindowTokens: 200_000,
      description:
        'GLM-5 is Zhipu’s next-generation flagship foundation model, purpose-built for Agentic Engineering. It delivers reliable productivity in complex systems engineering and long-horizon agentic tasks. In coding and agent capabilities, GLM-5 achieves state-of-the-art performance among open-source models. In real-world programming scenarios, its user experience approaches that of Claude Opus 4.5. It excels at complex systems engineering and long-horizon agent tasks, making it an ideal foundation model for general-purpose agent assistants.',
      displayName: 'GLM-5',
      enabled: true,
      functionCall: true,
      id: 'glm-5',
      maxOutput: 131_072,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 1,
                '[0.032, infinity]': 1.5,
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
                '[0, 0.032]': 4,
                '[0.032, infinity]': 6,
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
                '[0, 0.032]': 18,
                '[0.032, infinity]': 22,
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
      releasedAt: '2026-02-12',
      search: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        "GLM-4.7 is Zhipu's latest flagship model, enhanced for Agentic Coding scenarios with improved coding capabilities, long-term task planning, and tool collaboration. It achieves leading performance among open-source models on multiple public benchmarks. General capabilities are improved with more concise and natural responses and more immersive writing. For complex agent tasks, instruction following during tool calls is stronger, and the frontend aesthetics and long-term task completion efficiency of Artifacts and Agentic Coding are further enhanced.",
      displayName: 'GLM-4.7',
      functionCall: true,
      id: 'glm-4.7',
      maxOutput: 131_072,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]_[0, 0.0002]': 0.4,
                '[0, 0.032]_[0.0002, infinity]': 0.6,
                '[0.032, 0.2]': 0.8,
              },
              pricingParams: ['textInput', 'textOutput'],
            },
            name: 'textInput_cacheRead',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]_[0, 0.0002]': 2,
                '[0, 0.032]_[0.0002, infinity]': 3,
                '[0.032, 0.2]': 4,
              },
              pricingParams: ['textInput', 'textOutput'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]_[0, 0.0002]': 8,
                '[0, 0.032]_[0.0002, infinity]': 14,
                '[0.032, 0.2]': 16,
              },
              pricingParams: ['textInput', 'textOutput'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-12-22',
      search: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'GLM-4.7-Flash, as a 30B-level SOTA model, offers a new choice that balances performance and efficiency. It enhances coding capabilities, long-term task planning, and tool collaboration for Agentic Coding scenarios, achieving leading performance among open-source models of the same size in multiple current benchmark leaderboards. In executing complex intelligent agent tasks, it has stronger instruction compliance during tool calls, and further improves the aesthetics of front-end and the efficiency of long-term task completion for Artifacts and Agentic Coding.',
      displayName: 'GLM-4.7-Flash',
      enabled: true,
      functionCall: true,
      id: 'glm-4.7-flash',
      maxOutput: 131_072,
      pricing: {
        currency: 'CNY',
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
      reasoning: true,
      releasedAt: '2026-01-19',
      search: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'GLM-4.7-Flash, as a 30B-level SOTA model, offers a new choice that balances performance and efficiency. It enhances coding capabilities, long-term task planning, and tool collaboration for Agentic Coding scenarios, achieving leading performance among open-source models of the same size in multiple current benchmark leaderboards. In executing complex intelligent agent tasks, it has stronger instruction compliance during tool calls, and further improves the aesthetics of front-end and the efficiency of long-term task completion for Artifacts and Agentic Coding.',
      displayName: 'GLM-4.7-FlashX',
      functionCall: true,
      id: 'glm-4.7-flashx',
      maxOutput: 131_072,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput_cacheRead',
            rate: 0.1,
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
        ],
      },
      reasoning: true,
      releasedAt: '2026-01-19',
      search: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'The GLM-4.6V series represents a major iteration of the GLM family in the multimodal direction, comprising GLM-4.6V (flagship), GLM-4.6V-FlashX (lightweight and high-speed), and GLM-4.6V-Flash (fully free). It extends the training-time context window to 128k tokens, achieves state-of-the-art visual understanding accuracy at comparable parameter scales, and, for the first time, natively integrates Function Call (tool invocation) capabilities into the visual model architecture. This unifies the pipeline from “visual perception” to “executable actions,” providing a consistent technical foundation for multimodal agents in real-world production scenarios.',
      displayName: 'GLM-4.6V',
      enabled: true,
      functionCall: true,
      id: 'glm-4.6v',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 0.2,
                '[0.032, infinity]': 0.4,
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
                '[0, 0.032]': 1,
                '[0.032, infinity]': 2,
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
                '[0, 0.032]': 3,
                '[0.032, infinity]': 6,
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
      releasedAt: '2025-12-08',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'The GLM-4.6V series represents a major iteration of the GLM family in the multimodal direction, comprising GLM-4.6V (flagship), GLM-4.6V-FlashX (lightweight and high-speed), and GLM-4.6V-Flash (fully free). It extends the training-time context window to 128k tokens, achieves state-of-the-art visual understanding accuracy at comparable parameter scales, and, for the first time, natively integrates Function Call (tool invocation) capabilities into the visual model architecture. This unifies the pipeline from “visual perception” to “executable actions,” providing a consistent technical foundation for multimodal agents in real-world production scenarios.',
      displayName: 'GLM-4.6V-FlashX',
      functionCall: true,
      id: 'glm-4.6v-flashx',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 0.03,
                '[0.032, infinity]': 0.03,
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
                '[0, 0.032]': 0.15,
                '[0.032, infinity]': 0.3,
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
                '[0, 0.032]': 1.5,
                '[0.032, infinity]': 3,
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
      releasedAt: '2025-12-08',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'The GLM-4.6V series represents a major iteration of the GLM family in the multimodal direction, comprising GLM-4.6V (flagship), GLM-4.6V-FlashX (lightweight and high-speed), and GLM-4.6V-Flash (fully free). It extends the training-time context window to 128k tokens, achieves state-of-the-art visual understanding accuracy at comparable parameter scales, and, for the first time, natively integrates Function Call (tool invocation) capabilities into the visual model architecture. This unifies the pipeline from “visual perception” to “executable actions,” providing a consistent technical foundation for multimodal agents in real-world production scenarios.',
      displayName: 'GLM-4.6V-Flash',
      functionCall: true,
      id: 'glm-4.6v-flash',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
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
      reasoning: true,
      releasedAt: '2025-12-08',
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        "Zhipu's latest flagship model GLM-4.6 (355B) fully surpasses its predecessors in advanced coding, long-text processing, reasoning, and agent capabilities. It particularly aligns with Claude Sonnet 4 in programming ability, becoming China's top Coding model.",
      displayName: 'GLM-4.6',
      functionCall: true,
      id: 'glm-4.6',
      maxOutput: 131_072,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]_[0, 0.0002]': 0.4,
                '[0, 0.032]_[0.0002, infinity]': 0.6,
                '[0.032, 0.2]': 0.8,
              },
              pricingParams: ['textInput', 'textOutput'],
            },
            name: 'textInput_cacheRead',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]_[0, 0.0002]': 2,
                '[0, 0.032]_[0.0002, infinity]': 3,
                '[0.032, 0.2]': 4,
              },
              pricingParams: ['textInput', 'textOutput'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]_[0, 0.0002]': 8,
                '[0, 0.032]_[0.0002, infinity]': 14,
                '[0.032, 0.2]': 16,
              },
              pricingParams: ['textInput', 'textOutput'],
            },
            name: 'textOutput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      releasedAt: '2025-09-08',
      search: true,
    },
    {
      contextWindowTokens: 65_536,
      description:
        'Zhipu’s next-generation MoE vision reasoning model has 106B total parameters with 12B active, achieving SOTA among similarly sized open-source multimodal models across image, video, document understanding, and GUI tasks.',
      displayName: 'GLM-4.5V',
      functionCall: true,
      id: 'glm-4.5v',
      maxOutput: 16_384,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 0.4,
                '[0.032, infinity]': 0.8,
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
                '[0, 0.032]': 2,
                '[0.032, infinity]': 4,
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
                '[0, 0.032]': 6,
                '[0.032, infinity]': 12,
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
      search: true,
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Zhipu flagship model with a switchable thinking mode, delivering open-source SOTA overall and up to 128K context.',
      displayName: 'GLM-4.5',
      functionCall: true,
      id: 'glm-4.5',
      maxOutput: 98_304,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]_[0, 0.0002]': 0.4,
                '[0, 0.032]_[0.0002, infinity]': 0.6,
                '[0.032, 0.128]': 0.8,
              },
              pricingParams: ['textInput', 'textOutput'],
            },
            name: 'textInput_cacheRead',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]_[0, 0.0002]': 2,
                '[0, 0.032]_[0.0002, infinity]': 3,
                '[0.032, 0.128]': 4,
              },
              pricingParams: ['textInput', 'textOutput'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]_[0, 0.0002]': 8,
                '[0, 0.032]_[0.0002, infinity]': 14,
                '[0.032, 0.128]': 16,
              },
              pricingParams: ['textInput', 'textOutput'],
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
      contextWindowTokens: 131_072,
      description:
        'GLM-4.5 fast edition, delivering strong performance with generation speeds up to 100 tokens/sec.',
      displayName: 'GLM-4.5-X',
      functionCall: true,
      id: 'glm-4.5-x',
      maxOutput: 98_304,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 1.6,
                '[0, 0.032]_[0.0002, infinity]': 2.4,
                '[0.032, 0.128]': 3.2,
              },
              pricingParams: ['textInput', 'textOutput'],
            },
            name: 'textInput_cacheRead',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]_[0, 0.0002]': 8,
                '[0, 0.032]_[0.0002, infinity]': 12,
                '[0.032, 0.128]': 16,
              },
              pricingParams: ['textInput', 'textOutput'],
            },
            name: 'textInput',
            strategy: 'lookup',
            unit: 'millionTokens',
          },
          {
            lookup: {
              prices: {
                '[0, 0.032]_[0, 0.0002]': 16,
                '[0, 0.032]_[0.0002, infinity]': 32,
                '[0.032, 0.128]': 64,
              },
              pricingParams: ['textInput', 'textOutput'],
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
      contextWindowTokens: 131_072,
      description:
        'GLM-4.5 lightweight edition that balances performance and cost, with flexible hybrid thinking modes.',
      displayName: 'GLM-4.5-Air',
      functionCall: true,
      id: 'glm-4.5-air',
      maxOutput: 98_304,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 0.16,
                '[0.032, 0.128]': 0.24,
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
                '[0, 0.032]': 0.8,
                '[0.032, 0.128]': 1.2,
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
                '[0, 0.032]_[0, 0.0002]': 2,
                '[0, 0.032]_[0.0002, infinity]': 6,
                '[0.032, 0.128]': 8,
              },
              pricingParams: ['textInput', 'textOutput'],
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
      contextWindowTokens: 131_072,
      description:
        'GLM-4.5-Air fast edition with quicker responses for high-scale, high-speed use.',
      displayName: 'GLM-4.5-AirX',
      functionCall: true,
      id: 'glm-4.5-airx',
      maxOutput: 98_304,
      pricing: {
        currency: 'CNY',
        units: [
          {
            lookup: {
              prices: {
                '[0, 0.032]': 0.8,
                '[0.032, 0.128]': 1.6,
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
                '[0, 0.032]': 4,
                '[0.032, 0.128]': 8,
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
                '[0, 0.032]_[0, 0.0002]': 12,
                '[0, 0.032]_[0.0002, infinity]': 16,
                '[0.032, 0.128]': 32,
              },
              pricingParams: ['textInput', 'textOutput'],
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
      contextWindowTokens: 65_536,
      description:
        'GLM-4.1V-Thinking is the strongest known ~10B VLM, covering SOTA tasks like video understanding, image QA, subject solving, OCR, document and chart reading, GUI agents, frontend coding, and grounding. It even surpasses the 8x larger Qwen2.5-VL-72B on many tasks. With advanced RL, it uses chain-of-thought reasoning to improve accuracy and richness, outperforming traditional non-thinking models in both outcomes and explainability.',
      displayName: 'GLM-4.1V-Thinking-FlashX',
      id: 'glm-4.1v-thinking-flashx',
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
            rate: 2,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      vision: true,
    },
    {
      contextWindowTokens: 65_536,
      description:
        'GLM-4.1V-Thinking is the strongest known ~10B VLM, covering SOTA tasks like video understanding, image QA, subject solving, OCR, document and chart reading, GUI agents, frontend coding, and grounding. It even surpasses the 8x larger Qwen2.5-VL-72B on many tasks. With advanced RL, it uses chain-of-thought reasoning to improve accuracy and richness, outperforming traditional non-thinking models in both outcomes and explainability.',
      displayName: 'GLM-4.1V-Thinking-Flash',
      id: 'glm-4.1v-thinking-flash',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
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
      reasoning: true,
      vision: true,
    },
    {
      contextWindowTokens: 16_384,
      description:
        'GLM-Zero-Preview delivers strong complex reasoning, excelling in logic, math, and programming.',
      displayName: 'GLM-Zero-Preview',
      id: 'glm-zero-preview',
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
            rate: 10,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
    },
    {
      contextWindowTokens: 131_072,
      description: 'Reasoning model with strong reasoning for tasks that require deep inference.',
      displayName: 'GLM-Z1-Air',
      id: 'glm-z1-air',
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
            rate: 0.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      reasoning: true,
      search: true,
    },
    {
      contextWindowTokens: 32_768,
      description: 'Ultra-fast reasoning with high reasoning quality.',
      displayName: 'GLM-Z1-AirX',
      id: 'glm-z1-airx',
      maxOutput: 32_768,
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
      reasoning: true,
      search: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Fast and low-cost: Flash-enhanced with ultra-fast reasoning and higher concurrency.',
      displayName: 'GLM-Z1-FlashX',
      id: 'glm-z1-flashx',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
        units: [
          {
            name: 'textInput',
            rate: 0.1,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
          {
            name: 'textOutput',
            rate: 0.1,
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
        'GLM-Z1 series provides strong complex reasoning, excelling in logic, math, and programming.',
      displayName: 'GLM-Z1-Flash',
      id: 'glm-z1-flash',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
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
      reasoning: true,
      search: true,
    },
    {
      contextWindowTokens: 131_072,
      description: 'GLM-4-Flash is ideal for simple tasks: fastest and free.',
      displayName: 'GLM-4-Flash-250414',
      functionCall: true,
      id: 'glm-4-flash-250414',
      maxOutput: 32_768,
      pricing: {
        currency: 'CNY',
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
      search: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'GLM-4-Air is a high-value option with performance close to GLM-4, fast speed, and lower cost.',
      displayName: 'GLM-4-Air-250414',
      functionCall: true,
      id: 'glm-4-air-250414',
      maxOutput: 16_384,
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
            rate: 0.5,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      search: true,
    },
    {
      contextWindowTokens: 16_000,
      description:
        'GLM-4V-Plus understands video and multiple images, suitable for multimodal tasks.',
      displayName: 'GLM-4V-Plus-0111',
      id: 'glm-4v-plus-0111',
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
            rate: 4,
            strategy: 'fixed',
            unit: 'millionTokens',
          },
        ],
      },
      vision: true,
    },
  ],
  checkModel: 'glm-4.7-flash',
  description:
    '智谱 AI 提供多模态与语言模型的开放平台，支持广泛的AI应用场景，包括文本处理、图像理解与编程辅助等。',
  id: 'zhipu',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://open.bigmodel.cn/dev/howuse/model',
  name: 'ZhiPu',
  settings: {
    proxyUrl: {
      placeholder: 'https://open.bigmodel.cn/api/paas/v4',
    },
    sdkType: 'openai',
    showModelFetcher: true,
  },
  url: 'https://zhipuai.cn',
};

export default ZhiPu;
