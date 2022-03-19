# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :wallet_address, default: nil
      t.integer :purchase_amount, default: 0
      t.timestamps
    end
  end
end
