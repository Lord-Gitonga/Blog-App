class AddCatToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :cat, :string
  end
end
