import { OperationMethods } from "api/gen/client";
import { Awaited } from "./helpers";

export type Invoice = Awaited<
  ReturnType<OperationMethods["getInvoices"]>
>["data"]["invoices"][0];
