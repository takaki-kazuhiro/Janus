/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Industry } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IndustryUpdateFormInputValues = {
    name?: string;
    sub_name?: string;
};
export declare type IndustryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    sub_name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IndustryUpdateFormOverridesProps = {
    IndustryUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    sub_name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IndustryUpdateFormProps = React.PropsWithChildren<{
    overrides?: IndustryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    industry?: Industry;
    onSubmit?: (fields: IndustryUpdateFormInputValues) => IndustryUpdateFormInputValues;
    onSuccess?: (fields: IndustryUpdateFormInputValues) => void;
    onError?: (fields: IndustryUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: IndustryUpdateFormInputValues) => IndustryUpdateFormInputValues;
    onValidate?: IndustryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function IndustryUpdateForm(props: IndustryUpdateFormProps): React.ReactElement;
