# frozen_string_literal: true

class CreateContracts < ActiveRecord::Migration[6.1]
  def change
    create_table :contracts do |t|
      t.string :name
      t.string :address
      t.string :network
      t.integer :goal
      t.string :cid
      t.timestamps
    end
  end
end
