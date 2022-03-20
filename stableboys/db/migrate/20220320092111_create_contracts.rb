# frozen_string_literal: true

class CreateContracts < ActiveRecord::Migration[6.1]
  def change
    create_table :contracts do |t|
      t.string :name
      t.integer :goal
      t.timestamps
    end
  end
end
