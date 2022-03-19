# frozen_string_literal: true

class UserController < ApplicationController
  def purchase_amount
    user = User.first
    render json: { status: user.purchase_amount >= 100 }, status: :ok
  end

  def purchase
    user = User.first
    user.update!(purchase_amount: user.purchase_amount + params[:price])
  end
end
