class Post < ApplicationRecord
    has_one_attached :template,dependent: :destroy
    has_rich_text :post_body 
    belongs_to :user 
    has_many :comments ,dependent: :destroy
    has_many :likes,dependent: :destroy

    validates :title ,presence: true
    validates :post_body,presence: :true
end
