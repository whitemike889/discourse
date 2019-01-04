import BufferedContent from "discourse/mixins/buffered-content";
import SettingComponent from "admin/mixins/setting-component";
import computed from "ember-addons/ember-computed-decorators";

export default Ember.Component.extend(BufferedContent, SettingComponent, {
  layoutName: "admin/templates/components/site-setting",
  setting: Ember.computed.alias("translation"),
  type: "string",

  @computed("translation.key")
  settingName(key) {
    return key;
  },

  _save() {
    return this.get("model").saveTranslation(
      this.get("translation.key"),
      this.get("buffered.value")
    );
  }
});
