import type { App } from 'vue'

import TransitionExpand from '@/components/TransitionExpand.vue'

export type { TransitionExpandProps } from '@/components/TransitionExpand.vue'

export { TransitionExpand }

export interface TransitionExpandPluginOptions {
  componentName?: string
  duration?: number
}

export default {
  install: (app: App, options: TransitionExpandPluginOptions = {}) => {
    app.component(options?.componentName ?? 'TransitionExpand', {
      extends: TransitionExpand,
      setup: TransitionExpand.setup,
      props: {
        duration: {
          default: options?.duration
        }
      }
    })
  }
}
