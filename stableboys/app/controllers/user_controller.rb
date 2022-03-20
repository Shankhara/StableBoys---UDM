# frozen_string_literal: true

class UserController < ApplicationController
  def purchase_amount
    user = User.first
    contract = Contract.first
    status = false
    status = user.purchase_amount >= contract.goal if contract
    render json: { status: status }, status: :ok
  end

  def purchase
    user = User.first
    user.update!(purchase_amount: user.purchase_amount + params[:price])
  end
end
