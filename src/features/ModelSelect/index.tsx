import { TooltipGroup } from '@lobehub/ui';
import { Select, type SelectProps } from '@lobehub/ui/base-ui';
import { createStaticStyles, createStyles } from 'antd-style';
import { type ReactNode } from 'react';
import { memo, useMemo } from 'react';

import { ModelItemRender, ProviderItemRender, TAG_CLASSNAME } from '@/components/ModelSelect';
import { useEnabledChatModels } from '@/hooks/useEnabledChatModels';
import { type EnabledProviderWithModels } from '@/types/aiProvider';

const prefixCls = 'ant';

const useStyles = createStyles(({ css }, { popupWidth }: { popupWidth?: number | string }) => ({
  popup: css`
    width: ${popupWidth
      ? typeof popupWidth === 'number'
        ? `${popupWidth}px`
        : popupWidth
      : 'max(360px, var(--anchor-width))'};
  `,
}));

const styles = createStaticStyles(({ css }) => ({
  popup: css`
    &.${prefixCls}-select-dropdown .${prefixCls}-select-item-option-grouped {
      padding-inline-start: 12px;
    }
  `,
  select: css`
    .${prefixCls}-select-selection-item {
      .${TAG_CLASSNAME} {
        display: none;
      }
    }
  `,
}));

interface ModelOption {
  abilities?: Record<string, boolean>;
  id: string;
  label: ReactNode;
  provider: string;
  value: string;
}

interface ModelSelectProps extends Pick<SelectProps, 'loading' | 'size' | 'style' | 'variant'> {
  defaultValue?: { model: string; provider?: string };
  initialWidth?: boolean;
  onChange?: (props: { model: string; provider: string }) => void;
  popupWidth?: number | string;
  requiredAbilities?: (keyof EnabledProviderWithModels['children'][number]['abilities'])[];
  showAbility?: boolean;
  value?: { model: string; provider?: string };
}

const normalizeModelSelectValue = (
  value: ModelSelectProps['value'],
  enabledList: EnabledProviderWithModels[],
) => {
  if (!value?.model) return value;

  const enabledValues = new Set(
    enabledList.flatMap((provider) =>
      provider.children.map((model) => `${provider.id}/${model.id}`),
    ),
  );

  if (value.provider) {
    const explicitValue = `${value.provider}/${value.model}`;
    if (enabledValues.has(explicitValue)) return value;
  }

  if (!value.model.includes('/')) return value;

  const [provider, ...modelParts] = value.model.split('/');
  const model = modelParts.join('/');
  const inferredValue = `${provider}/${model}`;

  if (!provider || !model || !enabledValues.has(inferredValue)) return value;

  return { model, provider };
};

const ModelSelect = memo<ModelSelectProps>(
  ({
    value,
    onChange,
    showAbility = true,
    requiredAbilities,
    loading,
    size,
    style,
    variant,
    initialWidth = false,
    popupWidth,
  }) => {
    const { styles: dynamicStyles } = useStyles({ popupWidth });
    const enabledList = useEnabledChatModels();
    const normalizedValue = useMemo(
      () => normalizeModelSelectValue(value, enabledList),
      [enabledList, value],
    );

    const options = useMemo<SelectProps['options']>(() => {
      const getChatModels = (provider: EnabledProviderWithModels) => {
        const models =
          requiredAbilities && requiredAbilities.length > 0
            ? provider.children.filter((model) =>
                requiredAbilities.every((ability) => Boolean(model.abilities?.[ability])),
              )
            : provider.children;

        return models.map((model) => ({
          ...model,
          label: <ModelItemRender {...model} {...model.abilities} showInfoTag={false} />,
          provider: provider.id,
          value: `${provider.id}/${model.id}`,
        }));
      };

      if (enabledList.length === 1) {
        const provider = enabledList[0];

        return getChatModels(provider);
      }

      return enabledList
        .map((provider) => {
          const opts = getChatModels(provider);
          if (opts.length === 0) return undefined;

          return {
            label: (
              <ProviderItemRender
                logo={provider.logo}
                name={provider.name}
                provider={provider.id}
                source={provider.source}
              />
            ),
            options: opts,
          };
        })
        .filter(Boolean) as SelectProps['options'];
    }, [enabledList, requiredAbilities, showAbility]);

    return (
      <TooltipGroup>
        <Select
          className={styles.select}
          loading={loading}
          options={options}
          popupClassName={popupWidth ? `${styles.popup} ${dynamicStyles.popup}` : styles.popup}
          popupMatchSelectWidth={false}
          size={size}
          variant={variant}
          defaultValue={
            normalizedValue?.model
              ? `${normalizedValue.provider}/${normalizedValue.model}`
              : undefined
          }
          optionRender={(option) => (
            <ModelItemRender
              {...(option as ModelOption)}
              {...(option as ModelOption).abilities}
              showInfoTag
            />
          )}
          style={{
            minWidth: 200,
            width: initialWidth ? 'initial' : undefined,
            ...style,
          }}
          value={
            normalizedValue?.model
              ? `${normalizedValue.provider}/${normalizedValue.model}`
              : undefined
          }
          onChange={(value, option) => {
            const model = value.split('/').slice(1).join('/');
            onChange?.({ model, provider: (option as unknown as ModelOption).provider });
          }}
        />
      </TooltipGroup>
    );
  },
);

export default ModelSelect;
