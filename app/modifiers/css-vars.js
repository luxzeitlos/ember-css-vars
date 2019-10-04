import Ember from 'ember';

export default Ember._setModifierManager(
  () => ({
    createModifier(factory) {
      return new factory.class();
    },

    installModifier(instance, element, args) {
      instance.element = element;
      instance.execute(args.positional, args.named);
    },

    updateModifier(instance, args) {
      instance.execute(args.positional, args.named);
    },
    destroyModifier() {},
  }),
  class PerformanceModifier {
    execute(positional, named) {
      Object.entries(Object.assign({}, ...positional, named))
        .map(([key, val]) => [key.startsWith('--') ? key : `--${key}`, val])
        .forEach(([key, val]) => {
          this.element.style.setProperty(key, val);
        });
    }
  }
);
