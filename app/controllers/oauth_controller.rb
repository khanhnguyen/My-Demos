class OauthController < ApplicationController
  
   def start
    redirect_to Api.client.authorize_url({
        :client_id => App_ID,
        :redirect_uri => REDIRECT_URI,
        :scope => SCOPE        
      })
  end

  def callback
    begin 
      access_token = Api.client.get_token({
          :client_id => App_ID,
          :client_secret => App_Secret,
          :redirect_uri => REDIRECT_URI,          
          :code => params[:code],
          :parse => :query
        })
    rescue Exception => e
      puts "error:============", e.message      
    end
    session[:questions] = nil
    redirect_to :controller => :page, :action => :index, :token => access_token.token
  end
  
end

