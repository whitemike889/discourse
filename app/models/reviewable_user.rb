require_dependency 'reviewable'

class ReviewableUser < Reviewable
  def self.create_for(user)
    create(
      created_by_id: Discourse.system_user.id,
      target: user
    )
  end

  # Update's the user's fields for approval but does not save. This
  # can be used when generating a new user that is approved on create
  def self.setup_approval(user, approved_by)
    user.approved = true
    user.approved_by ||= approved_by
    user.approved_at ||= Time.zone.now
  end
end
