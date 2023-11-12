/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrdersCreateFormInputValues = {
    OrderId?: string;
    CustomerId?: string;
    StoreId?: string;
    OrderStatus?: string;
    Order?: string;
};
export declare type OrdersCreateFormValidationValues = {
    OrderId?: ValidationFunction<string>;
    CustomerId?: ValidationFunction<string>;
    StoreId?: ValidationFunction<string>;
    OrderStatus?: ValidationFunction<string>;
    Order?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrdersCreateFormOverridesProps = {
    OrdersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    OrderId?: PrimitiveOverrideProps<TextFieldProps>;
    CustomerId?: PrimitiveOverrideProps<TextFieldProps>;
    StoreId?: PrimitiveOverrideProps<TextFieldProps>;
    OrderStatus?: PrimitiveOverrideProps<TextFieldProps>;
    Order?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type OrdersCreateFormProps = React.PropsWithChildren<{
    overrides?: OrdersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrdersCreateFormInputValues) => OrdersCreateFormInputValues;
    onSuccess?: (fields: OrdersCreateFormInputValues) => void;
    onError?: (fields: OrdersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrdersCreateFormInputValues) => OrdersCreateFormInputValues;
    onValidate?: OrdersCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrdersCreateForm(props: OrdersCreateFormProps): React.ReactElement;
