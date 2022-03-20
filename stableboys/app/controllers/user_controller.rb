# frozen_string_literal: true

class UserController < ApplicationController
  def purchase_amount
    user = User.first
    contract = Contract.first
    status = false
    status = user.purchase_amount >= contract.goal if contract
    render json: { status: status, purchase_amount: user.purchase_amount }, status: :ok
  end

  def purchase
    user = User.first
    user.update!(purchase_amount: user.purchase_amount + params[:price])
    contract = Contract.first
    status = false
    status = user.purchase_amount >= contract.goal if contract
    render json: { status: status }, status: :ok
  end

  def wallet_address
    user = User.first
    user.update!(wallet_address: params[:wallet_address])
    render status: :ok
  rescue
    render status: :bad_request
  end
end
