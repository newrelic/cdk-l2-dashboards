<a href="https://opensource.newrelic.com/oss-category/#community-project"><picture><source media="(prefers-color-scheme: dark)" srcset="https://github.com/newrelic/opensource-website/raw/main/src/images/categories/dark/Community_Project.png"><source media="(prefers-color-scheme: light)" srcset="https://github.com/newrelic/opensource-website/raw/main/src/images/categories/Community_Project.png"><img alt="New Relic Open Source community project banner." src="https://github.com/newrelic/opensource-website/raw/main/src/images/categories/Community_Project.png"></picture></a>

[//]: # (CDK related badges)
[![npm version](https://badge.fury.io/js/cdk-remote-stack.svg)](https://badge.fury.io/js/cdk-l2-dashboards)
[![PyPI version](https://badge.fury.io/py/cdk-remote-stack.svg)](https://badge.fury.io/py/cdk-l2-dashboards)
[![release](https://github.com/pahud/cdk-remote-stack/actions/workflows/release.yml/badge.svg)](https://github.com/newrelic/cdk-l2-dashboards/actions/workflows/release.yml)

#  CDK L2 Dashboards

[AWS CDK](https://aws.amazon.com/cdk/) [Level 2](https://docs.aws.amazon.com/cdk/v2/guide/constructs.html#constructs_lib) [Constructs](https://constructs.dev/) for [New Relic Dashboards via the NerdGraph Graphql API.](https://docs.newrelic.com/docs/apis/nerdgraph/examples/nerdgraph-dashboards/)

This TypeScript code is [JSII](https://aws.github.io/jsii/) compatible and can be cross compiled to any [JSII supported language](https://aws.github.io/jsii/overview/features/#target-languages).

## Installation
```bash
npm install @newrelic/cdk-l2-dashboards
```

## Use

[//]: # ( TODO Ensure all examples compile)
### Create Dashboard
```ts
dm = new DashboardManager(stack, 'testing-stack', { key: TestConfiguration.LicenseKey });
dashboardInput = {
  permissions: 'PUBLIC_READ_WRITE',
  description: 'L2 CDK Dashboard Create Test',
  name: 'L2DashboardCreate',
  pages: [{
    description: 'Page Description',
    name: 'Page Name',
    widgets: [{ title: 'Widget Title', configuration: { markdown: { text: 'Markdown text' } } }],
  }],
};
const result = await dm.create( 1074083, dashboardInput );

```

### Update Dashboard
```ts
```

### Delete Dashboard
```ts
```

### Read Dashboard
```ts
```

### List Dashboards
```ts
```

## Documentation
[See API.md](./API.md)

## Building
Build with [`projen`](https://github.com/projen/projen), [see this tutorial to get started.](https://dev.to/aws-builders/a-beginner-s-guide-to-create-aws-cdk-construct-library-with-projen-5eh4)
```bash
npx projen build
```

## Testing
Test with [Jest](https://jestjs.io/). Configure your New Relic License key in `local/setupJest.ts` like this
```javascript
export class TestConfiguration {
   public static LicenseKey: string = 'YOUR_NEWRELIC_LICENSE_KEY_HERE';
}
```
```bash
npx projen test
```

## Support

New Relic hosts and moderates an online forum where you can interact with New Relic employees as well as other customers to get help and share best practices. Like all official New Relic open source projects, there's a related Community topic in the New Relic Explorers Hub. You can find this project's topic/threads here:

https://forum.newrelic.com/

## Contribute

We encourage your contributions to improve CDK L2 Dashboards! Keep in mind that when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project.

If you have any questions, or to execute our corporate CLA (which is required if your contribution is on behalf of a company), drop us an email at opensource@newrelic.com.

**A note about vulnerabilities**

As noted in our [security policy](../../security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

If you would like to contribute to this project, review [these guidelines](./CONTRIBUTING.md).

To all contributors, we thank you!  Without your contribution, this project would not be what it is today.  We also host a community project page dedicated to [CDK L2 Dashboards](<LINK TO https://opensource.newrelic.com/projects/... PAGE>).

## License
CDK L2 Dashboards is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.
The CDK L2 Dashboards also uses source code from third-party libraries. You can find full details on which libraries are used and the terms under which they are licensed in the third-party notices document.
