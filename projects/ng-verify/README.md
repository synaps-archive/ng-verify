# ng-verify

> Synaps Angular Verify SDK

[![NPM](https://img.shields.io/npm/v/@synaps-io/ng-verify.svg)](https://www.npmjs.com/package/@synaps-io/ng-verify) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**Synaps is an all-in-one compliance platform**. It offers a simple, fast and secure way to meet compliance requirements at scale.

[Visit Synaps.io](https://synaps.io) | [Read the Synaps documentation](https://docs.synaps.io)

![enter image description here](https://storage.googleapis.com/synaps-docs-media/synaps-verify.png)

## Install
### With npm

```bash
npm install @synaps-io/ng-verify
```

### With yarn

```bash
yarn add @synaps-io/ng-verify
```
## Import
Go to `app.module.ts` then add:

```ts
...
import { NgVerifyModule } from "@synaps-io/ng-verify";

@NgModule({
  declarations: [...],
  imports: [..., NgVerifyModule],
  providers: [...],
  bootstrap: [...]
})
export class AppModule {}
```

## Usage

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <synaps-verify 
    sessionId="f3243476-cec44c4a-5565ccd6-e7e9622d"
    [color]="{ primary: '212b39', secondary: 'ffffff' }"
    lang="en"
    service="individual"
    (ready)="print('ready')"
    (finish)="print('finish')"
    ></synaps-verify>
  </div>
  `
})
export class AppComponent {
  title = 'test-angular';
  print(data: any) {
    console.log(data);
  }
}
```

### Data list

| Prop name          | Prop type                                                                                           | Default | Required | Description                                                                   |
| ------------------ | --------------------------------------------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------------- |
| `sessionId`        | `string`                                                                                            | `''`    | Y        | Session can be referred as a customer verification session. [More info](https://docs.synaps.io/manager-1/sessions)                                       |
| `service`          | `string`                                                                                            | `''`  | Y        | **individual** - for know your customer **corporate** - for know your business                   |
| `lang`      | `string`                                                                       | `'en'`  | N        | Event listener called on every open/close action                              |
| `tier`      | `int`                                                                       | `null`  | N        | Tier is a simply way to divide your workflow into small pieces. It is very useful when you offer different features based on the verification level of your customer.  [More info](https://docs.synaps.io/manager-1/apps/individual/tiers)                           |
| `color`      | `{primary : string, secondary: string}`                                                                     | `null`  | N        | You can set a primary color and a secondary color, it will create a verification flow tailored to your compliance needs and your brand. |
| `ready`             | `event`                                                                                           | `null` | N        | Event listener called when the page is fully loaded                                       |
| `finish`   | `event`                                                                                           | `null` | N        | Event listener called when the user finished verification                     |

## Examples
[![Edit angular-verify](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/angular-verify-5oe1bu?fontsize=14&hidenavigation=1&theme=dark)
## License

Apache 2.0 © [Synaps](https://www.synaps.io/)