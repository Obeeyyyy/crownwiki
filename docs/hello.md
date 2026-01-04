---
sidebar_label: 'Hi!'
sidebar_position: 1
title: My document title
description: My document description
---

import ConfigComponent from '@site/src/components/WikiFeatures/ConfigComponent'
import Highlight from '@site/src/components/Highlight';

<Highlight color="#25c2a0">Docusaurus green</Highlight>

# Hello

This is my **first Docusaurus document**!

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

:::tip[My tip]

Use this awesome feature option

:::

:::danger[Take care]

This action is dangerous

:::

:::warning[Warning]

This is a warning

:::

:::info[Information]

This is a warning

:::


```yml
test:
 - A
```

<ConfigComponent data="test data"> Test my self </ConfigComponent>