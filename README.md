# jean_test_front

This repository contains the guidelines for the frontend interview question, as well as a repository skeleton with which to start.

## Your mission

> ***Implement an invoice editor with React***

### Objectives

The goal is to leverage an existing REST HTTP API to build the prototype of an invoicing editor.

This prototype allows users to perform simple actions around their invoices:

- List existing invoices with relevant details
- Create new invoices
- Manage existing invoices
  - Finalize invoices
  - Delete invoices
 
We do not expect the prototype to be UI-rich as we'll mainly focus on code quality & user experience. We expect you to adopt standard coding practices & setup, including testing, as if you were working on a real application with other coworkers.

Feel free to use pre-installed dependencies or add new ones if you have a legitimate use of them.

However, we want you to:

- Rely on Bootstrap as UI library & [`react-bootstrap`](https://react-bootstrap.github.io/)
- NOT rely on state management librairies (eg. `redux`)

Please take the time to identify advanced features that could be useful for an invoice editor & write down tech improvements/ideas you could work on.

For each feature/tech improvement, we want to understand:

- What led you to think about this
- Why it would be useful
- A potential prototype implementation (feel free to work around API limitations)
- What might be missing for you to implement it (API limitations, technical constraints)

### Getting started

```sh
git clone git@github.com:pennylane-hq/jean_test_front.git

cd jean_test_front

yarn

yarn start
```

### Deliverable

- Create a private GitHub repository containing the source code of your application
- Invite the following GitHub users to it: `@gterral` `@soyoh` `@greeeg` `@thecodehunter` `@bastienvalentin` `@Juleffel` `@andreitertiscu`
- Deploy the application using any PaaS like Vercel, Netlify, Heroku, personal server, etc.
- Submit links to the above [via this form](https://forms.gle/siH7Rezuq2V1mUJGA)

## What you're working with

### Data model

The REST API contains 4 resources: customers, products, invoices & invoice lines.

Side notes:

- Invoices contain multiple invoice lines.
- Invoice lines are accessed via their invoice. To update them, use the relevant invoice API endpoints.
- Once the `finalized` field is set to `true` for invoices, no field may be modified except for `paid`.

The REST API base URL is `https://jean-test-api.herokuapp.com/`.
Each API call must be authenticated using a `X-SESSION` header with the provided token.

An OpenAPI definition for this REST API is avaible [here](https://jean-test-api.herokuapp.com/api-docs/index.html).

The invoices list endpoint supports a `filter` query param which can be used as described in [our external API documentation](https://pennylane.readme.io/docs/how-to-set-up-filters).

### API client

An API client based on `openapi-client-axios` is available through a React Context set up in `src/app/index.tsx`. The context can be consumed using the `useApi` hook. Before using it, please add the token you received in `/src/app/index.tsx`. If you do not have one, please contact us.

```tsx
ReactDOM.render(
  <ApiProvider
    url="https://jean-test-api.herokuapp.com/"
    token="" // set your api token here
  >
    <App />
  </ApiProvider>
);
```

```tsx
import { useEffect } from "react";
import { useApi } from "api";

const FooComponent = () => {
  const api = useApi();

  useEffect(() => {
    const fetch = async () => {
      const res = await api.getInvoices();
    }

    fetch();
  })

  return <div>bar</div>;
}
```

### Repository contents

This repository has been initialized with [create-react-app](https://github.com/facebook/create-react-app). It is to be used as a starting point for developing the prototype.

A set of packages has been included in [package.json](./package.json), please feel free to use them. Their usage is optional; you are not expected to learn any new libraries for this test.

As much as possible, please avoid introducing new dependencies - if you find this necessary, please explain why.

You'll find the `InvoicesList` component already started in the `components` folder.

If you prefer to use JavaScript without typing, you can execute the command `yarn eject_ts`
