Rails.application.routes.draw do
  namespace :api do
    resources :users do
    end
  end
end