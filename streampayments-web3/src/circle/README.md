# Circle APIs Node.js Library

npm version npm downloads

The Circle Node library provides convenient access to the Circle API for applications written in server-side JavaScript. For the API reference, see the Circle API docs.

### Requirements
Node 10 or higher.

### Installation
Install the package with:
´´´´
npm install @circle-fin/circle-sdk --save

#### or
´´´´
yarn add @circle-fin/circle-sdk
´´´´
### Usage
In order to make API calls, you will need an API key. Once you obtain one, you can use this SDK to make API calls as follows:
´´´´
import { Circle, CircleEnvironments, SubscriptionRequest } from "@circle-fin/circle-sdk";

// Initialize API driver
const circle = new Circle(
    '<your-api-key>',
    CircleEnvironments.sandbox      // API base url
);

async function createSubscription() {
    const subscribeReq: SubscriptionRequest = {
        endpoint: "<https://example.org/handler/for/notifications>"
    };

    const subscribeResp = await circle.subscriptions.createSubscription(subscribeReq);
    console.log(subscribeResp.data);
}
createSubscription();
´´´´
### Development
Clone this repo and install dependencies using
´´´´´
yarn install
´´´´
Run the codegen command to generate the source code for this SDK from the sdk.json OpenAPI specification file:
´´´´
yarn gen-sd
´´´´
### Run all tests:
´´´´
yarn test
´´´´

### Contributions
Please follow the Conventional Commits format for all commits when creating a contributing pull request for this repo.
