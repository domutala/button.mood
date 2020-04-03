export const ripple = (el: HTMLElement, evt: any, color: any = '') => {
  const offset = el.getBoundingClientRect();
  const x = evt.clientX - offset.left;
  const y = evt.clientY - offset.top;

  let time = 0.6;

  if (el.clientWidth > 150) {
    time = 1.2;
  }

  const rippleContainer = document.createElement('div');
  rippleContainer.className = 'md-ripple';

  const rippleEffect = document.createElement('div');
  rippleEffect.className = 'effect';

  // style
  rippleEffect.style.backgroundColor = color;
  rippleEffect.style.transition = `all ${time}s ease`;
  rippleEffect.style.left = `${x}px`;
  rippleEffect.style.top = `${y}px`;

  // insert in
  rippleContainer.appendChild(rippleEffect);
  el.appendChild(rippleContainer);

  rippleEffect.style.width = `${el.clientWidth * 2.5}px`;
  rippleEffect.style.height = `${el.clientWidth * 2.5}px`;
  rippleEffect.style.opacity = `1`;

  setTimeout(() => {
    removeEffect();
  }, 300);

  const removeEffect = () => {
    rippleEffect.style.transition = `all 0.${time * 600}s ease`;
    rippleEffect.style.opacity = `0`;
    setTimeout(() => {
      el.removeChild(rippleContainer);
    }, time * 300);
  };
};
