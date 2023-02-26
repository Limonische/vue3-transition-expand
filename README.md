# Vue Transition Expand

This is a Vue 3 component that can transition one or multiple elements to their auto size.

Initial inspiration was taken from an [article](https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/) by Markus Oberlehner.

## Why this component

Although some similar components do exist, this one provides several unique benefits which are listed below:

1. Can handle multiple child elements
2. Works both vertically and horizontally
3. Automatically handles margins and paddings on child elements

## Contents

- [Installation](#installation)
- [Imports](#imports)
  - [As a local component](#as-a-local-component)
  - [As a Vue plugin](#as-a-vue-plugin)
  - [As a Nuxt plugin](#as-a-nuxt-plugin)
- [Usage](#usage)
  - [Single child element](#single-child-element)
  - [Multiple-child-elements](#multiple-child-elements)
  - [Horizontal mode](#horizontal-mode)
- [Options](#options)

## Installation

```sh
npm i @limonische/vue3-transition-expand
# or
yarn add @limonische/vue3-transition-expand
# or
pnpm add @limonische/vue3-transition-expand
```

## Imports

### Styles

For the component to work properly you need to import styles either globally or locally.

```ts
import '@limonische/vue3-transition-expand/dist/style.css'
```

### As a local component

```ts
import { TransitionExpand } from '@limonische/vue3-transition-expand'
```

### As a Vue plugin

```ts
import TransitionExpand from '@limonische/vue3-transition-expand'

Vue.use(TransitionExpand, {
  // global options
})
```

### As a Nuxt plugin

```ts
import TransitionExpand from '@limonische/vue3-transition-expand'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(TransitionExpand, {
    // global options
  })
})
```

## Usage

### Single child element

For a single child element the usage is the same as with default `Transition` component from Vue.

```ts
import { ref } from 'vue'
import { TransitionExpand } from '@limonische/vue3-transition-expand'

const show = ref(false)
```

```html
<TransitionExpand>
  <div v-if="show">Lorem ipsum dolor sit amet.</div>
</TransitionExpand>
<button @click="show = !show">Toggle</button>
```

### Multiple child elements

For the component to work with multiple child elements you need to provide it with `tag` prop. As soon as the prop is provided the component starts to behave like the `TransitionGroup` component from Vue and animates all of its children.

```ts
import { ref } from 'vue'
import { TransitionExpand } from '@limonische/vue3-transition-expand'

const items = ref([{ id: 1 }, { id: 2 }])
const addItem = (id) => items.value.push({ id })
```

```html
<TransitionExpand tag="div">
  <div v-for="item in items" :key="item.id">{{ item.id }}</div>
</TransitionExpand>
<button @click="addItem(3)">Add item</button>
```

### Horizontal mode

To make this component work horizontally instead of vertically you need to provide it with `direction` prop set to `horizontal`

```html
<TransitionExpand direction="horizontal">
  <div v-if="show">Lorem ipsum dolor sit amet.</div>
</TransitionExpand>
```

## Options

### Component props

```ts
export interface TransitionExpandProps {
  tag?: keyof HTMLElementTagNameMap | null // default: null
  direction?: 'vertical' | 'horizontal' // default: 'vertical'
  duration?: number // default: 300
}
```

### Global plugin options

```ts
export interface TransitionExpandPluginOptions {
  componentName?: string // default: 'TransitionExpand'
  duration?: number // default: 300
}
```

All of the interfaces are exported from the library for better extension capabilities.
