<template>
  <component
    :disabled="disabled"
    v-on="listeners"
    class="md-btn"
    v-bind:is="tag"
    :class="{
      'icon-only': iconOnly,
      'with-icon': withIcon,
      block: block,
      link: type === 'link',
      relief: type === 'relief'
    }"
    :style="style"
    :hidden="hidden"
    :to="routerTo"
    :tag="routerTag"
    :raplace="routerReplace"
    :append="routerAppend"
    :active-class="routerActiveClass"
    :exact-active-class="routerExactActiveClass"
    :exact="routerExact"
    :event="routerEvent"
  >
    <div class="md-btn-container">
      <slot></slot>
    </div>
    <span v-if="type === 'relief'" class="relief"></span>
  </component>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import {
  buttonOptions,
  ButtonStyle,
  PossiblesRoundedValues,
  PossiblesBoxShadowValues,
  PossiblesValues
} from '@/utils/variables';
import { ripple } from '@/utils/ripple';
import Color from 'color';
import '@/assets/styles/index.scss';

@Component
export default class MdButton extends Vue {
  @Prop({ type: String, default: 'button' })
  private tag: any;

  // type
  @Prop({
    type: String,
    default: 'default',
    validator: value => ['default', 'outline', 'link', 'relief'].includes(value)
  })
  private type: any;

  // size
  @Prop({
    type: String,
    default: 'default',
    validator: value => ['sm', 'lg', 'md', 'xl', 'default'].includes(value)
  })
  private size: any;

  // rounded
  @Prop({
    type: String,
    default: 'default',
    validator: value =>
      ['scare', 'sm', 'lg', 'pill', 'circle', 'default'].includes(value)
  })
  private rounded: any;

  // color
  @Prop({ type: String })
  private color: any;

  // icon
  @Prop({ type: Boolean })
  private iconOnly: any;
  @Prop({ type: Boolean })
  private withIcon: any;

  // on-hover
  @Prop({
    validator: value =>
      ['elevate', 'scale', 'shadow', 'shadow-sm', 'shadow-lg', null].includes(
        value
      )
  })
  private onHover: any;

  @Prop({ type: Boolean })
  private noBorder: any;

  @Prop({ type: Boolean })
  private block: any;
  // disable
  @Prop({ type: Boolean })
  private disabled: any;
  // hidden
  @Prop({ type: Boolean })
  private hidden: any;

  // router
  @Prop()
  private routerTo: any;
  @Prop({ type: Boolean, default: false })
  private routerReplace: any;
  @Prop({ type: Boolean, default: false })
  private routerAppend: any;
  @Prop({ type: String, default: 'a' })
  private routerTag: any;
  @Prop({ type: String, default: 'router-link-active' })
  private routerActiveClass: any;
  @Prop({ type: String, default: 'router-link-exact-active' })
  private routerExactActiveClass: any;
  @Prop({ type: Boolean, default: false })
  private routerExact: any;
  @Prop({ type: [String, Array], default: 'click' })
  private routerEvent: any;

  // data
  private hasFocus: boolean = false;
  private style: ButtonStyle = {
    backgroundColor: '',
    color: '',
    width: '',
    height: '',

    // padding
    padding: '',
    paddingTop: '',
    paddingBottom: '',
    paddingLeft: '',
    paddingRight: '',
    paddingXlg: '',

    // font-size
    fontSize: '',
    lineHeight: '',

    borderWidth: '',
    borderRadius: '',
    borderColor: '',
    borderStyle: '',
    opacity: ''
  };
  private btnOptions = buttonOptions;

