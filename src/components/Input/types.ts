import { InputProps as AntInputProps } from "antd";
export type Mode = "takeOnlyNumber" | "takeOnlyWord" | "takeAll";

export interface Props
  extends Pick<
    AntInputProps,
    | "addonAfter"
    | "addonBefore"
    | "allowClear"
    | "className"
    | "disabled"
    | "maxLength"
    | "placeholder"
    | "prefix"
    | "suffix"
    | "readOnly"
    | "size"
    | "showCount"
    | "onPressEnter"
    | "onBlur"
    | "classNames"
  > {
  /** The value of the input. */
  value?: string;
  /** Callback function triggered when the input value changes. */
  onChange?: (value: string | undefined) => void;
  /** Callback function that is triggered when the input value changes, but only after a debounce delay. */
  onDebounceChange?: (value: string | undefined) => void;
  /** Determines if the input is controlled or uncontrolled state. */
  valueVariant?: "controlled-state" | "uncontrolled-state";
  /** Specifies the mode of the input, determining what type of characters it accepts. */
  mode?: Mode;
}

/**
 * Input component that extends the functionality of the Ant Design Input component.
 * It ensures that all props are type-checked more rigorously compared to the standard Ant Design Input component.
 *
 * @param {Props} props - The properties for the Input component.
 * @param {ReactNode} [props.addonAfter] - The element to display on the right side of the input field.
 * @param {ReactNode} [props.addonBefore] - The element to display on the left side of the input field.
 * @param {boolean} [props.allowClear=true] - Whether a clear button is displayed when there is input.
 * @param {string} [props.className] - Custom CSS class for styling the input.
 * @param {boolean} [props.disabled=false] - Whether the input is disabled.
 * @param {number} [props.maxLength] - The maximum length of the input value.
 * @param {string} [props.placeholder] - The placeholder text for the input.
 * @param {ReactNode} [props.prefix] - The prefix icon or text for the input.
 * @param {ReactNode} [props.suffix] - The suffix icon or text for the input.
 * @param {boolean} [props.readOnly=false] - Whether the input is read-only.
 * @param {string} [props.value] - The value of the input.
 * @param {Function} [props.onChange] - Callback function triggered when the input value changes.
 * @param {Function} [props.onDebounceChange] - Callback function that is triggered when the input value changes, but only after a debounce delay.
 * @param {'controlled-state' | 'uncontrolled-state'} [props.valueVariant] - Determines if the input is controlled or uncontrolled state.
 * @param {string} [props.size] - The size of input.
 * @param {string} [props.showCount] - Whether to display the character count.
 * @param {Mode} [props.mode] - Specifies the mode of the input, determining what type of characters it accepts.
 * @returns {ReactNode} The rendered Input component.
 */
