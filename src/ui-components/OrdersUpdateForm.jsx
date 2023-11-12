/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getOrders } from "../graphql/queries";
import { updateOrders } from "../graphql/mutations";
export default function OrdersUpdateForm(props) {
  const {
    id: idProp,
    orders: ordersModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    OrderId: "",
    CustomerId: "",
    StoreId: "",
    OrderStatus: "",
    Order: "",
  };
  const [OrderId, setOrderId] = React.useState(initialValues.OrderId);
  const [CustomerId, setCustomerId] = React.useState(initialValues.CustomerId);
  const [StoreId, setStoreId] = React.useState(initialValues.StoreId);
  const [OrderStatus, setOrderStatus] = React.useState(
    initialValues.OrderStatus
  );
  const [Order, setOrder] = React.useState(initialValues.Order);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ordersRecord
      ? { ...initialValues, ...ordersRecord }
      : initialValues;
    setOrderId(cleanValues.OrderId);
    setCustomerId(cleanValues.CustomerId);
    setStoreId(cleanValues.StoreId);
    setOrderStatus(cleanValues.OrderStatus);
    setOrder(
      typeof cleanValues.Order === "string" || cleanValues.Order === null
        ? cleanValues.Order
        : JSON.stringify(cleanValues.Order)
    );
    setErrors({});
  };
  const [ordersRecord, setOrdersRecord] = React.useState(ordersModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getOrders.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrders
        : ordersModelProp;
      setOrdersRecord(record);
    };
    queryData();
  }, [idProp, ordersModelProp]);
  React.useEffect(resetStateValues, [ordersRecord]);
  const validations = {
    OrderId: [],
    CustomerId: [],
    StoreId: [],
    OrderStatus: [],
    Order: [{ type: "JSON" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          OrderId: OrderId ?? null,
          CustomerId: CustomerId ?? null,
          StoreId: StoreId ?? null,
          OrderStatus: OrderStatus ?? null,
          Order: Order ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateOrders.replaceAll("__typename", ""),
            variables: {
              input: {
                id: ordersRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrdersUpdateForm")}
      {...rest}
    >
      <TextField
        label="Order id"
        isRequired={false}
        isReadOnly={false}
        value={OrderId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OrderId: value,
              CustomerId,
              StoreId,
              OrderStatus,
              Order,
            };
            const result = onChange(modelFields);
            value = result?.OrderId ?? value;
          }
          if (errors.OrderId?.hasError) {
            runValidationTasks("OrderId", value);
          }
          setOrderId(value);
        }}
        onBlur={() => runValidationTasks("OrderId", OrderId)}
        errorMessage={errors.OrderId?.errorMessage}
        hasError={errors.OrderId?.hasError}
        {...getOverrideProps(overrides, "OrderId")}
      ></TextField>
      <TextField
        label="Customer id"
        isRequired={false}
        isReadOnly={false}
        value={CustomerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OrderId,
              CustomerId: value,
              StoreId,
              OrderStatus,
              Order,
            };
            const result = onChange(modelFields);
            value = result?.CustomerId ?? value;
          }
          if (errors.CustomerId?.hasError) {
            runValidationTasks("CustomerId", value);
          }
          setCustomerId(value);
        }}
        onBlur={() => runValidationTasks("CustomerId", CustomerId)}
        errorMessage={errors.CustomerId?.errorMessage}
        hasError={errors.CustomerId?.hasError}
        {...getOverrideProps(overrides, "CustomerId")}
      ></TextField>
      <TextField
        label="Store id"
        isRequired={false}
        isReadOnly={false}
        value={StoreId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OrderId,
              CustomerId,
              StoreId: value,
              OrderStatus,
              Order,
            };
            const result = onChange(modelFields);
            value = result?.StoreId ?? value;
          }
          if (errors.StoreId?.hasError) {
            runValidationTasks("StoreId", value);
          }
          setStoreId(value);
        }}
        onBlur={() => runValidationTasks("StoreId", StoreId)}
        errorMessage={errors.StoreId?.errorMessage}
        hasError={errors.StoreId?.hasError}
        {...getOverrideProps(overrides, "StoreId")}
      ></TextField>
      <TextField
        label="Order status"
        isRequired={false}
        isReadOnly={false}
        value={OrderStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OrderId,
              CustomerId,
              StoreId,
              OrderStatus: value,
              Order,
            };
            const result = onChange(modelFields);
            value = result?.OrderStatus ?? value;
          }
          if (errors.OrderStatus?.hasError) {
            runValidationTasks("OrderStatus", value);
          }
          setOrderStatus(value);
        }}
        onBlur={() => runValidationTasks("OrderStatus", OrderStatus)}
        errorMessage={errors.OrderStatus?.errorMessage}
        hasError={errors.OrderStatus?.hasError}
        {...getOverrideProps(overrides, "OrderStatus")}
      ></TextField>
      <TextAreaField
        label="Order"
        isRequired={false}
        isReadOnly={false}
        value={Order}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              OrderId,
              CustomerId,
              StoreId,
              OrderStatus,
              Order: value,
            };
            const result = onChange(modelFields);
            value = result?.Order ?? value;
          }
          if (errors.Order?.hasError) {
            runValidationTasks("Order", value);
          }
          setOrder(value);
        }}
        onBlur={() => runValidationTasks("Order", Order)}
        errorMessage={errors.Order?.errorMessage}
        hasError={errors.Order?.hasError}
        {...getOverrideProps(overrides, "Order")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || ordersModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || ordersModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
