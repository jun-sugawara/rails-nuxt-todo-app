# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  email      :string(255)
#  name       :string(255)
#  uid        :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :todos 
end
