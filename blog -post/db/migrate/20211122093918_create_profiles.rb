class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.string :first_name,null: false
      t.string :last_name,null: false
      t.string :contact,unique: true
      t.timestamps
    end
  end
end
