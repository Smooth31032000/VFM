import { useDeepCompareEffect } from 'ahooks';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import { FC, useEffect, useMemo, useState } from 'react';
import { useDebouncedValue } from '~/hooks/useDebouncedValue';
import { useDeepCompareMemo } from '~/hooks/useDeepCompareMemo';
import { useIsMounted } from '~/hooks/useIsMounted';
import { takeAll, takeOnlyNumber, takeOnlyWord } from '~/utils/common';
import './styles.css';
import { Props } from './types';


export const Input: FC<Props> = ({
  addonAfter,
  addonBefore,
  allowClear = true,
  className,
  disabled = false,
  maxLength,
  placeholder,
  prefix,
  suffix,
  value = '',
  readOnly = false,
  valueVariant = 'uncontrolled-state',
  size,
  showCount = false,
  mode = 'takeAll',
  onPressEnter,
  onChange,
  onDebounceChange,
  ...props
}) => {
  const isMounted = useIsMounted();
  const [valueState, setValueState] = useState(value);
  const { value: valueStateDebounced, clearTimeout } = useDebouncedValue(
    valueState,
    { timeoutMs: 300 }
  );

  const take = useMemo(() => {
    if (mode === 'takeOnlyNumber') {
      return takeOnlyNumber;
    }
    if (mode === 'takeOnlyWord') {
      return takeOnlyWord;
    }

    return takeAll;
  }, [mode]);

  const handleChange: AntInputProps['onChange'] = (event) => {
    if (readOnly) {
      return;
    }
    const isUndefined = isEmpty(event.target.value) || null;
    const value = isUndefined ? undefined : take(event);
    setValueState(value ?? '');
    onChange?.(value);
  };

  const handleBlur: AntInputProps['onBlur'] = (event) => {
    if (readOnly) {
      return;
    }
    const isUndefined = isEmpty(event.target.value) || null;
    const value = isUndefined ? undefined : take(event);
    clearTimeout();
    setValueState(value ?? '');
    onDebounceChange?.(value);
  };

  useDeepCompareEffect(() => {
    if (isMounted) {
      setValueState(value);
    }
  }, [value]);

  useEffect(() => {
    if (isMounted) {
      onDebounceChange?.(valueStateDebounced);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueStateDebounced]);

  const mergedValueState = useDeepCompareMemo(() => {
    return valueVariant === 'controlled-state' ? value : valueState;
  }, [value, valueState, isMounted, valueVariant]);

  return (
    <AntInput
      size={size}
      readOnly={readOnly}
      addonAfter={addonAfter}
      addonBefore={addonBefore}
      onPressEnter={onPressEnter}
      allowClear={allowClear}
      className={classNames(
        'AntInput__container',
        readOnly ? 'AntInput__readOnly' : '',
        className
      )}
      disabled={disabled}
      maxLength={maxLength}
      onBlur={handleBlur}
      placeholder={placeholder}
      prefix={prefix}
      suffix={suffix}
      showCount={showCount}
      tabIndex={readOnly ? -1 : undefined}
      onChange={handleChange}
      value={mergedValueState}
      {...props}
    />
  );
};
