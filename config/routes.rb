Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }

  resources :post, only: %i(index create update destroy)
  resources :like, only: %i(create update destroy)
  resources :comment, only: %i(create update destroy)
end
