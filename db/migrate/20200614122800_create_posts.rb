class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title,null: false
      t.string :body,null: false
      t.string :image
      t.references :user, type: :integer, foreign_key: true

      t.timestamps
    end
    add_index :posts, :title
  end
end
