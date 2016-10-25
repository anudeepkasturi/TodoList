class Todo < ActiveRecord::Base
  validates_presence_of :title, :body
  validates :done, inclusion: {in: [true, false]}

end
