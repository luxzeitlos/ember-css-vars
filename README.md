ember-css-vars
==============================================================================

A [ember modifier](https://emberjs.github.io/rfcs/0373-Element-Modifier-Managers.html) to apply [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).
This gives a save way to expose data from javascript to css.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-css-vars
```


Usage
------------------------------------------------------------------------------

**css**
```
#myElement {
  background: var(--my-color);
}
```

**hbs**
```
<div id="myElement" {{css-vars my-color="blue"}}>
  This will have a blue background
</div>
```


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
