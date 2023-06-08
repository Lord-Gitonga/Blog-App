class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :desc
      t.string :img
      t.integer :user_id
    end
  end
end
