# Shopify Admin API Types

![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

Auto-generated Typescript type definitions for **Shopify Admin API**. Current version includes all types for version: `2020-04`.

For other versions of the Shopify Admin API, use different branches of this package, as stated:
- branch `2020-04` of this package uses version `2020-04` of the Shopify Admin API
- branch `2021-04` of this package uses version `2021-04` of the Shopify Admin API

If you're looking for typings for **Shopify Storefront Api**, checkout the [shopify-storefront-api-typings](https://www.npmjs.com/package/shopify-storefront-api-typings) package.

![types](https://user-images.githubusercontent.com/1438153/72280575-eb2ec200-3638-11ea-9609-4196400219f5.jpg)

## How to use

1. Install package: `npm i -D shopify-admin-api-typings`, or, alternatively, specify a particular branch to use, e.g.: `npm i -D shopify-admin-api-typings#2021-04`.
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

2. Copy `.env.example` to `.env`.
3. Inside `.env` add your Shopify Admin API endpoint and access-token.
4. Run `npm start`

## Contribute your typings back to this repo as a new branch

After building your own typings, feel free to contribute back to this repo:

```shell
% git checkout -b {your shopify Admin API version # here; e.g., 2021-04}
% git add .
% git commit -m "{your shopify Admin API version # here or whatever message; e.g. 2021-04}"
% git push -u origin {your shopify Admin API version # here; e.g., 2021-04}
```