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
class Todo < ApplicationRecord
  belongs_to :user 
end
