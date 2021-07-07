const mapPaidBooleanToString = (isPaid: boolean) => {
  return isPaid ? "Yes" : "No";
}

export const getInvoiceValues = (invoice: any) => {
  return [
    {
      label: "Deadline",
      data: invoice.deadline
    },
    {
      label: "Total",
      data: invoice.total
    },
    {
      label: "Paid",
      data: mapPaidBooleanToString(invoice.paid)
    },
  ]
}

export const getInvoiceLineValues = (invoiceLine: any) => {
  return [
    {
      label: "Quantity",
      data: invoiceLine.quantity
    },
    {
      label: "Price",
      data: invoiceLine.price
    },
    {
      label: "Tax",
      data: invoiceLine.tax
    },
    {
      label: "VAT",
      data: invoiceLine.vat_rate
    }
  ]
}