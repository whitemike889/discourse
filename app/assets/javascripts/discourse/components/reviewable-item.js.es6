import { getOwner } from "discourse-common/lib/get-owner";
import computed from "ember-addons/ember-computed-decorators";

let _components = {};

export default Ember.Component.extend({
  tagName: "",

  // Find a component to render, if one exists. For example:
  // `ReviewableUser` will return `reviewable-user`
  @computed("reviewable.type")
  reviewableComponent(type) {
    if (_components[type] !== undefined) {
      return _components[type];
    }

    let dasherized = Ember.String.dasherize(type);
    let template = Ember.TEMPLATES[`components/${dasherized}`];
    if (template) {
      _components[type] = dasherized;
      return dasherized;
    }
    _components[type] = null;
  }
});
