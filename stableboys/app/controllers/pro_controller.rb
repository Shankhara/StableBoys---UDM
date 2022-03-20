# frozen_string_literal: true

class ProController < ApplicationController
  def create_contract
    Contract.create!(name: params[:name], goal: params[:goal])
    render json: { status: 'success' }, status: :ok
  rescue
    render json: { status: 'failed' }, status: :ok
  end
end
