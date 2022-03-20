Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :user, only: [] do
    collection do
      get :purchase_amount
      post :purchase
      post :wallet_address
    end
  end
  resources :pro, only: [] do
    collection do
      post :create_contract
      get :contract
    end
  end
end
