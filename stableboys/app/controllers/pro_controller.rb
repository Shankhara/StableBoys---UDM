# frozen_string_literal: true

class ProController < ApplicationController

  def create_contract
    Contract.create!(name: params[:name], goal: params[:goal], address: params[:address], network: params[:network], cid: params[:cid])
    render json: { status: 'success' }, status: :ok
  rescue
    render json: { status: 'failed' }, status: :ok
  end

  def contract
    contract = Contract.first
    render json: { contract: contract }, status: :ok
  end
end
