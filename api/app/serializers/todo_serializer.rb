# == Schema Information
#
# Table name: todos
#
#  id         :bigint           not null, primary key
#  title      :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :username
  belongs_to :user

  def username
    object.user.name
  end
end
