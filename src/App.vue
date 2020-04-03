<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  // flex-wrap: wrap;
  min-width: 756px;
  overflow: auto;

  .md-btn {
    margin: 0.5em;
  }
}
</style>

<template>
  <div id="app">
    <div>
      <md-button on-hover="shadow" block>
        default
      </md-button>
      <md-hey>hey</md-hey>
    </div>
    <div class="container">
      <md-button on-hover="shadow">
        default
      </md-button>
      <md-button type="outline">
        outline
      </md-button>
      <md-button type="relief">
        Button relief
      </md-button>
      <md-button type="link">
        Button link
      </md-button>
    </div>

    <div class="container">
      <md-button size="sm">
        Small
      </md-button>
      <md-button size="md">
        Medium
      </md-button>
      <md-button>
        Default
      </md-button>
      <md-button size="lg">
        Large
      </md-button>
      <md-button size="xl">
        Extra large
      </md-button>
    </div>

    <div class="container">
      <md-button with-icon size="sm">
        <svg class="icon" viewBox="0 0 24 24">
          <g fill="#000000">
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            ></path>
          </g>
        </svg>
        <span>small</span>
      </md-button>
      <md-button with-icon size="md">
        <svg class="icon" viewBox="0 0 24 24">
          <g fill="#000000">
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            ></path>
          </g>
        </svg>
        <span>Medium</span>
      </md-button>
      <md-button with-icon>
        <svg class="icon" viewBox="0 0 24 24">
          <g fill="#000000">
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            ></path>
          </g>
        </svg>
        <span>Default</span>
      </md-button>
      <md-button with-icon size="lg">
        <svg class="icon" viewBox="0 0 24 24">
          <g fill="#000000">
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            ></path>
          </g>
        </svg>
        <span>Large</span>
      </md-button>
      <md-button with-icon size="xl">
        <svg class="icon" viewBox="0 0 24 24">
          <g fill="#000000">
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            ></path>
          </g>
        </svg>
        <span>Extra large</span>
      </md-button>
    </div>

    <div class="container">
      <md-button with-icon size="sm">
        <i class="icon">i</i>
        <span>small</span>
      </md-button>
      <md-button with-icon size="md">
        <i class="icon">i</i>
        <span>Medium</span>
      </md-button>
      <md-button with-icon>
        <i class="icon">i</i>
        <span>Default</span>
      </md-button>
      <md-button with-icon size="lg">
        <i class="icon">i</i>
        <span>Large</span>
      </md-button>
      <md-button with-icon size="xl">
        <i class="icon">i</i>
        <span>Extra large</span>
      </md-button>
    </div>

    <div class="container">
      <md-button icon-only size="sm">
        <svg class="icon" viewBox="0 0 24 24">
          <g fill="#000000">
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            ></path>
          </g>
        </svg>
      </md-button>
      <md-button icon-only size="md">
        <svg class="icon" viewBox="0 0 24 24">
          <g fill="#000000">
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            ></path>
          </g>
        </svg>
      </md-button>
      <md-button icon-only>
        <svg class="icon" viewBox="0 0 24 24">
          <g>
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            ></path>
          </g>
        </svg>
      </md-button>
      <md-button icon-only size="lg">
        <svg class="icon" viewBox="0 0 24 24">
          <g fill="#000000">
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            ></path>
          </g>
        </svg>
      </md-button>
      <md-button icon-only size="xl">
        <svg class="icon" viewBox="0 0 24 24">
          <g fill="#000000">
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            ></path>
          </g>
        </svg>
      </md-button>
    </div>

    <div class="container">
      <md-button with-icon rounded="scare">
        rounded scare
      </md-button>
      <md-button with-icon rounded="sm">
        rounded sm
      </md-button>
      <md-button rounded="default">
        <span>Rounded default</span>
      </md-button>
      <md-button rounded="lg">
        <span>Rounded lg</span>
      </md-button>
      <md-button with-icon rounded="pill">
        rounded pill
      </md-button>
      <md-button icon-only rounded="circle">
        <svg class="icon" viewBox="0 0 24 24">
          <g>
            <path
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
            ></path>
          </g>
        </svg>
      </md-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MdButton as mdHey } from './index';

@Component({ components: { mdHey } })
export default class App extends Vue {}
</script>
