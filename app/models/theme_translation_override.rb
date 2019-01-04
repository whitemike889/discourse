class ThemeTranslationOverride < ActiveRecord::Base
  belongs_to :theme

  after_commit do
    theme.clear_cached_settings!
    theme.remove_from_cache!
    theme.theme_fields.where(target_id: Theme.targets[:translations]).update_all(value_baked: nil)
  end
end

# == Schema Information
#
# Table name: theme_translation_overrides
#
#  id              :bigint(8)        not null, primary key
#  theme_id        :integer          not null
#  locale          :string           not null
#  translation_key :string           not null
#  value           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
