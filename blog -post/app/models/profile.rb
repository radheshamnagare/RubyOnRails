class Profile < ApplicationRecord

    has_one_attached :profile_photo ,dependent: :destroy
    has_rich_text :about_profile
    belongs_to :user

    validates :first_name ,presence: :true
    validates :last_name,presence: :true 
    
end
