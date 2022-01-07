Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :destroy]
  resources :posts, only: [:index, :show, :create, :destroy]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