  public get listeners() {
    return {
      ...this.$listeners,
      click: (event: any) => {
        this.$emit('click', event);
      },
      dblclick: (event: any) => {
        this.$emit('dblclick', event);
      },

      focus: (event: any) => {
        this.$emit('focus', event);
      },
      focusin: (event: any) => {
        this.$emit('focusin', event);
      },
      focusout: (event: any) => {
        this.$emit('focusout', event);
      },

      blur: (event: any) => {
        this.$emit('blur', event);
      },
      scroll: (event: any) => {
        this.$emit('scroll', event);
      },
      resize: (event: any) => {
        this.$emit('resize', event);
      },

      keyup: (event: any) => {
        this.$emit('keyup', event);
      },
      keydown: (event: any) => {
        this.$emit('keydown', event);
      },
      keypress: (event: any) => {
        this.$emit('keypress', event);
      },

      mouseenter: (event: any) => {
        this.$emit('mouseenter', event);
      },
      mouseleave: (event: any) => {
        this.$emit('mouseleave', event);
      },
      mousedown: (event: any) => {
        this.$emit('mousedown', event);
      },
      mousemove: (event: any) => {
        this.$emit('mousemove', event);
      },
      mouseout: (event: any) => {
        this.$emit('mouseout', event);
      },
      mouseup: (event: any) => {
        this.$emit('mouseup', event);
      },
      mousewheel: (event: any) => {
        this.$emit('mousewheel', event);
      },

      touchstart: (event: any) => {
        this.$emit('touchstart', event);
      },
      touchmove: (event: any) => {
        this.$emit('touchmove', event);
      },
      touchcancel: (event: any) => {
        this.$emit('touchcancel', event);
      },
      touchend: (event: any) => {
        this.$emit('touchend', event);
      }
    };
  }
  private get el() {
    return this.$el as HTMLElement;
  }

  private get getColor() {
    return this.color || this.btnOptions.color || null;
  }

  private ssu(style: any): string {
    return `${style}px`;
  }

  private setSize() {
    const param: PossiblesValues = this.size;

    if (this.iconOnly) {
      if (this.btnOptions.size && this.btnOptions.size[param]) {
        const size = this.btnOptions.size[param];
        this.style.padding = '0';
        this.style.width = this.ssu(param);
        this.style.height = this.ssu(param);
      }
    } else if (this.size !== null) {
      if (this.btnOptions.padding && this.btnOptions.padding[param]) {
        const padding = this.btnOptions.padding[param];
        this.style.paddingTop = this.ssu(padding.y);
        this.style.paddingBottom = this.ssu(padding.y);
        this.style.paddingLeft = this.ssu(padding.x);
        this.style.paddingRight = this.ssu(padding.x);
      }
    }
  }

  private setFontSize() {
    const icons = this.$el.querySelectorAll('.icon');
    if (this.size !== null) {
      const param: PossiblesValues = this.size;

      if (
        this.btnOptions.fontSize &&
        this.btnOptions.fontSize[param] &&
        this.btnOptions.lineHeight &&
        this.btnOptions.lineHeight[param]
      ) {
        const fontSize = this.btnOptions.fontSize[param];
        const lineHeight = this.btnOptions.lineHeight[param];

        this.style.fontSize = this.ssu(fontSize);
        this.style.lineHeight = String(lineHeight);

        // icons
        if (icons.length) {
          icons.forEach(icon => {
            const i = icon as HTMLElement;

            if (icon.tagName === 'svg' || icon.tagName === 'img') {
              i.style.width = this.ssu(fontSize * 1.4);
              i.style.height = this.ssu(lineHeight * 1.3);
            } else {
              i.style.fontSize = this.ssu(fontSize * 1.4);
              i.style.lineHeight = `1`;
            }
          });
        }
      }
    }
  }

  private initRounded() {
    if (this.rounded !== null) {
      const param: PossiblesRoundedValues = this.rounded;
      if (this.btnOptions.rounded && this.btnOptions.rounded[param]) {
        this.style.borderRadius = this.ssu(this.btnOptions.rounded[param]);
      }
    }
  }

  private setFocus() {
    this.el.addEventListener('focusin', this.setFocusIn);
    this.el.addEventListener('focusout', this.setFocusOut);
  }
  private setFocusIn() {
    this.hasFocus = true;
    this.setColorHover();
  }
  private setFocusOut() {
    this.hasFocus = false;
    this.setColorNotHover();
  }

