# Button.mood

The best Vue.js dropdown.

## Description

Button.mood is an intelligent button component designed with Vue.js. It can be integrated into any Vue.js project and with several options and functionalities.

## Documentation

[Documentation](https://domutala.github.io/button-mood)

## Installing

```PowerShell
# npm
npm i --save button.mood

# yarn
yarn add button.mood

```

## Usage

Button.mood is very simple to use.

### Overall use

```Javascript
import Vue from 'vue';
import MdButton, { ButtonOptions } from 'button.mood';
import 'button.mood/dist/button.css';

const btnOptions = {
  color: '#fcdc2a',
  borderWidth: 2,
};

Vue.use(MdButton, btnOptions);
```

### Single file

```Vue
<script lang="js">
import { MdButton } from "button.mood";
import 'button.mood/dist/button.css';

export default {
  components: {
    MdButton
  }
}
</script>
```

### In your vue.js file

After that you can use the component in your code as follows.

```Vue
<template>
  <div id="app">
    <md-button color="yellow" rounded="pill">
      my button
    </md-button>
  </div>
</template>
```

## Props

### tag

- **type**: _string_
- **default**: _'button'_

This property takes as value any valid html tag or Vue.js component such as **router-link**.

### type

- **type**: _string_
- **value**: _'default'_ | _'outline'_ | _'link'_ | _'relief'_
- **default**: _'default'_

### color

- **type**: _any_

We use the **[color](https://github.com/Qix-/color)** library to manage colors. Set the values for individual channels with _alpha_, _red_, _green_, _blue_, _hue_, _saturationl (hsl)_, _saturationv (hsv)_, _lightness_, _whiteness_, _blackness_, _cyan_, _magenta_, _yellow_, _black_.

### size

- **type**: _string_
- **value**: _'default'_ | _'sm'_ | _'md'_ | _'lg'_ | _'xl'_
- **default**: _'default'_

### rounded

- **type**: _string_
- **value**: _'default'_ | _'scare'_ | _'sm'_ | _'pill'_ | _'circle'_
- **default**: _'default'_

### on-hover

- **type**: _any_
- **value**: _'elevate'_ | _'scale'_ | _'shadow'_ | _'shadow-sm'_ | _'shadow-lg'_ | _null_

### block

- **type**: _boolean_
- **value**: _true'_ | _false'_
- **default**: _false_

### no-border

- **type**: _boolean_
- **value**: _true'_ | _false'_
- **default**: _false_

### disabled

- **type**: _boolean_
- **value**: _true'_ | _false'_
- **default**: _false_

### router props

Si vous voulez que le composant se comporte comme le composant native de **[vue-router](https://router.vuejs.org/)**, **router-link**, définissez la propriété _tag_ à _'router-link'_.

You can set all the properties of _router-link_ provided that these are preceded by the word _'router -'_. For example instead of putting _to_ you put _router-to_, instead of _active-class_, put _router-active-class_, instead of _tag_, _router-tag_. You can see all the properties of _'router-link'_ [here](https://router.vuejs.org/api/#router-link-props).

## Author

**[@domutala](https://github.com/domutala)**

## License

[MIT](https://github.com/domutala/button.mood/blob/master/LICENCE/)
