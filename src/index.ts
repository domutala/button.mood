import * as mComponents from './components';
import { buttonOptions } from './utils/variables';
export { ButtonOptions } from './utils/variables';

const install = (Vue: any, options: any = {}) => {
  // Components
  Object.values(mComponents).forEach(mComponent => {
    Vue.use(mComponent);
  });

  const btnOptions = buttonOptions as any;

  for (const key in options) {
    if (options.hasOwnProperty(key)) {
      btnOptions[key] = options[key];
    }
  }

  Vue.prototype.$mdBtn = btnOptions;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export const MdButton = mComponents.MdButton;
export default install;
