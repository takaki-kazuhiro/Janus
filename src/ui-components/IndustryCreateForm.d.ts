/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IndustryCreateFormInputValues = {
    name?: string;
    sub_name?: string;
};
export declare type IndustryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    sub_name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IndustryCreateFormOverridesProps = {
    IndustryCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    sub_name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IndustryCreateFormProps = React.PropsWithChildren<{
    overrides?: IndustryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: IndustryCreateFormInputValues) => IndustryCreateFormInputValues;
    onSuccess?: (fields: IndustryCreateFormInputValues) => void;
    onError?: (fields: IndustryCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: IndustryCreateFormInputValues) => IndustryCreateFormInputValues;
    onValidate?: IndustryCreateFormValidationValues;
} & React.CSSProperties>;
export default function IndustryCreateForm(props: IndustryCreateFormProps): React.ReactElement;
