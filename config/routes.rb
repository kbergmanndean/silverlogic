Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create]
  resources :posts, only: [:index, :create]
  post "/login" to: "sessions#create"
  delete "/logout" to: "sessions#destroy"
end
