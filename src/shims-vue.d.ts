declare module 'vue/types/vue' {
  export interface Vue {
    readonly $md: any;
  }
}

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