  private setColor() {
    if (this.getColor) {
      this.initColor();
    }
  }
  private initColor() {
    if (this.getColor) {
      const icons = this.$el.querySelectorAll('.icon');
      const color = Color(this.getColor);
      const colorYiq = color.isLight() ? '#000' : '#fff';
      const yiqValues = ['outline', 'link'];

      // bg-color
      const bgColor = yiqValues.includes(this.type)
        ? this.btnOptions.lightColor
        : color.toString();

      // text-color
      const textColor = yiqValues.includes(this.type)
        ? color.toString()
        : colorYiq;

      // border-color
      const bdColor =
        this.type === 'link' ? 'transparent' : color.darken(0.1).toString();

      this.style.backgroundColor = bgColor;
      this.style.color = textColor;
      this.style.borderColor = bdColor;

      // icon
      if (icons.length) {
        icons.forEach(icon => {
          const i = icon as HTMLElement;
          if (icon.tagName === 'svg') {
            i.style.fill = textColor;
          } else {
            this.style.color = textColor;
          }
        });
      }

      // relief
      if (this.type === 'relief') {
        const relief = this.$el.querySelector('.relief') as HTMLElement;
        if (relief) {
          relief.style.borderBottomColor = color.darken(0.16).toString();
        }
      }
    }
  }
  private setColorNotHover() {
    if (!this.hasFocus) {
      this.initColor();
    }
  }
  private setColorHover() {
    if (this.getColor) {
      const icons = this.$el.querySelectorAll('.icon');
      const color = Color(this.getColor);
      const colorYiq = color.isLight() ? '#000' : '#fff';

      // bg-color
      const bgColor =
        this.type === 'outline'
          ? color.toString()
          : this.type === 'link'
          ? this.btnOptions.lightColor
          : color.darken(0.2).toString();

      // text-color
      const textColor = this.type === 'link' ? color.toString() : colorYiq;

      this.style.backgroundColor = bgColor;
      this.style.color = textColor;

      // icon
      if (icons.length) {
        icons.forEach(icon => {
          const i = icon as HTMLElement;
          if (icon.tagName === 'svg') {
            i.style.fill = textColor;
          } else {
            this.style.color = textColor;
          }
        });
      }
    }
  }

  private setBorder() {
    if (!this.noBorder) {
      this.style.borderWidth = `${this.btnOptions.borderWidth}px`;
      this.style.borderStyle = 'solid';
    }
  }
  private setDisabled() {
    if (this.disabled) {
      this.style.opacity = '0.5';
    } else {
      this.style.opacity = '1';
    }
  }

  private setOnHover() {
    if (this.onHover) {
      this.initOnHover();
    }
  }
  private initOnHover() {
    this.style.boxShadow = undefined;
    this.style.transform = undefined;
  }
  private OnHoverTransformation() {
    if (this.onHover && this.onHover !== null) {
      if (this.onHover === 'elevate') {
        this.style.transform = `translateY(${this.ssu(
          this.btnOptions.elevate
        )})`;
      } else if (this.onHover === 'scale') {
        this.style.transform = `scale(${this.btnOptions.scale})`;
      } else {
        // box-shadow
        const params: PossiblesBoxShadowValues =
          this.onHover.split('-')[1] || 'default';
        if (this.btnOptions.boxShadow && this.btnOptions.boxShadow[params]) {
          this.style.boxShadow = this.btnOptions.boxShadow[params];
        }
      }
    }
  }

  // event
  private setEvents() {
    this.$el.removeEventListener('mouseenter', this.mouseEnter);
    this.$el.removeEventListener('mouseleave', this.mouseLeave);
    this.$el.removeEventListener('click', this.click);

    setTimeout(() => {
      this.$el.addEventListener('mouseenter', this.mouseEnter);
      this.$el.addEventListener('mouseleave', this.mouseLeave);
      this.$el.addEventListener('click', this.click);
    }, 0);
  }
  private mouseEnter() {
    this.OnHoverTransformation();
    this.setColorHover();
  }
  private mouseLeave() {
    this.setColorNotHover();
    this.initOnHover();
  }

  private click() {
    if (this.getColor) {
      const color = Color(this.getColor)
        .alpha(0.2)
        .darken(0.5)
        .toString();
      ripple(this.el, event, color);
    }
  }

  @Watch('noBorder')
  @Watch('disabled')
  @Watch('onHover')
  @Watch('iconOnly')
  @Watch('size')
  @Watch('rounded')
  @Watch('color')
  @Watch('type')
  private init() {
    if (this.$mdBtn) {
      this.btnOptions = this.$mdBtn;
    }

    setTimeout(() => {
      this.setSize();
      this.setFontSize();
      this.setBorder();
      this.initRounded();
      this.setColor();
      this.setFocus();
      this.setDisabled();
      this.setOnHover();

      this.setEvents();
    }, 0);
  }

  private mounted() {
    this.init();
  }
}
</script>
