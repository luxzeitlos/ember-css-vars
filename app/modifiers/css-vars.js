import Ember from 'ember';

export default Ember._setModifierManager(
  () => ({
    createModifier(factory) {
      return new factory.class();
    },

    installModifier(instance, element, args) {
      instance.element = element;
      instance.execute(args.named);
    },

    updateModifier(instance, _element, args) {
      instance.execute(args.named);
    },
    destroyModifier() {},
  }),
  class PerformanceModifier {
    execute(args) {
      Object.entries(args)
        .map(([key, val]) => [key.startsWith('--') ? key : `--${key}`, val])
        .forEach(([key, val]) => {
          this.element.style.setProperty(key, val);
        });
    }
  }
);
