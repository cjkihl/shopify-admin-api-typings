# Shopify Admin API Types

![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

Auto-generated Typescript type definitions for **Shopify Admin API**. Current version includes all types for version: `2020-10`.

If you're looking for typings for **Shopify Storefront Api**, checkout the [shopify-storefront-api-typings](https://www.npmjs.com/package/shopify-storefront-api-typings) package.

![types](https://user-images.githubusercontent.com/1438153/72280575-eb2ec200-3638-11ea-9609-4196400219f5.jpg)

## How to use

1. Install package: `npm i -S shopify-admin-api-typings`
2. Import typings in your code. (vscode should find the typings and auto import for you).

```js
import { Order, OrderConnection } from "shopify-admin-api-typings";
```

Here is how you can get strongly typed queries with apollo:

```ts
const QUERY_ORDERS = gql`
  query Orders {
    orders(first: 5) {
      edges {
        node {
          createdAt
        }
      }
    }
  }
`;

const {
  data: { orders },
} = await client.query<{ orders: OrderConnection }>({
  query: QUERY_ORDERS,
});
```

Use the `Partial<>` utility if you want to create subsets of the type without getting type errors.

```js
const variant: Partial<Order> = { name: "#001" };
```

## Build your own typings

If you want to customise the namings or the Admin API version you can build your own typings. To do that, you need to create a Private app with Admin API enabled.

1. Clone this repository

```sh
git clone https://github.com/caki0915/shopify-admin-api-typings.git
```

2. Rename `.env.example` to `.env`.
3. Inside `.env` add your Shopify Admin API endpoint and access-token.
4. Run `npm start`
