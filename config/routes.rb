SocialStream::Application.routes.draw do
  devise_for :users, :controllers => {:omniauth_callbacks => 'omniauth_callbacks'}

  #======================== Document Routes ====================================
  resources :pictures
  resources :audios
  resources :videos

  resources :documents do
    get "download", :on => :member
  end

  # Social Stream subjects configured in config/initializers/social_stream.rb
  SocialStream.subjects.each do |actor|
    resources actor.to_s.pluralize do
      resources :pictures
      resources :audios
      resources :videos

      resources :documents do
        get "download", :on => :member
      end
    end
  end

  #====================== XMPP Routes===========================================
  match '/xmpp/setConnection' => "Xmpp#setConnection"
  match '/xmpp/unsetConnection' => "Xmpp#unsetConecction"
  match '/xmpp/setPresence' => "Xmpp#setPresence"
  match '/xmpp/unsetPresence' => "Xmpp#unsetPresence"
  match '/xmpp/resetConnection' => "Xmpp#resetConnection"
  match '/xmpp/synchronizePresence' => "Xmpp#synchronizePresence"
  match '/xmpp/updateSettings'=> "Xmpp#updateSettings"
  match '/chatWindow'=> "Xmpp#chatWindow"


  #====================== Linker Routes ========================================
  match 'linkser_parse' => 'linkser#index', :as => :linkser_parse

  #====================== Base Routes ==========================================
  #Background tasks
  resque_constraint = lambda do |request|
    #request.env['warden'].authenticate? and request.env['warden'].user.admin?
    true
  end

  constraints resque_constraint do
    mount Resque::Server, :at => "/resque"
  end

  match 'home' => 'home#index', :as => :home
  match 'home' => 'home#index', :as => :user_root # devise after_sign_in_path_for

  # Webfinger
  match '.well-known/host-meta',:to => 'frontpage#host_meta'

  # Social Stream subjects configured in config/initializers/social_stream.rb
  SocialStream.subjects.each do |actor|
    resources actor.to_s.pluralize do
      resource :like
      resource :profile
      resources :activities

      # Nested Social Stream objects configured in config/initializers/social_stream.rb
      #
      # /users/demo/posts
      (SocialStream.objects - [ :actor ]).each do |object|
        resources object.to_s.pluralize
      end
    end
  end

  # Social Stream objects configured in config/initializers/social_stream.rb
  #
  # /posts
  (SocialStream.objects - [ :actor ]).each do |object|
    resources object.to_s.pluralize
  end

  resources :contacts do
    collection do
      get 'pending'
    end
  end

  namespace "relation" do
    resources :customs
  end
  resources :permissions

  match 'tags'     => 'tags#index', :as => 'tags'

  # Find subjects by slug
  match 'subjects/lrdd/:id' => 'subjects#lrdd', :as => 'subject_lrdd'

  resource :representation

  resources :settings do
    collection do
      put 'update_all'
    end
  end

  resources :messages

  resources :conversations

  resources :invitations

  resources :notifications do
    collection do
      put 'update_all'
    end
  end

  resources :comments

  resources :activities do
    resource :like
  end

  match 'search' => 'search#index', :as => :search

  match 'cheesecake' => 'cheesecake#index', :as => :cheesecake

  match 'ties' => 'ties#index', :as => :ties


  ##API###
  match 'api/keygen' => 'api#create_key', :as => :api_keygen
  match 'api/user/:id' => 'api#users', :as => :api_user
  match 'api/me' => 'api#users', :as => :api_me
  match 'api/me/home/' => 'api#activity_atom_feed', :format => 'atom', :as => :api_my_home
  match 'api/user/:id/public' => 'api#activity_atom_feed', :format => 'atom', :as => :api_user_activities

  match 'api/me/contacts' => 'contacts#index', :format => 'json', :as => :api_contacts
  match 'api/subjects/:s/contacts' => 'contacts#index', :format => 'json', :as => :api_subject_contacts
  ##/API##

  #====================== Events Routes ========================================
  resources :rooms

  #====================== Application Routes ===================================
  resources :sessions, :campaigns, :levels, :photos
  namespace "admin" do
    root :to => 'users#login'
    match 'login' => "users#login"
    match '/dashboard' => "users#dashboard"
    resources :users
  end

  #============== New design ==================
  match 'new' => 'page#index'

  

  #============== Page =======================
  match '/pre' => 'page#pre'
  match '/sa' => 'page#sa'
  match '/demo' => 'page#demo'

  #============== Registration=================
  match '/account/login' => 'sessions#new'
  match '/account/create/user' => 'users#signup'
  match '/create_user' => "users#create"
  match '/logout' => 'users#logout'

  #============== Search =======================
  match '/search' => 'search#index'

  #============== Campaign ========================
  match '/users/signup/fb' => 'registrations#campaign'
  match 'create_campaign' => 'registrations#create_campaign'
  match 'fb_connect' => 'page#fb_connect'
  match '/signup/campaign' => 'campaigns#new'
  match '/check_url/:url' => 'campaigns#check_url'
  match '/check_valid_url/:url' => 'campaigns#check_valid_url'
  match '/setting' => 'campaigns#setting'
  match '/upload_media' => 'campaigns#upload_media'
  match '/email/:campaign_id' => 'campaigns#email'
  match '/import_contact' => 'campaigns#import_contact'

  #==================== Campaign Profile ==============
  match "/edit/:url" => 'campaigns#edit'
  match 'campaign/:url' => 'campaigns#index'
  match '/cover' => 'page#index'

  root :to => "page#pre"
end
