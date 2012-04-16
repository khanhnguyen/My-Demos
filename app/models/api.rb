class Api
  class << self
    def get_pic(id, token)
      results = RestClient.get "https://graph.facebook.com/#{id}?access_token=#{token}"
      res = ActiveSupport::JSON.decode(results)
      return res['picture']
    end

    def get_me(token)
      JSON.parse(facebook(token).get('/me', {:parse => :json}))
    end

    def get_likes(token)
      responses = JSON.parse(facebook(token).get('/me/likes', {:parse => :json}))
      responses['data'] unless responses.blank?
    end

    def get_friends(token)
      JSON.parse(facebook(token).get('/me/friends?limit=20', {:parse => :json}))
    end

    def get_profile(facebook_id, token)
      JSON.parse(facebook(token).get("/#{facebook_id}", {:parse => :json}))
    end

    def post_to_wall(poll, token, host)
      if host.eql? "localhost"
        picture_url = "http://www.prelovac.com/vladimir/wp-content/uploads/2008/03/example.jpg"
      else
        picture_url = "http://feelerpoll.com#{poll.question.photo.url(:thumb)}"
      end
      message = "Question: #{poll.question.name} Answer: #{poll.answers}"
      facebook(token).post("/me/feed?message=#{message}&picture=#{picture_url}")
    end

    def get_photos(token)
    end

    def get_album_url(session_token)
      results = RestClient.get "https://graph.facebook.com/me/albums?access_token=#{session_token}"
      res = ActiveSupport::JSON.decode(results)
      res['data'].each do |r|
        if r['name'].eql? "Profile Pictures"
          return r['id']
        end
      end
    end

    def get_params_user(token, password)
      user = JSON.parse(facebook(token).get('/me', {:parse => :json}))
      {:user => {:first_name => user['first_name'], :last_name => user['last_name'], :email => user['email'],
          :password => password, :sex => user['gender'], :address => user['location']['name'], :facebook_id => user['id']}}
    end

    def url
      client = OAuth2::Client.new(App_ID, App_Secret,{
          :site => 'https://graph.facebook.com',
          :token_url => '/oauth/access_token'
        })
      client.authorize_url({
          :client_id => App_ID,
          :redirect_uri => REDIRECT_URI,
          :scope => SCOPE,
          :display => "popup",
          :status => "1"
        })
    end

    def facebook(token)
      OAuth2::AccessToken.new(client, token)
    end

    def get_password(signed_request)
      facebook = FacebookRegistration::SignedRequest.new
      facebook_information = facebook.call(signed_request)
      facebook_information['registration']['password']
    end
  
    def get_access_token_by_signed_request(signed_request)
      encoded_envelope = signed_request.split('.', 2)
      access_token = JSON.parse(base64_url_decode(encoded_envelope[1]))["oauth_token"]
      access_token
    end

    def get_infor(signed_request)      
      data = get_me(get_access_token_by_signed_request(signed_request))
      {'provider' => "facebook", 'uid' => data["id"], 'extra' => { 'user_hash' => { 'email' => data["email"],
            'name' => data["name"], 'password' => get_password(signed_request)} }}
    end

    def get_access_token_by_code(code)
      Api.access_token(code).token
    end

    def base64_url_decode(str)
      str += '=' * (4 - str.length.modulo(4))
      Base64.decode64(str.tr('-_','+/'))
    end

    def client
      OAuth2::Client.new(App_ID, App_Secret,{
          :site => 'https://graph.facebook.com',
          :token_url => '/oauth/access_token'
        })
    end

    def access_token(code)
      Api.client.get_token({
          :client_id => App_ID,
          :client_secret => App_Secret,
          :redirect_uri => REDIRECT_URI,
          :code => code,
          :parse => :query
        })
    end
  end
end
