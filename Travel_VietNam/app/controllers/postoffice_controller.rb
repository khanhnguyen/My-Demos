  require 'digest/sha1'
  class PostofficeController < ApplicationController
    def send_welcome_email
      # triggered via:
      # http://localhost:3000/registration/send_welcome_email
      
      # note the deliver_ prefix, this is IMPORTANT
      Postoffice.deliver_welcome("nam khanh nguyen","namkhanh@hotmail.com","12345")  
      # optional, but I like to keep people informed
      flash[:notice] = "You've successfuly registered. Please check your email for a confirmation!"
      
      # render the default action
      render :text => @str_radom
    end
    
    def radom_string
      str=""
      Digest::SHA1.hexdigest("--#{Time.now.to_s}--#{str}--")[0,13]
    end
    
    def send_mail
      email_user = session[:user_email]
      unless email_user.nil?
        id_user = User.find_by_sql("select id from users where email ='#{email_user}'")[0].id
      else
        id_user = User.find_by_sql("select id from users where email ='#{params[:your_address]}'")[0].id
      end      
      business = Business.find_by_sql("select * from businesses where id in (#{params[:array_business]})")
      Postoffice.deliver_send_mail(params[:mailto],id_user,params[:message],business)      
      render :text =>""
    end
    
    
    def sendmail_array_item(email,array_item)
      begin
        Postoffice.deliver_sendmail_array_item(email,array_item)
      rescue      
      end
    end    
  end
